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

interface ITestElement {
    fn: string;
    obj: any;
    path: string;
    noId?: boolean;
}
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
                stub.callsFake(() => {
                    return (req, res, next) => {
                        next(testError);
                    };
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
        const testElements: ITestElement[] = [
            {
                fn: "createVehicleInfoEndpoint",
                obj: VehicleEndpoints,
                path: "/vehicle/:id/route",
            },
            {
                fn: "createTripPassagesEndpoint",
                obj: TripEndpoints,
                path: "/trip/:id/passages",
            },
            {
                fn: "createTripRouteEndpoint",
                obj: TripEndpoints,
                path: "/trip/:id/route",
            },
            {
                fn: "createStopDeparturesEndpoint",
                obj: StopEndpoints,
                path: "/stop/:id/departures",
            },
            {
                fn: "createStopInfoEndpoint",
                obj: StopEndpoints,
                path: "/stop/:id/info",
            },
            {
                fn: "createStopPointInfoEndpoint",
                obj: StopPointEndpoints,
                path: "/stopPoint/:id/info",
            },
            {
                fn: "createVehicleLocationEndpoint",
                obj: GeoEndpoints,
                path: "/geo/vehicle/:id",
            },
            {
                fn: "createSettingsEndpoint",
                obj: SettingsEndpoints,
                path: "/settings",
                noId: true
            },
        ];
        testElements.forEach((testElement: ITestElement) => {
            describe(testElement.path, () => {
                let stub: sinon.SinonStub;
                before(() => {
                    stub = sinon.stub(testElement.obj, testElement.fn);
                    stub.callsFake(() => {
                        return (req, res, next) => {
                            res.json(SUCCESS_RESPONSE);
                        };
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
                        supertest(app)
                            .get(testElement.path.replace(":id", testId))
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
                if (testElement.noId !== true) {
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
