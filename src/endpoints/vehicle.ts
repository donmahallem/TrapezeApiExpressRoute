/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { IVehiclePathInfo, VehicleId } from "@donmahallem/trapeze-api-types";
import * as express from "express";

export class VehicleEndpoints {
    public static createVehicleInfoEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> =>
            client.getRouteByVehicleId(req.params.id as VehicleId)
                .then((value: IVehiclePathInfo): void => {
                    res.setHeader("Cache-Control", "public, max-age=60");
                    res.json(value);
                })
                .catch(next);
    }
}
