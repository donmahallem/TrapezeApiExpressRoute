/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import * as express from "express";
import { RequestPromise } from "request-promise-native";

/**
 * Converts a http request promise to an expressjs response
 * @param prom input promise
 * @param res expressjs response object
 * @param next expressjs next callback
 */
export const promiseToResponse = <T>(prom: Promise<T> | RequestPromise<T>,
                                     res: express.Response,
                                     next?: express.NextFunction): void => {
    prom
        .then((value: T) => {
            /**
             * Promise resolved and the body will be forwarded to the requestee
             */
            res.status(200).json(value);
        })
        .catch((err: any) => {
            if (next) {
                /**
                 * If a next callback is provided pass the error to next method
                 */
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
