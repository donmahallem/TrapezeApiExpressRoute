/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { ISettings } from "@donmahallem/trapeze-api-types";
import * as express from "express";

export class SettingsEndpoints {
    public static createSettingsEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> =>
            client.getSettings()
                .then((value: ISettings): void => {
                    res.setHeader("Cache-Control", "public, max-age=86400");
                    res.json(value);
                })
                .catch(next);
    }
}
