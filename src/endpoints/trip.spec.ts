/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { VehicleStorage } from "@donmahallem/trapeze-api-client-cache";
import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import { ITestEndpoint } from "./common-test.spec";
import { TripEndpoints } from "./trip";

describe("endpoints/trip.ts", () => {
    describe("TripEndpoints", () => {
        describe("createTripRouteEndpoint(client)", () => {
            const methodStubResponse: any = {
                method: true,
                response: "test",
                stub: 29,
            };
            const req: any = {
                params: {
                    id: 95482,
                },
            };
            let stubInstance: sinon.SinonStubbedInstance<TrapezeApiClient>;
            let sandbox: sinon.SinonSandbox;
            let responseObj: any;
            let nextObj: sinon.SinonStub;
            let setHeaderStub: sinon.SinonStub;
            let jsonStub: sinon.SinonStub;
            let testRequestHandler: express.RequestHandler;
            before(() => {
                sandbox = sinon.createSandbox();
                stubInstance = sandbox.createStubInstance(TrapezeApiClient);
                nextObj = sandbox.stub();
                setHeaderStub = sandbox.stub();
                jsonStub = sandbox.stub();
                responseObj = {
                    json: jsonStub,
                    setHeader: setHeaderStub,
                };
            });
            beforeEach(() => {
                testRequestHandler = TripEndpoints.createTripRouteEndpoint(stubInstance as any);
            });
            afterEach("test and reset stubs", () => {
                expect(stubInstance.getRouteByTripId.callCount).to.equal(1);
                sandbox.reset();
            });
            after(() => {
                sandbox.restore();
            });
            it("should pass on the provided parameters", () => {
                stubInstance.getRouteByTripId.resolves(methodStubResponse);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getRouteByTripId.callCount).to.equal(1);
                        expect(stubInstance.getRouteByTripId.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(1);
                        expect(jsonStub.getCall(0).args)
                            .to.deep.equal([methodStubResponse]);
                        expect(setHeaderStub.callCount).to.equal(0);
                    });
            });
            it("should fail correctly inner methods correclty", () => {
                stubInstance.getRouteByTripId.rejects(methodStubResponse);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getRouteByTripId.callCount).to.equal(1);
                        expect(stubInstance.getRouteByTripId.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(0);
                        expect(setHeaderStub.callCount).to.equal(0);
                        expect(nextObj.calledOnceWithExactly(methodStubResponse)).to.equal(true);
                    });
            });
        });
        describe("createTripPassagesEndpoint(client,vehicleStorage)", () => {
            const methodStubResponse: any = {
                method: true,
                response: "test",
                stub: 29,
            };
            const methodStubResponse2: any = {
                method: false,
                response: "test",
                stub: -24,
            };
            const req: any = {
                params: {
                    id: 95482,
                },
            };
            let stubInstance: sinon.SinonStubbedInstance<TrapezeApiClient>;
            let stubStorage: sinon.SinonStubbedInstance<VehicleStorage>;
            let sandbox: sinon.SinonSandbox;
            let responseObj: any;
            let nextObj: sinon.SinonStub;
            let setHeaderStub: sinon.SinonStub;
            let jsonStub: sinon.SinonStub;
            let testRequestHandler: express.RequestHandler;
            before(() => {
                sandbox = sinon.createSandbox();
                stubInstance = sandbox.createStubInstance(TrapezeApiClient);
                stubStorage = sandbox.createStubInstance(VehicleStorage);
                nextObj = sandbox.stub();
                setHeaderStub = sandbox.stub();
                jsonStub = sandbox.stub();
                responseObj = {
                    json: jsonStub,
                    setHeader: setHeaderStub,
                };
            });
            beforeEach(() => {
                testRequestHandler = TripEndpoints
                    .createTripPassagesEndpoint(stubInstance as any, stubStorage as any);
            });
            afterEach("test and reset stubs", () => {
                expect(stubInstance.getTripPassages.callCount).to.equal(1);
                expect(stubStorage.getVehicleByTripId.callCount).to.equal(1);
                sandbox.reset();
            });
            after(() => {
                sandbox.restore();
            });
            describe("errors are raised and passed to next", () => {
                it("should pass on the error from getTripPassages", () => {
                    stubInstance.getTripPassages.rejects(methodStubResponse);
                    stubStorage.getVehicleByTripId.resolves(methodStubResponse2);
                    return testRequestHandler(req, responseObj, nextObj)
                        .then(() => {
                            expect(stubInstance.getTripPassages.callCount).to.equal(1);
                            expect(stubInstance.getTripPassages.getCall(0).args).to.deep.equal([
                                req.params.id,
                                "departure",
                            ]);
                            expect(stubStorage.getVehicleByTripId.callCount).to.equal(1);
                            expect(stubStorage.getVehicleByTripId.getCall(0).args).to.deep.equal([
                                req.params.id,
                            ]);
                            expect(jsonStub.callCount).to.equal(0);
                            expect(setHeaderStub.callCount).to.equal(0);
                            expect(nextObj.calledOnceWithExactly(methodStubResponse)).to.equal(true);
                        });
                });
                it("should pass on the error from getVehicleByTripId", () => {
                    stubInstance.getTripPassages.resolves(methodStubResponse);
                    stubStorage.getVehicleByTripId.rejects(methodStubResponse2);
                    return testRequestHandler(req, responseObj, nextObj)
                        .then(() => {
                            expect(stubInstance.getTripPassages.callCount).to.equal(1);
                            expect(stubInstance.getTripPassages.getCall(0).args).to.deep.equal([
                                req.params.id,
                                "departure",
                            ]);
                            expect(stubStorage.getVehicleByTripId.callCount).to.equal(1);
                            expect(stubStorage.getVehicleByTripId.getCall(0).args).to.deep.equal([
                                req.params.id,
                            ]);
                            expect(jsonStub.callCount).to.equal(0);
                            expect(setHeaderStub.callCount).to.equal(0);
                            expect(nextObj.calledOnceWithExactly(methodStubResponse2)).to.equal(true);
                        });
                });
            });
            it("should pass on the provided parameters", () => {
                stubInstance.getTripPassages.resolves(methodStubResponse);
                stubStorage.getVehicleByTripId.resolves(methodStubResponse2);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getTripPassages.callCount).to.equal(1);
                        expect(stubInstance.getTripPassages.getCall(0).args).to.deep.equal([
                            req.params.id,
                            "departure",
                        ]);
                        expect(stubStorage.getVehicleByTripId.callCount).to.equal(1);
                        expect(stubStorage.getVehicleByTripId.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(1);
                        expect(jsonStub.getCall(0).args)
                            .to.deep.equal([{
                                location: {
                                    method: false,
                                    response: "test",
                                    stub: -24,
                                },
                                method: true,
                                response: "test",
                                stub: 29,
                                tripId: 95482,
                            }]);
                        expect(setHeaderStub.callCount).to.equal(0);
                    });
            });
            it("should pass on the provided parameters and mode query parameter", () => {
                stubInstance.getTripPassages.resolves(methodStubResponse);
                stubStorage.getVehicleByTripId.resolves(methodStubResponse2);
                return testRequestHandler(Object.assign({
                    query: {
                        mode: "arrival",
                    },
                }, req), responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getTripPassages.callCount).to.equal(1);
                        expect(stubInstance.getTripPassages.getCall(0).args).to.deep.equal([
                            req.params.id,
                            "arrival",
                        ]);
                        expect(stubStorage.getVehicleByTripId.callCount).to.equal(1);
                        expect(stubStorage.getVehicleByTripId.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(1);
                        expect(jsonStub.getCall(0).args)
                            .to.deep.equal([{
                                location: {
                                    method: false,
                                    response: "test",
                                    stub: -24,
                                },
                                method: true,
                                response: "test",
                                stub: 29,
                                tripId: 95482,
                            }]);
                        expect(setHeaderStub.callCount).to.equal(0);
                    });
            });
            it("should pass on the provided parameters and mode query parameter", () => {
                stubInstance.getTripPassages.resolves(methodStubResponse);
                stubStorage.getVehicleByTripId.resolves(methodStubResponse2);
                return testRequestHandler(Object.assign({
                    query: {
                        other: "arrival",
                    },
                }, req), responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getTripPassages.callCount).to.equal(1);
                        expect(stubInstance.getTripPassages.getCall(0).args).to.deep.equal([
                            req.params.id,
                            "departure",
                        ]);
                        expect(stubStorage.getVehicleByTripId.callCount).to.equal(1);
                        expect(stubStorage.getVehicleByTripId.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(1);
                        expect(jsonStub.getCall(0).args)
                            .to.deep.equal([{
                                location: {
                                    method: false,
                                    response: "test",
                                    stub: -24,
                                },
                                method: true,
                                response: "test",
                                stub: 29,
                                tripId: 95482,
                            }]);
                        expect(setHeaderStub.callCount).to.equal(0);
                    });
            });
        });
    });
});
