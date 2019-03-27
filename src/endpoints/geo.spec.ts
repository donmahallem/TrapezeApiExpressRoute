import { TrapezeApiClient, VehicleStorage } from "@donmahallem/trapeze-api-client";
import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import * as prom from "../promise-to-response";
import { GeoEndpoints } from "./geo";

interface ITestEndpoint {
    endpointFn: string;
    innerMethod: string;
}

describe("endpoints/geo.ts", () => {
    describe("GeoEndpoints", () => {
        const apiClient: TrapezeApiClient = new TrapezeApiClient("https://test.url/");
        const vehicleClient: VehicleStorage = new VehicleStorage(apiClient, 30000);
        let promiseStub: sinon.SinonStub;
        before(() => {
            promiseStub = sinon.stub(prom, "promiseToResponse");
            promiseStub.resolves(true);
        });

        afterEach("test and reset promise stub", () => {
            expect(promiseStub.callCount).to.equal(1);
            promiseStub.resetHistory();
        });

        after(() => {
            promiseStub.restore();
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
        describe("createVehicleLocationsEndpoint(vehicleStorage)", () => {
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
            const testQueryParams: {
                top?: any;
                bottom?: any;
                left?: any;
                right?: any;
                queriesAll: boolean;
            }[] = [
                    {
                        top: 29,
                        left: 203,
                        right: 2,
                        bottom: 29,
                        queriesAll: false
                    },
                    {
                        top: '29',
                        left: 203,
                        right: 2,
                        bottom: 29,
                        queriesAll: false
                    },
                    {
                        top: 29,
                        left: 203,
                        right: 2,
                        bottom: '29',
                        queriesAll: false
                    },
                    {
                        top: '29',
                        right: 2,
                        bottom: 29,
                        queriesAll: true
                    }
                ];
            testQueryParams.forEach((testQueryParam) => {
                if (testQueryParam.queriesAll === true) {
                    describe('should query all vehicles', () => {
                        it('yes');
                    });
                } else {
                    describe('should query specific area - ' + JSON.stringify(testQueryParam), () => {
                        const testQueryObject: any = {
                            top: testQueryParam.top,
                            left: testQueryParam.left,
                            right: testQueryParam.right,
                            bottom: testQueryParam.bottom,
                        }
                        afterEach(() => {
                            expect(getVehiclesStub.callCount).to.equal(1, "getVehicle should have been called once");
                            expect(getVehicleLocationsStub.callCount).to.equal(0, "getVehicleLocation should have been called once");
                        });
                        it("should pass on the provided parameters", () => {
                            const endpoint: express.RequestHandler = GeoEndpoints.createVehicleLocationsEndpoint(apiClient, vehicleClient);
                            endpoint({ query: testQueryObject }, res, next);
                            expect(getVehiclesStub.getCall(0).args).to.deep.equal([
                                testQueryObject.left,
                                testQueryObject.right,
                                testQueryObject.top,
                                testQueryObject.bottom
                            ]);
                        });
                        it("should call inner methods correclty", () => {
                            const endpoint: express.RequestHandler = GeoEndpoints.createVehicleLocationsEndpoint(apiClient, vehicleClient);
                            endpoint({ query: testQueryObject }, res, next);
                            expect(promiseStub.getCall(0).args).to.deep.equal([
                                methodStubResponse,
                                res,
                                next,
                            ]);
                        });
                    });
                }
            });
        });
    });
});
