/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

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
const createDummyRouter: (requestHandler: express.RequestHandler) => express.Router = (requestHandler: express.RequestHandler) => {
    const router: express.Router = express.Router();
    router.use("*", requestHandler);
    return router;
};
const createDummySuccessResponse: (id: string) => express.RequestHandler = (id: string): express.RequestHandler =>
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        setTimeout(() => {
            res.json({ data: id });
        }, 50);
    };
describe("api-routes.ts", () => {
    describe("test helpers", () => {
        describe("createDummySuccessResponse", () => {
            const testId: string = "any test id";
            it("should call json response", (done) => {
                const jsonStub: sinon.SinonStub = sinon.stub();
                jsonStub.callsFake((...args) => {
                    expect(args).to.deep.equal([{ data: testId }]);
                    done();
                });
                const reqHandler: express.RequestHandler = createDummySuccessResponse(testId);
                reqHandler(undefined, { json: jsonStub } as any, undefined);
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
        let createGeoRoutesHandlerStub: sinon.SinonStub;
        let createTripRoutesHandlerStub: sinon.SinonStub;
        let createStopRoutesHandlerStub: sinon.SinonStub;
        before(() => {
            sandbox = sinon.createSandbox();
            routeErrorStub = sandbox.stub();
            createGeoRoutesStub = sandbox.stub(testObj, "createGeoRoutes");
            createTripRoutesStub = sandbox.stub(testObj, "createTripRoutes");
            createStopRoutesStub = sandbox.stub(testObj, "createStopRoutes");
            createGeoRoutesHandlerStub = sandbox.stub();
            createTripRoutesHandlerStub = sandbox.stub();
            createStopRoutesHandlerStub = sandbox.stub();
        });
        beforeEach(() => {
            createGeoRoutesHandlerStub.callsFake(createDummySuccessResponse("geo"));
            createTripRoutesHandlerStub.callsFake(createDummySuccessResponse("trip"));
            createStopRoutesHandlerStub.callsFake(createDummySuccessResponse("stop"));
            createGeoRoutesStub.returns(createDummyRouter(createGeoRoutesHandlerStub));
            createTripRoutesStub.returns(createDummyRouter(createTripRoutesHandlerStub));
            createStopRoutesStub.returns(createDummyRouter(createStopRoutesHandlerStub));
            routeErrorStub.callsFake((err, req, res, next) => {
                console.log("KK", err);
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
            expect(createGeoRoutesStub.callCount, "geo route should be created once").to.equal(1);
            expect(createTripRoutesStub.callCount, "trip route should be created once").to.equal(1);
            expect(createStopRoutesStub.callCount, "stop route should be created once").to.equal(1);
            sandbox.reset();
        });
        afterEach(() => {
            sandbox.restore();
        });
        describe("/geo", () => {
            it("should only call the geo route handler", () =>
                supertest(app)
                    .get("/geo")
                    .expect(200)
                    .expect("Content-Type", /json/)
                    .expect({ data: "geo" })
                    .expect("Content-Length", NOT_FOUND_RESPONSE_LENGTH)
                    .then((body) => {
                        console.log("yet");
                        expect(createGeoRoutesStub.callCount).to.equal(1);
                        expect(createTripRoutesStub.callCount).to.equal(0);
                        expect(createStopRoutesStub.callCount).to.equal(0);
                    }));
        });
        describe("/stop", () => {
            it("should only call the stop route handler", () =>
                supertest(app)
                    .get("/stop")
                    .expect(200)
                    .expect("Content-Type", /json/)
                    .expect({ data: "geo" })
                    .expect("Content-Length", NOT_FOUND_RESPONSE_LENGTH)
                    .then((body) => {
                        console.log("yet");
                        expect(createGeoRoutesStub.callCount).to.equal(0);
                        expect(createTripRoutesStub.callCount).to.equal(0);
                        expect(createStopRoutesStub.callCount).to.equal(1);
                    }));
        });
    });
});
