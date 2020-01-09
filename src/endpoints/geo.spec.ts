/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { VehicleStorage } from "@donmahallem/trapeze-api-client-cache";
import { expect } from "chai";
import * as express from "express";
import * as jsonschema from "jsonschema";
import "mocha";
import * as sinon from "sinon";
import * as prom from "../promise-to-response";
import { geoFenceSchema, GeoEndpoints } from "./geo";

describe("endpoints/geo.ts", () => {
    describe("geoFenceSchema", () => {
        const baseObj: {
            top: number | string,
            bottom: number | string,
            left: number | string,
            right: number | string,
        } = {
            bottom: 20,
            left: 50,
            right: 30,
            top: 20,
        };
        const testKey: string[] = [
            "top",
            "right",
            "left",
            "bottom",
        ];
        const testValues: Array<{ value: any, valid: boolean }> = [
            {
                valid: false,
                value: undefined,
            },
            {
                valid: true,
                value: "-20",
            }, {
                valid: true,
                value: 30,
            }, {
                valid: true,
                value: "30",
            }, {
                valid: false,
                value: false,
            },
        ];
        // tslint:disable-next-line:no-shadowed-variable
        testKey.forEach((testKey: string) => {
            testValues.forEach((testValue) => {
                it("should " + (testValue.valid ? "" : "not ") + "pass on key '" +
                    testKey + "' with value '" + testValue.value + "'", () => {
                        const testObj: any = Object.assign({}, baseObj);
                        testObj[testKey] = testValue.value;
                        const result: jsonschema.ValidatorResult = jsonschema.validate(testObj, geoFenceSchema);
                        expect(result.valid).to.equal(testValue.valid);
                    });
            });
        });
    });
    describe("GeoEndpoints", () => {
        const apiClient: TrapezeApiClient = new TrapezeApiClient("https://test.url/");
        const vehicleClient: VehicleStorage = new VehicleStorage(apiClient, 30000);
        let promiseStub: sinon.SinonStub;
        let validateStub: sinon.SinonStub;
        before(() => {
            promiseStub = sinon.stub(prom, "promiseToResponse");
            promiseStub.resolves(true);
            validateStub = sinon.stub(jsonschema, "validate");
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
                methodStub = sinon.stub(apiClient, "getStopLocations");
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
                const endpoint: express.RequestHandler = GeoEndpoints.createStopLocationsEndpoint(apiClient);
                endpoint(req, res, next);
                expect(methodStub.callCount).to.equal(1);
                expect(methodStub.getCall(0).args).to.deep.equal([]);
            });
            it("should call inner methods correclty", () => {
                const endpoint: express.RequestHandler = GeoEndpoints.createStopLocationsEndpoint(apiClient);
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
                const endpoint: express.RequestHandler = GeoEndpoints.createGetVehicleLocationsEndpoint(vehicleClient);
                endpoint(req, res, next);
                expect(methodStub.callCount).to.equal(1);
                expect(methodStub.getCall(0).args).to.deep.equal([
                    req.params.id,
                ]);
            });
            it("should call inner methods correclty", () => {
                const endpoint: express.RequestHandler = GeoEndpoints.createGetVehicleLocationsEndpoint(vehicleClient);
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
                getVehiclesStub.resolves(methodStubResponse);
                getVehicleLocationsStub = sinon.stub(apiClient, "getVehicleLocations");
                getVehicleLocationsStub.returns([methodStubResponse, methodStubResponse]);
            });
            afterEach("reset stubs", () => {
                getVehiclesStub.resetHistory();
                getVehicleLocationsStub.resetHistory();
            });
            after(() => {
                getVehiclesStub.restore();
                getVehicleLocationsStub.restore();
            });
            describe("no relevant query parameter is provided", () => {
                let endpoint: express.RequestHandler;
                // tslint:disable-next-line:no-shadowed-variable
                const methodStubResponse: any = {
                    method: true,
                    response: "test",
                    stub: 29,
                };
                // tslint:disable-next-line:no-shadowed-variable
                const res: any = {
                    test: "many",
                };
                // tslint:disable-next-line:no-shadowed-variable
                const next: any = {
                    next: true,
                    value: "test",
                };
                before(() => {
                    endpoint = GeoEndpoints.createGetVehicleLocationsEndpoint(vehicleClient);
                });
                [{
                    query: {
                        id: 29,
                    },
                }, {
                    params: {
                        id: 29,
                    },
                }].forEach((reqValue) => {
                    describe("should pass for " + JSON.stringify(reqValue.query)
                        + " as query object on request", () => {
                            it("should pass on the provided parameters", () => {
                                endpoint(reqValue, res, next);
                                expect(getVehicleLocationsStub.callCount).to.equal(1);
                                expect(getVehicleLocationsStub.getCall(0).args).to.deep.equal([]);
                                expect(getVehiclesStub.callCount).to.equal(0);
                            });
                            it("should call inner methods correctly", () => {
                                endpoint(reqValue, res, next);
                                expect(promiseStub.callCount).to.equal(1);
                                expect(promiseStub.getCall(0).args).to.deep.equal([
                                    [methodStubResponse, methodStubResponse],
                                    res,
                                    next,
                                ]);
                                expect(getVehiclesStub.callCount).to.equal(0);
                            });
                        });
                });
            });
            describe("atleast one query parameter is provided", () => {
                let endpoint: express.RequestHandler;
                let nextSpy: sinon.SinonSpy;
                before(() => {
                    endpoint = GeoEndpoints.createGetVehicleLocationsEndpoint(vehicleClient);
                    nextSpy = sinon.spy();
                });
                afterEach(() => {
                    nextSpy.resetHistory();
                });
                const testQueryObjects: any[] = [{
                    bottom: 20,
                    top: 29,
                }, {
                    bottom: -20,
                    top: 10,
                }, {
                    left: 20,
                    right: "92",
                }, {
                    left: "9132",
                    right: 10209,
                }];
                describe("validation test succeeds", () => {
                    beforeEach(() => {
                        validateStub.returns({ valid: true });
                    });
                    describe("parameter is smaller than its counter part", () => {
                        [{
                            error: "left must be smaller than right",
                            left: 20,
                            right: "10",
                        }, {
                            bottom: "30",
                            error: "bottom must be smaller than top",
                            top: "20",
                        }, {
                            error: "left must be smaller than right",
                            left: 20,
                            right: "20",
                        }, {
                            bottom: "20",
                            error: "bottom must be smaller than top",
                            top: "20",
                        }]
                            .forEach((testQueryObject) => {
                                it("should not pass with: " + JSON.stringify(testQueryObject), () => {
                                    endpoint({ query: testQueryObject }, res, nextSpy);
                                    expect(getVehiclesStub.callCount)
                                        .to.equal(0, "getVehicle should have been called once");
                                    expect(getVehicleLocationsStub.callCount)
                                        .to.equal(0, "getVehicleLocation should have been called once");
                                    expect(validateStub.callCount).to.equal(1);
                                    expect(validateStub.getCall(0).args).to
                                        .deep.equal([testQueryObject, geoFenceSchema]);
                                    expect(promiseStub.callCount).to.equal(0);
                                    expect(nextSpy.callCount).to.equal(1);
                                    expect(nextSpy.getCall(0).args.length).to.equal(1);
                                    expect(nextSpy.getCall(0).args[0].message)
                                        .to.equal(new Error(testQueryObject.error).message);
                                });
                            });
                    });
                    describe("parameter look valid", () => {
                        const testQueryObject: any = {
                            bottom: 10,
                            left: 20,
                            right: 40,
                            top: 20,
                        };
                        it("should pass with: " + JSON.stringify(testQueryObject), () => {
                            endpoint({ query: testQueryObject }, res, next);
                            expect(getVehiclesStub.callCount)
                                .to.equal(1, "getVehicle should have been called once");
                            expect(getVehicleLocationsStub.callCount)
                                .to.equal(0, "getVehicleLocation should have been called once");
                            expect(getVehiclesStub.getCall(0).args).to.deep
                                .equal([testQueryObject.left,
                                testQueryObject.right,
                                testQueryObject.top,
                                testQueryObject.bottom]);
                            expect(validateStub.callCount).to.equal(1);
                            expect(validateStub.getCall(0).args).to.deep.equal([testQueryObject, geoFenceSchema]);
                            expect(promiseStub.callCount).to.equal(1);
                            expect(promiseStub.getCall(0).args[1]).to.deep.equal(
                                res,
                            );
                            expect(promiseStub.getCall(0).args[2]).to.deep.equal(
                                next,
                            );
                            return promiseStub.getCall(0).args[0]
                                .then((val) => {
                                    expect(val).to.deep.equal(methodStubResponse);
                                });
                        });
                    });
                });
                describe("validation test fails", () => {
                    // tslint:disable-next-line:no-shadowed-variable
                    let nextSpy: sinon.SinonSpy;
                    before(() => {
                        nextSpy = sinon.spy();
                    });
                    beforeEach(() => {
                        validateStub.returns({
                            errors: [new Error("test error")],
                            valid: false,
                        });
                    });
                    afterEach(() => {
                        nextSpy.resetHistory();
                    });
                    testQueryObjects.forEach((testQueryObject) => {
                        it("should not with: " + JSON.stringify(testQueryObject), () => {
                            endpoint({ query: testQueryObject }, res, nextSpy);
                            expect(getVehiclesStub.callCount)
                                .to.equal(0, "getVehicle should have been called once");
                            expect(getVehicleLocationsStub.callCount)
                                .to.equal(0, "getVehicleLocation should have been called once");
                            expect(validateStub.callCount).to.equal(1);
                            expect(validateStub.getCall(0).args)
                                .to.deep.equal([testQueryObject, geoFenceSchema]);
                            expect(promiseStub.callCount).to.equal(0);
                            expect(nextSpy.callCount).to.equal(1);
                            expect(nextSpy.getCall(0).args.length).to.equal(1);
                            expect(nextSpy.getCall(0).args[0].message)
                                .to.equal(new Error("Invalid number or type of query parameters").message);
                        });
                    });
                });
            });
        });
    });
});
