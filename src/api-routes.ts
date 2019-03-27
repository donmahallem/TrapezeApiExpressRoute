import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
import * as express from "express";
import { RequestPromise } from "request-promise-native";
import {
} from "./";
import {
    GeoEndpoints,
    StopEndpoints,
    StopPointEndpoints,
    TripEndpoints,
    VehicleEndpoints,
} from "./endpoints";

/**
 *
 * @param endpoint example: http://test.domain/
 */
export const createTrapezeApiRoute: (endpoint: string) => express.Router = (endpoint: string): express.Router => {
    const trapezeApi: TrapezeApiClient = new TrapezeApiClient(endpoint);
    const str: VehicleStorage = new VehicleStorage(trapezeApi, 30000);
    const route: express.Router = express.Router();
    route.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    route.get("/geo/stations", GeoEndpoints.createStationLocationsEndpoint(trapezeApi));
    route.get("/geo/vehicles", GeoEndpoints.createVehicleLocationsEndpoint(trapezeApi, str));
    route.get("/geo/vehicle/:id", GeoEndpoints.createVehicleLocationEndpoint(str));
    route.get("/trip/:id/passages", TripEndpoints.createTripPassagesEndpoint(trapezeApi, str));
    route.get("/trip/:id/route", TripEndpoints.createTripRouteEndpoint(trapezeApi));
    /**
     * @api {get} /vehicle/:id/route Request Vehicle Route
     * @apiName GetVehicleRoute
     * @apiGroup Vehicle
     *
     * @apiParam {String} id Vehicle id
     */
    route.get("/vehicle/:id/route", VehicleEndpoints.createVehicleInfoEndpoint(trapezeApi));
    /**
     * @api {get} /stop/:id/departures Request Stop Departures
     * @apiName GetStopDepartures
     * @apiGroup Stop
     *
     * @apiParam {String} id Stop id
     */
    route.get("/stop/:id/departures", StopEndpoints.createStopDeparturesEndpoint(trapezeApi));
    /**
     * @api {get} /stop/:id/info Request Stop Info
     * @apiName GetStopInfo
     * @apiGroup Stop
     *
     * @apiParam {String} id Stop id
     */
    route.get("/stop/:id/info", StopEndpoints.createStopInfoEndpoint(trapezeApi));
    route.get("/stopPoint/:id/info", StopPointEndpoints.createStopPointInfoEndpoint(trapezeApi));
    return route;
};
