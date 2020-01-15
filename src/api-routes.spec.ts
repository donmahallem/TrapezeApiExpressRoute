/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */
// tslint:disable:no-unused-expression
import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import * as supertest from "supertest";
import * as testObj from "./api-routes";
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
const NOT_FOUND_RESPONSE: any = { error: true, status: 404 };
const NOT_FOUND_RESPONSE_LENGTH: string = "" + JSON.stringify(NOT_FOUND_RESPONSE).length;
const SUCCESS_RESPONSE: any = { error: false, status: 200 };
const SUCCESS_RESPONSE_LENGTH: string = "" + JSON.stringify(SUCCESS_RESPONSE).length;
const createDummyRouter: (requestHandler: express.RequestHandler) => express.Router =
    (requestHandler: express.RequestHandler) => {
        const router: express.Router = express.Router();
        router.use("*", requestHandler);
        return router;
    };
const createDummySuccessResponse: (id: string) => express.RequestHandler = (id: string): express.RequestHandler =>
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        setTimeout(() => {
            res.setHeader("test", req.method + req.baseUrl + req.path);
            res.json({ data: id });
        }, 50);
    };
describe("api-routes.ts", () => {
    describe("test helpers", () => {
        describe("createDummySuccessResponse", () => {
            const testId: string = "any test id";
            it("should call json response", (done) => {
                const jsonStub: sinon.SinonStub = sinon.stub();
                const headerStub: sinon.SinonStub = sinon.stub();
                jsonStub.callsFake((...args) => {
                    expect(args).to.deep.equal([{ data: testId }]);
                    expect(headerStub.callCount).to.equal(1);
                    expect(headerStub.getCall(0).args).to.deep.equal(["test", "asdf/foo/bar"]);
                    done();
                });
                const reqHandler: express.RequestHandler = createDummySuccessResponse(testId);
                reqHandler({
                    baseUrl: "/foo",
                    method: "asdf",
                    path: "/bar",
                } as any, { json: jsonStub, setHeader: headerStub } as any, undefined);
            });
        });
        describe("createDummyRoute", () => {
            let app: express.Application;
            let stubRequestHandler: sinon.SinonStub;
            before(() => {
                stubRequestHandler = sinon.stub();
            });
            beforeEach(() => {
                app = express();
                app.use(createDummyRouter(stubRequestHandler));
                stubRequestHandler.callsFake((req, res, next) => {
                    setTimeout(() => {
                        res.json({ test: 1 });
                    }, 50);
                });
            });
            afterEach(() => {
                stubRequestHandler.reset();
            });
            const testPaths: string[] = ["/geo/any/", "/", "/vehicles/"];
            testPaths.forEach((testPath: string): void => {
                describe("test path: " + testPath, () => {
                    it("should pass for a GET request", () =>
                        supertest(app)
                            .get(testPath)
                            .expect(200)
                            .expect("Content-Type", /json/)
                            .expect({ test: 1 })
                            .then((body: any) => {
                                expect(stubRequestHandler.calledOnce).to.be.true;
                                const req: express.Request = stubRequestHandler.getCall(0).args[0];
                                expect(req.baseUrl + req.path).to.equal(testPath);
                            }));
                    it("should pass for a HEAD request", () =>
                        supertest(app)
                            .get(testPath)
                            .expect(200)
                            .expect("Content-Type", /json/)
                            .expect({ test: 1 })
                            .then((body: any) => {
                                expect(stubRequestHandler.calledOnce).to.be.true;
                                const req: express.Request = stubRequestHandler.getCall(0).args[0];
                                expect(req.baseUrl + req.path).to.equal(testPath);
                            }));
                });
            });
        });
    });
    describe("createTrapezeApiRoute()", () => {
        let app: express.Express;
        let routeErrorStub: sinon.SinonStub;
        let sandbox: sinon.SinonSandbox;
        let createGeoRoutesStub: sinon.SinonStub;
        let createTripRoutesStub: sinon.SinonStub;
        let createStopRoutesStub: sinon.SinonStub;
        let createVehicleRoutesStub: sinon.SinonStub;
        let createStopPointRoutesStub: sinon.SinonStub;
        let createSettingsRoutesStub: sinon.SinonStub;
        let createGeoRoutesHandlerStub: sinon.SinonStub;
        let createTripRoutesHandlerStub: sinon.SinonStub;
        let createStopRoutesHandlerStub: sinon.SinonStub;
        let createVehicleRoutesHandlerStub: sinon.SinonStub;
        let createStopPointRoutesHandlerStub: sinon.SinonStub;
        let createSettingsRoutesHandlerStub: sinon.SinonStub;
        before(() => {
            sandbox = sinon.createSandbox();
            routeErrorStub = sandbox.stub();
            createGeoRoutesHandlerStub = sandbox.stub();
            createTripRoutesHandlerStub = sandbox.stub();
            createStopRoutesHandlerStub = sandbox.stub();
            createVehicleRoutesHandlerStub = sandbox.stub();
            createStopPointRoutesHandlerStub = sandbox.stub();
            createSettingsRoutesHandlerStub = sandbox.stub();
            createGeoRoutesStub = sandbox.stub(testObj, "createGeoRoutes");
            createTripRoutesStub = sandbox.stub(testObj, "createTripRoutes");
            createStopRoutesStub = sandbox.stub(testObj, "createStopRoutes");
            createVehicleRoutesStub = sandbox.stub(testObj, "createVehicleRoutes");
            createStopPointRoutesStub = sandbox.stub(testObj, "createStopPointRoutes");
            createSettingsRoutesStub = sandbox.stub(SettingsEndpoints, "createSettingsEndpoint");
            createGeoRoutesHandlerStub.callsFake(createDummySuccessResponse("geo"));
            createTripRoutesHandlerStub.callsFake(createDummySuccessResponse("trip"));
            createStopRoutesHandlerStub.callsFake(createDummySuccessResponse("stop"));
            createVehicleRoutesHandlerStub.callsFake(createDummySuccessResponse("vehicle"));
            createStopPointRoutesHandlerStub.callsFake(createDummySuccessResponse("stopPoint"));
            createSettingsRoutesHandlerStub.callsFake(createDummySuccessResponse("settings"));
            createGeoRoutesStub.returns(createDummyRouter(createGeoRoutesHandlerStub));
            createTripRoutesStub.returns(createDummyRouter(createTripRoutesHandlerStub));
            createStopRoutesStub.returns(createDummyRouter(createStopRoutesHandlerStub));
            createVehicleRoutesStub.returns(createDummyRouter(createVehicleRoutesHandlerStub));
            createStopPointRoutesStub.returns(createDummyRouter(createStopPointRoutesHandlerStub));
            createSettingsRoutesStub.returns(createDummyRouter(createSettingsRoutesHandlerStub));
        });
        beforeEach(() => {
            routeErrorStub.callsFake((err, req, res, next) => {
                res.status(501).json(NOT_FOUND_RESPONSE);
            });
            const router: express.Router = testObj.createTrapezeApiRoute("https://localhost:54321/");
            app = express();
            app.use(router);
            app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
                res.status(404);
                res.json(NOT_FOUND_RESPONSE);
            });
            app.use((err, req, res, next) => {
                // required so there are four arguments
                routeErrorStub(err, req, res, next);
            });
        });
        afterEach(() => {
            sandbox.resetHistory();
        });
        after(() => {
            sandbox.restore();
        });
        it("should init the router correctly", () => {
            expect(createGeoRoutesStub.callCount, "geo route should be created once").to.equal(1);
            expect(createTripRoutesStub.callCount, "trip route should be created once").to.equal(1);
            expect(createStopRoutesStub.callCount, "stop route should be created once").to.equal(1);
            expect(createVehicleRoutesStub.callCount, "vehicle route should be created once").to.equal(1);
            expect(createStopPointRoutesStub.callCount, "stopPoint route should be created once").to.equal(1);
            expect(createSettingsRoutesStub.callCount, "settings route should be created once").to.equal(1);
        });
        const pathSuffixes: string[] = ["", "/suffix"];
        const pathPrefixes: Array<{
            prefix: string,
            geo?: boolean,
            stop?: boolean,
            stopPoint?: boolean,
            trip?: boolean,
            vehicle?: boolean,
            settings?: boolean,
        }> = [{ prefix: "geo", geo: true },
        { prefix: "stop", stop: true },
        { prefix: "trip", trip: true },
        { prefix: "vehicle", vehicle: true },
        { prefix: "stopPoint", stopPoint: true },
        { prefix: "settings", settings: true }];
        pathPrefixes.forEach((pathPrefix) => {
            describe(pathPrefix.prefix, () => {
                pathSuffixes.forEach((pathSuffix) => {
                    const fullPath: string = "/" + pathPrefix.prefix + pathSuffix;
                    if (pathPrefix.settings && pathSuffix !== "") {
                        return;
                    }
                    it("should GET the " + pathPrefix.prefix + " route handler on path '" + fullPath + "'", () =>
                        supertest(app)
                            .get(fullPath)
                            .expect(200)
                            .expect("Content-Type", /json/)
                            .expect("test", "GET" + fullPath + "/")
                            .expect({ data: pathPrefix.prefix })
                            .then((body) => {
                                expect(createGeoRoutesHandlerStub.callCount)
                                    .to.equal(pathPrefix.geo ? 1 : 0, "geo routes handler should be used");
                                expect(createTripRoutesHandlerStub.callCount)
                                    .to.equal(pathPrefix.trip ? 1 : 0, "trip routes handler should not be used");
                                expect(createStopRoutesHandlerStub.callCount)
                                    .to.equal(pathPrefix.stop ? 1 : 0, "stop routes handler should not be used");
                                expect(createVehicleRoutesHandlerStub.callCount)
                                    .to.equal(pathPrefix.vehicle ? 1 : 0, "stop routes handler should not be used");
                                expect(createStopPointRoutesHandlerStub.callCount)
                                    .to.equal(pathPrefix.stopPoint ? 1 : 0, "stop routes handler should not be used");
                                expect(createSettingsRoutesHandlerStub.callCount)
                                    .to.equal(pathPrefix.settings ? 1 : 0, "stop routes handler should not be used");
                            }));
                    if (!pathPrefix.settings) {
                        it("should HEAD the " + pathPrefix.prefix + " route handler on path '" + fullPath + "'", () =>
                            supertest(app)
                                .head(fullPath)
                                .expect(200)
                                .expect("Content-Type", /json/)
                                .expect("test", "HEAD" + fullPath + "/")
                                .then((body) => {
                                    expect(createGeoRoutesHandlerStub.callCount)
                                        .to.equal(pathPrefix.geo ? 1 : 0, "geo routes handler should be used");
                                    expect(createTripRoutesHandlerStub.callCount)
                                        .to.equal(pathPrefix.trip ? 1 : 0, "trip routes handler should not be used");
                                    expect(createStopRoutesHandlerStub.callCount)
                                        .to.equal(pathPrefix.stop ? 1 : 0, "stop routes handler should not be used");
                                    expect(createVehicleRoutesHandlerStub.callCount)
                                        .to.equal(pathPrefix.vehicle ? 1 : 0, "stop routes handler should not be used");
                                    expect(createStopPointRoutesHandlerStub.callCount)
                                        .to.equal(pathPrefix.stopPoint ? 1 : 0,
                                            "stop routes handler should not be used");
                                    expect(createSettingsRoutesHandlerStub.callCount)
                                        .to.equal(pathPrefix.settings ? 1 : 0,
                                            "stop routes handler should not be used");
                                }));
                    }
                });
            });
        });
    });
});
