
import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
import { TripId } from "@donmahallem/trapeze-api-types";
import * as express from "express";
import { promiseToResponse } from "../promise-to-response";

export class TripEndpoints {
    public static createTripRouteEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            promiseToResponse(client.getRouteByTripId(req.params.id as TripId), res, next);
        };
    }
    public static createTripPassagesEndpoint(client: TrapezeApiClient,
                                             vehicleStorage: VehicleStorage): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            const prom: Promise<any> = Promise
                .all([client.getTripPassages(req.params.id as TripId, req.query.mode),
                vehicleStorage.getVehicleByTripId(req.params.id)])
                .then((result) => {
                    const resp: any = result[0];
                    resp.location = result[1];
                    resp.tripId = req.params.id;
                    return resp;
                });
            promiseToResponse(prom, res, next);
        };
    }
}
