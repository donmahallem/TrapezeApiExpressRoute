/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import * as express from "express";

export class StopPointEndpoints {
    public static createStopPointInfoEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> =>
            client.getStopPointInfo(req.params.id)
                .then((value) => {
                    res.setHeader("Cache-Control", "public, max-age=60");
                    res.json(value);
                }).catch(next);
    }
}
