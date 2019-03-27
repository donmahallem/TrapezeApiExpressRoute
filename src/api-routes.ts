import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
import * as express from "express";
import { RequestPromise } from "request-promise-native";
import {
} from "./";
import {
    GeoEndpoints,
    StopEndpoints,
    StopPointEndpoints,
    TripEndpoints,
    VehicleEndpoints,
} from "./endpoints";

/**
 *
 * @param endpoint example: http://test.domain/
 */
export const createTrapezeApiRoute: (endpoint: string) => express.Router = (endpoint: string): express.Router => {
    const trapezeApi: TrapezeApiClient = new TrapezeApiClient(endpoint);
    const str: VehicleStorage = new VehicleStorage(trapezeApi, 30000);
    const route: express.Router = express.Router();
    route.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    route.get("/api/geo/stations", GeoEndpoints.createStationLocationsEndpoint(trapezeApi));
    route.get("/api/geo/vehicles", GeoEndpoints.createVehicleLocationsEndpoint(trapezeApi, str));
    route.get("/api/geo/vehicle/:id", GeoEndpoints.createVehicleLocationEndpoint(str));
    route.get("/api/trip/:id/passages", TripEndpoints.createTripPassagesEndpoint(trapezeApi, str));
    route.get("/api/trip/:id/route", TripEndpoints.createTripRouteEndpoint(trapezeApi));
    route.get("/api/vehicle/:id/route", VehicleEndpoints.createVehicleInfoEndpoint(trapezeApi));
    route.get("/api/stop/:id/departures", StopEndpoints.createStopDeparturesEndpoint(trapezeApi));
    route.get("/api/stop/:id/info", StopEndpoints.createStopInfoEndpoint(trapezeApi));
    route.get("/api/stopPoint/:id/info", StopPointEndpoints.createStopPointInfoEndpoint(trapezeApi));
    return route;
};
