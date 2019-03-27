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
            const validNumber: (inp: any) => boolean = (inp: any): boolean => {
                if (inp) {
                    if (typeof inp === "number") {
                        return true;
                    }
                    return !isNaN(inp);
                }
                return false;
            }
            if (validNumber(req.query.left) &&
                validNumber(req.query.right) &&
                validNumber(req.query.top) &&
                validNumber(req.query.bottom)) {
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
