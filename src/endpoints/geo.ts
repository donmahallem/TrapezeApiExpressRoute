import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
import * as express from "express";
import { promiseToResponse } from "../promise-to-response";

export class GeoEndpoints {
    public static createStationLocationsEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            promiseToResponse(client.getStations(), res, next);
        };
    }
    public static createVehicleLocationsEndpoint(client: TrapezeApiClient,
                                                 vehicleStorage: VehicleStorage): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            if (!isNaN(req.query.left) && !isNaN(req.query.left) && !isNaN(req.query.left) && !isNaN(req.query.left)) {
                promiseToResponse(vehicleStorage.getVehicles(req.query.left,
                    req.query.right,
                    req.query.top,
                    req.query.bottom), res, next);
            } else {
                promiseToResponse(client.getVehicleLocations(), res, next);
            }
        };
    }

    public static createVehicleLocationEndpoint(vehicleStorage: VehicleStorage): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            promiseToResponse(vehicleStorage.getVehicle(req.params.id), res, next);
        };
    }
}
