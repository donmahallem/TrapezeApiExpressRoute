/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from '@donmahallem/trapeze-api-client';
import { ISettings } from '@donmahallem/trapeze-api-types';
import * as express from 'express';
import { SettingsMessage } from '../models';
import { promiseToResponse, IMessageType } from '../promise-to-response';

export class SettingsEndpoints {
    public static createSettingsEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            promiseToResponse(client.getSettings(), SettingsMessage as IMessageType<ISettings>, res, next);
        };
    }
}
