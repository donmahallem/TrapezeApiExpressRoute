/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { IStopInfo, IStopPassage, StopId } from "@donmahallem/trapeze-api-types";
import * as express from "express";

export class StopEndpoints {
    public static createStopInfoEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> =>
            client.getStopInfo(req.params.id as StopId)
                .then((value: IStopInfo) => {
                    res.setHeader("Cache-Control", "public, max-age=60");
                    res.json(value);
                })
                .catch(next);
    }
    public static createStopDeparturesEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> =>
            client.getStopPassages(req.params.id as StopId)
                .then((value: IStopPassage) => {
                    res.setHeader("Cache-Control", "public, max-age=10");
                    res.json(value);
                })
                .catch(next);
    }
}
