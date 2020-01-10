/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { VehicleStorage } from "@donmahallem/trapeze-api-client-cache";
import { TripId } from "@donmahallem/trapeze-api-types";
import * as express from "express";

export class TripEndpoints {
    public static createTripRouteEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> =>
            client.getRouteByTripId(req.params.id as TripId)
                .then((value) => {
                    res.json(value);
                })
                .catch(next);
    }
    public static createTripPassagesEndpoint(client: TrapezeApiClient,
                                             vehicleStorage: VehicleStorage): express.RequestHandler {
        return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> =>
            Promise
                .all([client.getTripPassages(req.params.id as TripId, req.query.mode),
                vehicleStorage.getVehicleByTripId(req.params.id as TripId)])
                .then((result) => {
                    const resp: any = result[0];
                    resp.location = result[1];
                    resp.tripId = req.params.id;
                    return resp;
                })
                .then((data: any) => {
                    res.json(data);
                })
                .catch(next);
    }
}
