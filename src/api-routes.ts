import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
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
    route.get("/geo/stations", GeoEndpoints.createStationLocationsEndpoint(trapezeApi));
    route.get("/geo/vehicles", GeoEndpoints.createVehicleLocationsEndpoint(trapezeApi, str));
    route.get("/geo/vehicle/:id([a-z0-9A-Z\-\+]+)", GeoEndpoints.createVehicleLocationEndpoint(str));
    route.get("/trip/:id([a-z0-9A-Z\-\+]+)/passages", TripEndpoints.createTripPassagesEndpoint(trapezeApi, str));
    route.get("/trip/:id([a-z0-9A-Z\-\+]+)/route", TripEndpoints.createTripRouteEndpoint(trapezeApi));
    /**
     * @api {get} /vehicle/:id/route Request Vehicle Route
     * @apiName GetVehicleRoute
     * @apiGroup Vehicle
     *
     * @apiParam {String} id Vehicle id
     */
    route.get("/vehicle/:id([a-z0-9A-Z\-\+]+)/route", VehicleEndpoints.createVehicleInfoEndpoint(trapezeApi));
    /**
     * @api {get} /stop/:id/departures Request Stop Departures
     * @apiName GetStopDepartures
     * @apiGroup Stop
     *
     * @apiParam {String} id Stop id
     */
    route.get("/stop/:id([a-z0-9A-Z\-\+]+)/departures", StopEndpoints.createStopDeparturesEndpoint(trapezeApi));
    /**
     * @api {get} /stop/:id/info Request Stop Info
     * @apiName GetStopInfo
     * @apiGroup Stop
     *
     * @apiParam {String} id Stop id
     */
    route.get("/stop/:id([a-z0-9A-Z\-\+]+)/info", StopEndpoints.createStopInfoEndpoint(trapezeApi));
    route.get("/stopPoint/:id([a-z0-9A-Z\-\+]+)/info", StopPointEndpoints.createStopPointInfoEndpoint(trapezeApi));
    /**
     * @since 1.5.0
     */
    route.get("/settings", SettingsEndpoints.createSettingsEndpoint(trapezeApi));
    return route;
};
