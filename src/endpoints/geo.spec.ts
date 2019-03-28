import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import * as prom from "../promise-to-response";
import { GeoEndpoints, geoFenceSchema } from "./geo";
import * as jsonschema from 'jsonschema';

interface ITestEndpoint {
    endpointFn: string;
    innerMethod: string;
}

describe("endpoints/geo.ts", () => {
    describe("GeoEndpoints", () => {
        const apiClient: TrapezeApiClient = new TrapezeApiClient("https://test.url/");
        const vehicleClient: VehicleStorage = new VehicleStorage(apiClient, 30000);
        let promiseStub: sinon.SinonStub;
        let validateStub: sinon.SinonStub;
        before(() => {
            promiseStub = sinon.stub(prom, "promiseToResponse");
            promiseStub.resolves(true);
            validateStub = sinon.stub(jsonschema, 'validate');
        });

        afterEach("test and reset promise stub", () => {
            promiseStub.resetHistory();
            validateStub.resetHistory();
        });

        after(() => {
            promiseStub.restore();
            validateStub.restore();
        });
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
        const res: any = {
            test: "many",
        };
        const next: any = {
            next: true,
            value: "test",
        };
        describe("createStationLocationsEndpoint(client)", () => {
            let methodStub: sinon.SinonStub;
            before(() => {
                methodStub = sinon.stub(apiClient, "getStations");
                methodStub.returns(methodStubResponse);
            });
            afterEach("test and reset stubs", () => {
                expect(methodStub.callCount).to.equal(1);
                methodStub.resetHistory();
            });
            after(() => {
                methodStub.restore();
            });
            it("should pass on the provided parameters", () => {
                const endpoint: express.RequestHandler = GeoEndpoints.createStationLocationsEndpoint(apiClient);
                endpoint(req, res, next);
                expect(methodStub.callCount).to.equal(1);
                expect(methodStub.getCall(0).args).to.deep.equal([]);
            });
            it("should call inner methods correclty", () => {
                const endpoint: express.RequestHandler = GeoEndpoints.createStationLocationsEndpoint(apiClient);
                endpoint(req, res, next);
                expect(promiseStub.callCount).to.equal(1);
                expect(promiseStub.getCall(0).args).to.deep.equal([
                    methodStubResponse,
                    res,
                    next,
                ]);
            });
        });
        describe("createVehicleLocationEndpoint(vehicleStorage)", () => {
            let methodStub: sinon.SinonStub;
            before(() => {
                methodStub = sinon.stub(vehicleClient, "getVehicle");
                methodStub.returns(methodStubResponse);
            });
            afterEach("test and reset stubs", () => {
                expect(methodStub.callCount).to.equal(1);
                methodStub.resetHistory();
            });
            after(() => {
                methodStub.restore();
            });
            it("should pass on the provided parameters", () => {
                const endpoint: express.RequestHandler = GeoEndpoints.createVehicleLocationEndpoint(vehicleClient);
                endpoint(req, res, next);
                expect(methodStub.callCount).to.equal(1);
                expect(methodStub.getCall(0).args).to.deep.equal([
                    req.params.id,
                ]);
            });
            it("should call inner methods correclty", () => {
                const endpoint: express.RequestHandler = GeoEndpoints.createVehicleLocationEndpoint(vehicleClient);
                endpoint(req, res, next);
                expect(promiseStub.callCount).to.equal(1);
                expect(promiseStub.getCall(0).args).to.deep.equal([
                    methodStubResponse,
                    res,
                    next,
                ]);
            });
        });
        describe("createVehicleLocationsEndpoint(client, vehicleStorage)", () => {
            let getVehiclesStub: sinon.SinonStub;
            let getVehicleLocationsStub: sinon.SinonStub;
            before(() => {
                getVehiclesStub = sinon.stub(vehicleClient, "getVehicles");
                getVehiclesStub.returns(methodStubResponse);
                getVehicleLocationsStub = sinon.stub(apiClient, "getVehicleLocations");
                getVehicleLocationsStub.returns([methodStubResponse, methodStubResponse]);
            });
            afterEach("test and reset stubs", () => {
                getVehiclesStub.resetHistory();
                getVehicleLocationsStub.resetHistory();
            });
            after(() => {
                getVehiclesStub.restore();
                getVehicleLocationsStub.restore();
            });
            describe('atleast one query parameter is provided', () => {
                const testQueryObjects: any[] = [{
                    top: 29,
                    bottom: 20
                }, {
                    top: 10,
                    bottom: -20
                }, {
                    left: 20,
                    right: "92"
                }, {
                    right: 10209,
                    left: "9132"
                }];
                describe('validation test succeeds', () => {
                    let endpoint: express.RequestHandler;
                    before(() => {
                        endpoint = GeoEndpoints.createVehicleLocationsEndpoint(apiClient, vehicleClient);
                    });
                    beforeEach(() => {
                        validateStub.returns({ valid: true });
                    });
                    afterEach(() => {
                    });
                    testQueryObjects.forEach((testQueryObject) => {
                        it("should pass with: " + JSON.stringify(testQueryObject), () => {
                            endpoint({ query: testQueryObject }, res, next);
                            expect(getVehiclesStub.callCount).to.equal(1, "getVehicle should have been called once");
                            expect(getVehicleLocationsStub.callCount).to.equal(0, "getVehicleLocation should have been called once");
                            expect(getVehiclesStub.getCall(0).args).to.deep
                                .equal([testQueryObject.left,
                                testQueryObject.right,
                                testQueryObject.top,
                                testQueryObject.bottom]);
                            expect(validateStub.callCount).to.equal(1);
                            expect(validateStub.getCall(0).args).to.deep.equal([testQueryObject, geoFenceSchema]);
                            expect(promiseStub.callCount).to.equal(1);
                            expect(promiseStub.getCall(0).args).to.deep.equal([
                                methodStubResponse,
                                res,
                                next,
                            ]);
                        });
                    });
                });
                describe('validation test fails', () => {
                    let endpoint: express.RequestHandler;
                    let nextSpy: sinon.SinonSpy;
                    before(() => {
                        endpoint = GeoEndpoints.createVehicleLocationsEndpoint(apiClient, vehicleClient);
                        nextSpy = sinon.spy();
                    });
                    beforeEach(() => {
                        validateStub.returns({
                            valid: false,
                            errors: [new Error("test error")]
                        });
                    });
                    afterEach(() => {
                        nextSpy.resetHistory();
                    });
                    testQueryObjects.forEach((testQueryObject) => {
                        it("should not with: " + JSON.stringify(testQueryObject), () => {
                            endpoint({ query: testQueryObject }, res, nextSpy);
                            expect(getVehiclesStub.callCount).to.equal(0, "getVehicle should have been called once");
                            expect(getVehicleLocationsStub.callCount).to.equal(0, "getVehicleLocation should have been called once");
                            expect(validateStub.callCount).to.equal(1);
                            expect(validateStub.getCall(0).args).to.deep.equal([testQueryObject, geoFenceSchema]);
                            expect(promiseStub.callCount).to.equal(0);
                            expect(nextSpy.callCount).to.equal(1);
                            expect(nextSpy.getCall(0).args.length).to.equal(1);
                            expect(nextSpy.getCall(0).args[0].message).to.equal(new Error('Invalid number or type of query parameters').message);
                        });
                    });
                });
            });
        });
    });
});
