/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { VehicleStorage } from "@donmahallem/trapeze-api-client-cache";
import * as express from "express";
import {
    GeoEndpoints,
    StopEndpoints,
    StopPointEndpoints,
    TripEndpoints,
    VehicleEndpoints,
} from "./endpoints";
import { SettingsEndpoints } from "./endpoints/settings";

/**
 *
 * @param endpoint example: http://test.domain/
 */
export const createTrapezeApiRoute: (endpoint: string) => express.Router = (endpoint: string): express.Router => {
    const trapezeApi: TrapezeApiClient = new TrapezeApiClient(endpoint);
    const str: VehicleStorage = new VehicleStorage(trapezeApi, 30000);
    const route: express.Router = express.Router();
    const geoRouter: express.Router = route.use("/geo");
    /**
     * @api {get} /geo/stations Request station locations
     * @apiName GetStationsLocations
     * @apiGroup Geo
     *
     * @apiVersion 1.0.0
     * @apiDeprecated use now (#Geo:StopLocations).
     */

    geoRouter.use("/stops", GeoEndpoints.createQueryParameterMiddleware())
        .route("")/**
    * @api {get} /geo/stops Request stop locations
    * @apiName StopLocations
    * @apiGroup Geo
    *
    * @apiVersion 1.5.0
    */
        .get(GeoEndpoints.createStopLocationsEndpoint(trapezeApi));

    geoRouter.use("/stopPoints", GeoEndpoints.createQueryParameterMiddleware())
        .route("")/**
        * @api {get} /geo/stopPoints Request stop point locations
        * @apiName StopPointLocations
        * @apiGroup Geo
        *
        * @apiVersion 2.0.0
        */
        .get(GeoEndpoints.createStopPointLocationsEndpoint(trapezeApi));
    geoRouter.use("/vehicles", GeoEndpoints.createQueryParameterMiddleware())
        .route("")
        /**
         * @api {head} /geo/vehicles Request vehicle locations
         * @apiName HeadVehicleLocations
         * @apiGroup Geo
         *
         * @apiVersion 1.9.0
         */
        .head(GeoEndpoints.createHeadVehicleLocationsEndpoint(trapezeApi, str))
        /**
         * @api {get} /geo/vehicles Request vehicle locations
         * @apiName GetVehicleLocations
         * @apiGroup Geo
         *
         * @apiVersion 1.5.0
         */
        .get(GeoEndpoints.createVehicleLocationsEndpoint(trapezeApi, str));
    geoRouter.route("/vehicle/:id([a-z0-9A-Z\-\+]+)")
        /**
         * @api {head} /geo/vehicle/:id Request vehicle location
         * @apiName GetVehicleLocation
         * @apiGroup Geo
         *
         * @apiParam {String} id Vehicle id
         * @apiVersion 1.9.0
         */
        .head(GeoEndpoints.createHeadVehicleLocationEndpoint(str))
        /**
         * @api {get} /geo/vehicle/:id Request vehicle location
         * @apiName GetVehicleLocation
         * @apiGroup Geo
         *
         * @apiParam {String} id Vehicle id
         * @apiVersion 1.5.0
         */
        .get(GeoEndpoints.createGetVehicleLocationEndpoint(str));

    const tripRouter: express.Router = route.use("/trip/:id([a-z0-9A-Z\-\+]+)");
    /**
     * @api {get} /trip/:id/passages Request Trip Passages
     * @apiName GetTripPassages
     * @apiGroup Trip
     *
     * @apiParam {String} id Vehicle id
     * @apiVersion 1.5.0
     */
    tripRouter.get("/passages", TripEndpoints.createTripPassagesEndpoint(trapezeApi, str));
    /**
     * @api {get} /trip/:id/route Request Vehicle Route
     * @apiName GetTripRoute
     * @apiGroup Trip
     *
     * @apiParam {String} id Vehicle id
     * @apiVersion 1.5.0
     */
    tripRouter.get("/route", TripEndpoints.createTripRouteEndpoint(trapezeApi));
    /**
     * @api {get} /vehicle/:id/route Request Vehicle Route
     * @apiName GetVehicleRoute
     * @apiGroup Vehicle
     *
     * @apiParam {String} id Vehicle id
     * @apiVersion 1.5.0
     */
    route.get("/vehicle/:id([a-z0-9A-Z\-\+]+)/route", VehicleEndpoints.createVehicleInfoEndpoint(trapezeApi));
    /**
     * @api {get} /stop/:id/departures Request Stop Departures
     * @apiName GetStopDepartures
     * @apiGroup Stop
     *
     * @apiParam {String} id Stop id
     * @apiVersion 1.5.0
     */
    route.get("/stop/:id([a-z0-9A-Z\-\+]+)/departures", StopEndpoints.createStopDeparturesEndpoint(trapezeApi));
    /**
     * @api {get} /stop/:id/info Request Stop Info
     * @apiName GetStopInfo
     * @apiGroup Stop
     *
     * @apiParam {String} id Stop id
     * @apiVersion 1.5.0
     */
    route.get("/stop/:id([a-z0-9A-Z\-\+]+)/info", StopEndpoints.createStopInfoEndpoint(trapezeApi));
    /**
     * @api {get} /stopPoint/:id/info Request stop point info
     * @apiName StopPointInfo
     * @apiGroup StopPoint
     *
     * @apiParam {String} id Stop Point ID
     * @apiVersion 1.5.0
     */
    route.get("/stopPoint/:id([a-z0-9A-Z\-\+]+)/info", StopPointEndpoints.createStopPointInfoEndpoint(trapezeApi));
    /**
     * @since 1.5.0
     */
    /**
     * @api {get} /settings Request Trapeze Settings
     * @apiName GetSettings
     * @apiGroup Settings
     * @apiVersion 1.5.0
     */
    route.get("/settings", SettingsEndpoints.createSettingsEndpoint(trapezeApi));
    return route;
};
