/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import * as express from 'express';
import { Writer } from 'protobufjs';
import { RequestPromise } from 'request-promise-native';

interface IMessageType<T> {
    encode(inp: T): Writer;
}
/**
 * takes promises and passes them on to an express response
 */
export const promiseToResponse = <T extends object>(prom: Promise<T> | RequestPromise<T>,
    protoMessage: IMessageType<T>,
    res: express.Response,
    next?: express.NextFunction): void => {
    prom
        .then((value: T): void => {
            res.format({
                'application/json': (): void => {
                    res.status(200).json(value);
                },
                'application/octet-stream': (): void => {
                    res
                        .contentType('application/octet-stream')
                        .status(200)
                        .send(protoMessage.encode(value).finish());
                },
                'default': () => {
                    res.status(400)
                        .json({ status: 400, message: 'Bad Request' });
                },
            });
        })
        .catch((err: any): void => {
            if (next) {
                next(err);
            } else {
                const code: number = err.statusCode ? err.statusCode : 500;
                res.status(code).json({
                    error: true,
                    statusCode: code,
                });
            }
        });
};
