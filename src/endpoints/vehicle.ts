
import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import * as express from "express";
import { promiseToResponse } from "../promise-to-response";

export class VehicleEndpoints {
    public static createVehicleInfoEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            promiseToResponse(client.getRouteByVehicleId(req.params.id), res, next);
        };
    }
}
