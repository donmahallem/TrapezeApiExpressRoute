/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { VehicleStorage, TimestampedVehiclelocation, ISuccessStatus } from "@donmahallem/trapeze-api-client-cache";
import {
    IStopLocations,
    IVehicleLocationList,
    VehicleId,
    IStopPointLocations,
} from "@donmahallem/trapeze-api-types";
import * as express from "express";
import * as jsonschema from "jsonschema";

const numberPattern: jsonschema.Schema = {
    oneOf: [
        {
            type: "number",
        }, {
            pattern: "^[\\+\\-]?\\d+$",
            type: "string",
        },
    ],
};
export const geoFenceSchema: jsonschema.Schema = {
    properties: {
        bottom: numberPattern,
        left: numberPattern,
        right: numberPattern,
        top: numberPattern,
    },
    required: ["top", "bottom", "right", "left"],
    type: "object",
};
export const hasFenceQueryParameter: (req: express.Request) => boolean = (req: express.Request): boolean => {
    if (req && req.query) {
        return req.query.left || req.query.bottom || req.query.right || req.query.top;
    }
    return false;
};

export class GeoEndpoints {
    public static createStopLocationsEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            (hasFenceQueryParameter(req) ?
                client.getStopLocations() :
                client.getStopLocations(req.query.left,
                    req.query.right,
                    req.query.top,
                    req.query.bottom))
                .then((value: IStopLocations): void => {
                    res.setHeader("Cache-Control", "public, max-age=86400");
                    res.json(value);
                })
                .catch(next);
        };
    }
    public static createStopPointLocationsEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            (hasFenceQueryParameter(req) ?
                client.getStopPointLocations() :
                client.getStopPointLocations(req.query.left,
                    req.query.right,
                    req.query.top,
                    req.query.bottom))
                .then((value: IStopPointLocations): void => {
                    res.setHeader("Cache-Control", "public, max-age=86400");
                    res.json(value);
                })
                .catch(next);
        };
    }

    public static createQueryParameterMiddleware(): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            if (req.query && (req.query.top || req.query.bottom || req.query.right || req.query.left)) {
                const result: jsonschema.ValidatorResult = jsonschema.validate(req.query, geoFenceSchema);
                if (result.valid) {
                    if (req.query.left >= req.query.right) {
                        next(new Error("left must be smaller than right"));
                        return;
                    }
                    if (req.query.bottom >= req.query.top) {
                        next(new Error("bottom must be smaller than top"));
                        return;
                    }
                } else {
                    next(new Error("Invalid number or type of query parameters"));
                }
            }
            next();
        };
    }
    public static createHeadVehicleLocationsEndpoint(vehicleStorage: VehicleStorage): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            vehicleStorage.fetchSuccessOrThrow()
                .then((val: ISuccessStatus): void => {
                    res.setHeader("ETag", "t" + val.lastUpdate);
                    res.end();
                })
                .catch(next);
        };
    }

    public static createGetVehicleLocationsEndpoint(vehicleStorage: VehicleStorage): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            if (req.query && (req.query.top && req.query.bottom && req.query.right && req.query.left)) {
                vehicleStorage.getVehicles(req.query.left,
                    req.query.right,
                    req.query.top,
                    req.query.bottom)
                    .then((value: IVehicleLocationList) => {
                        res.setHeader("ETag", "t" + value.lastUpdate);
                        res.json(value);
                    })
                    .catch(next);

            } else {
                vehicleStorage.getAllVehicles()
                    .then((value: IVehicleLocationList) => {
                        res.setHeader("ETag", "t" + value.lastUpdate);
                        res.json(value);
                    })
                    .catch(next);
            }
        };
    }

    public static createGetVehicleLocationEndpoint(vehicleStorage: VehicleStorage): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            vehicleStorage.getVehicle(req.params.id as VehicleId)
                .then((value: TimestampedVehiclelocation): void => {
                    res.setHeader("ETag", "t" + value.lastUpdate);
                    res.json(value);
                })
                .catch(next);
        };
    }
    public static createHeadVehicleLocationEndpoint(vehicleStorage: VehicleStorage): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            vehicleStorage.getVehicle(req.params.id as VehicleId)
                .then((value: TimestampedVehiclelocation): void => {
                    res.setHeader("ETag", "t" + value.lastUpdate);
                    res.end();
                })
                .catch(next);
        };
    }
}
