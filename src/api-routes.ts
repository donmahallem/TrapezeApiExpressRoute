import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
import * as express from "express";
import { RequestPromise } from "request-promise-native";
import {
} from "./";
const app: express.Router = express.Router();

export const promiseToResponse = <T>(prom: Promise<T> | RequestPromise<T>, res: express.Response, next?: express.NextFunction): void => {
    prom
        .then((value: T) => {
            res.json(value);
        })
        .catch((err: any) => {
            if (next) {
                next(err);
            } else {
                res.status(500).json({
                    error: true,
                });
            }
        });
};
const trapezeApi: TrapezeApiClient = new TrapezeApiClient(process.argv[2]);
const str: VehicleStorage = new VehicleStorage(trapezeApi, 30000);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/api/geo/stations", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    promiseToResponse(trapezeApi.getStations(), res, next);
});
app.get("/api/geo/vehicles", (req, res) => {
    if (!isNaN(req.query.left) && !isNaN(req.query.left) && !isNaN(req.query.left) && !isNaN(req.query.left)) {
        str.getVehicles(req.query.left,
            req.query.right,
            req.query.top,
            req.query.bottom)
            .then((dataRes) => {
                res.json({ vehicles: dataRes });
            }).catch((err) => {
                res.status(500)
                    .send("error");
            });
    } else {
        trapezeApi.getVehicleLocations()
            .then((dataRes) => {
                res.json(dataRes);
            }).catch((err) => {
                res.status(500)
                    .send("error");
            });
    }
});

app.get("/api/trip/:id/passages", (req, res) => {
    Promise.all([trapezeApi.getTripPassages(req.params.id, req.query.mode), str.getVehicleByTripId(req.params.id)])
        .then((result) => {/*
            const resp = {
                passages: result[0],
                location: result[1],
                tripId: req.params.id
            }*/
            const resp: any = result[0];
            resp.location = result[1];
            resp.tripId = req.params.id;
            res.json(resp);
        })
        .catch((err) => {
            if (err == null) {
                res.status(404).send("not found");
            } else {
                res.status(500).send("err");
            }
        });
});

app.get("/api/vehicle/:id/route", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    promiseToResponse(trapezeApi.getRouteByVehicleId(req.params.id), res, next);
});
app.get("/api/trip/:id/route", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    promiseToResponse(trapezeApi.getRouteByTripId(req.params.id), res, next);
});
app.get("/api/stop/:id/departures", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    promiseToResponse(trapezeApi.getStopPassages(req.params.id), res, next);
});
app.get("/api/stop/:id/info", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    promiseToResponse(trapezeApi.getStopInfo(req.params.id), res, next);
});
app.get("/api/stopPoint/:id/info", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    promiseToResponse(trapezeApi.getStopPointInfo(req.params.id), res, next);
});
app.get("/api/geo/vehicle/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    str.getVehicle(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            if (err == null) {
                res.status(404).send("not found");
            } else {
                res.status(500).send("err");
            }
        });
});
// app.use(express.static(__dirname + '/app/index.html'));
app.use(express.static(__dirname + "/../app"));
app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/../app/index.html");
});
module.exports = app;
