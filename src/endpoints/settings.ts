/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from '@donmahallem/trapeze-api-client';
import * as express from 'express';
import { promiseToResponse, IMessageType } from '../promise-to-response';
import { ISettings } from '@donmahallem/trapeze-api-types';
import { SettingsMessage } from '../models';


export class SettingsEndpoints {
    public static createSettingsEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            promiseToResponse(client.getSettings(), SettingsMessage as IMessageType<ISettings>, res, next);
        };
    }
}
