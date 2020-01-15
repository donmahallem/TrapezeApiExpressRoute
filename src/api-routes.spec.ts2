/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import * as supertest from "supertest";
import { createTrapezeApiRoute } from "./api-routes";
import { GeoEndpoints, StopEndpoints, StopPointEndpoints, TripEndpoints, VehicleEndpoints } from "./endpoints";
import { SettingsEndpoints } from "./endpoints/settings";

const validTestIds: string[] = [
    "test",
    "1234",
    "otherUrl-",
    "+otherUrl",
];
const invalidTestIds: string[] = [
    " test",
    "1!234",
    "ot%20herUrl-",
];

type GeoEndPointMethods = Exclude<keyof typeof GeoEndpoints, "prototype">;
type StopEndpointMethods = Exclude<keyof typeof StopEndpoints, "prototype">;
type SettingEndpointMethods = Exclude<keyof typeof SettingsEndpoints, "prototype">;
type TripEndpointMethods = Exclude<keyof typeof TripEndpoints, "prototype">;
type StopPointEndpointMethods = Exclude<keyof typeof StopPointEndpoints, "prototype">;
type VehicleEndpointMethods = Exclude<keyof typeof VehicleEndpoints, "prototype">;
type AnyEndpointMethod = Exclude<GeoEndPointMethods |
    StopEndpointMethods |
    SettingEndpointMethods |
    TripEndpointMethods |
    StopEndpointMethods |
    VehicleEndpointMethods |
    StopPointEndpointMethods, "createQueryParameterMiddleware">;
interface ITestElement {
    obj: any;
    path: string;
    noId?: boolean;
    method: "GET" | "HEAD";
}
type TestElements = Record<AnyEndpointMethod, ITestElement>;
describe("api-routes.ts", () => {
    describe("createTrapezeApiRoute()", () => {
        let app: express.Express;
        let routeErrorStub: sinon.SinonStub;
        const NOT_FOUND_RESPONSE: any = { error: true, status: 404 };
        const NOT_FOUND_RESPONSE_LENGTH: string = "" + JSON.stringify(NOT_FOUND_RESPONSE).length;
        const SUCCESS_RESPONSE: any = { error: false, status: 200 };
        const SUCCESS_RESPONSE_LENGTH: string = "" + JSON.stringify(SUCCESS_RESPONSE).length;
        before(() => {
            routeErrorStub = sinon.stub();
            routeErrorStub.callsFake((err, req, res, next) => {
                res.status(501).json(NOT_FOUND_RESPONSE);
            });
        });
        beforeEach(() => {
            const route = createTrapezeApiRoute("https://localhost:12345/");
            app = express();
            app.use(route);
            app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
                res.status(404);
                res.json(NOT_FOUND_RESPONSE);
            });
            app.use((err, req, res, next) => {
                routeErrorStub(err, req, res, next);
            });
        });
        afterEach(() => {
            routeErrorStub.resetHistory();
        });
        describe("test testing setup", () => {
            let stub: sinon.SinonStub;
            const testError: Error = new Error("test error");
            before(() => {
                stub = sinon.stub(VehicleEndpoints, "createVehicleInfoEndpoint");
                stub.callsFake(() =>
                    (req, res, next) => {
                        next(testError);
                    });
            });
            afterEach(() => {
                stub.resetHistory();
            });
            after(() => {
                stub.restore();
            });
            it("should use the 404 handler", (done) => {
                supertest(app)
                    .get("/unknown/route")
                    .expect(404)
                    .expect("Content-Type", /json/)
                    .expect("Content-Length", NOT_FOUND_RESPONSE_LENGTH)
                    .end((err, res) => {
                        if (err) {
                            done(err);
                            return;
                        }
                        expect(routeErrorStub.callCount).to.equal(0);
                        expect(res.body).to.deep.equal(NOT_FOUND_RESPONSE);
                        done();
                    });
            });
            it("should use the error handler", (done) => {
                supertest(app)
                    .get("/vehicle/asdf/route")
                    .expect("Content-Type", /json/)
                    .expect("Content-Length", NOT_FOUND_RESPONSE_LENGTH)
                    .expect(501)
                    .end((err, res) => {
                        if (err) {
                            done(err);
                            return;
                        }
                        expect(routeErrorStub.callCount).to.equal(1);
                        expect(res.body).to.deep.equal(NOT_FOUND_RESPONSE);
                        done();
                    });
            });
        });
        const testElements: TestElements = {
            createVehicleInfoEndpoint: {
                method: "GET",
                obj: VehicleEndpoints,
                path: "/vehicle/:id/route",
            },
            createTripPassagesEndpoint: {
                method: "GET",
                obj: TripEndpoints,
                path: "/trip/:id/passages",
            },
            createTripRouteEndpoint: {
                method: "GET",
                obj: TripEndpoints,
                path: "/trip/:id/route",
            },
            createStopDeparturesEndpoint: {
                method: "GET",
                obj: StopEndpoints,
                path: "/stop/:id/departures",
            },
            createStopInfoEndpoint: {
                method: "GET",
                obj: StopEndpoints,
                path: "/stop/:id/info",
            },
            createStopPointInfoEndpoint: {
                method: "GET",
                obj: StopPointEndpoints,
                path: "/stopPoint/:id/info",
            },
            createGetVehicleLocationEndpoint: {
                method: "GET",
                obj: GeoEndpoints,
                path: "/geo/vehicle/:id",
            },
            createSettingsEndpoint: {
                method: "GET",
                noId: true,
                obj: SettingsEndpoints,
                path: "/settings",
            },
            createHeadVehicleLocationsEndpoint: {
                method: "GET",
                noId: true,
                obj: GeoEndpoints,
                path: "/geo/vehicles",
            },
            createStopLocationsEndpoint: {
                method: "GET",
                noId: true,
                obj: StopEndpoints,
                path: "/geo/stops",
            },
            createStopPointLocationsEndpoint: {
                method: "GET",
                noId: true,
                obj: StopPointEndpoints,
                path: "/geo/stopPoints",
            },
            createGetVehicleLocationsEndpoint: {
                method: "GET",
                obj: GeoEndpoints,
                path: "/geo/vehicle/:id",
            },
            createHeadVehicleLocationEndpoint: {
                method: "GET",
                obj: GeoEndpoints,
                path: "/geo/vehicle/:id",
            },
        };
        Object.keys(testElements)
            .forEach((methodName: AnyEndpointMethod) => {
                const testElement: ITestElement = testElements[methodName];
                describe(testElement.path, () => {
                    let stub: sinon.SinonStub;
                    before(() => {
                        stub = sinon.stub(testElement.obj, methodName);
                        stub.callsFake(() =>
                            (req, res, next) => {
                                res.json(SUCCESS_RESPONSE);
                            });
                    });
                    afterEach(() => {
                        stub.resetHistory();
                    });
                    after(() => {
                        stub.restore();
                    });
                    validTestIds.forEach((testId: string) => {
                        it('should pass for id "' + testId + '"', (done) => {
                            const queryPath: string = testElement.path.replace(":id", testId);
                            (testElement.method === "HEAD" ?
                                supertest(app).get(queryPath) :
                                supertest(app).head(queryPath))
                                .expect("Content-Type", /json/)
                                .expect("Content-Length", SUCCESS_RESPONSE_LENGTH)
                                .expect(200)
                                .end((err, res) => {
                                    if (err) {
                                        done(err);
                                        return;
                                    }
                                    expect(routeErrorStub.callCount).to.equal(0);
                                    expect(res.body).to.deep.equal(SUCCESS_RESPONSE);
                                    done();
                                });
                        });
                    });
                    if (!testElement.noId) {
                        invalidTestIds.forEach((testId: string) => {
                            it('should not pass for id "' + testId + '"', (done) => {
                                supertest(app)
                                    .get(testElement.path.replace(":id", testId))
                                    .expect("Content-Type", /json/)
                                    .expect("Content-Length", NOT_FOUND_RESPONSE_LENGTH)
                                    .expect(404)
                                    .end((err, res) => {
                                        if (err) {
                                            done(err);
                                            return;
                                        }
                                        expect(routeErrorStub.callCount).to.equal(0);
                                        expect(res.body).to.deep.equal(NOT_FOUND_RESPONSE);
                                        done();
                                    });
                            });
                        });
                    }
                });
            });
    });
});
