/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import * as express from "express";
import { RequestPromise } from "request-promise-native";

/**
 * takes promises and passes them on to an express response
 * @param prom
 * @param res
 * @param next
 */
export const promiseToResponse = <T>(prom: Promise<T> | RequestPromise<T>,
                                     res: express.Response,
                                     next?: express.NextFunction): void => {
    prom
        .then((value: T) => {
            res.status(200).json(value);
        })
        .catch((err: any) => {
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
