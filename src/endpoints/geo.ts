import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
import * as express from "express";
import * as jsonschema from "jsonschema";
import { promiseToResponse } from "../promise-to-response";

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

export class GeoEndpoints {
    public static createStationLocationsEndpoint(client: TrapezeApiClient): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            promiseToResponse(client.getStationLocations(), res, next);
        };
    }
    public static createVehicleLocationsEndpoint(client: TrapezeApiClient,
                                                 vehicleStorage: VehicleStorage): express.RequestHandler {
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
                    promiseToResponse(vehicleStorage.getVehicles(req.query.left,
                        req.query.right,
                        req.query.top,
                        req.query.bottom), res, next);
                } else {
                    next(new Error("Invalid number or type of query parameters"));
                }
            } else {
                promiseToResponse(client.getVehicleLocations(), res, next);
            }
        };
    }

    public static createVehicleLocationEndpoint(vehicleStorage: VehicleStorage): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            promiseToResponse(vehicleStorage.getVehicle(req.params.id), res, next);
        };
    }
}
