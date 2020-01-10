/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import { ITestEndpoint } from "./common-test.spec";
import { VehicleEndpoints } from "./vehicle";

const testEndpoints: Array<ITestEndpoint<VehicleEndpoints, TrapezeApiClient>> = [
    {
        endpointFn: "createVehicleInfoEndpoint",
        innerMethod: "getRouteByVehicleId",
    },
];
describe("endpoints/vehicle.ts", () => {
    describe("VehicleEndpoints", () => {
        const apiClient: TrapezeApiClient = new TrapezeApiClient("https://test.url/");
        testEndpoints.forEach((testEndpoint: any) => {
            describe(testEndpoint.endpointFn + "(client)", () => {
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
                    json: sinon.stub(),
                    setHeader: sinon.stub(),
                };
                const next: any = {
                    next: true,
                    value: "test",
                };
                let methodStub: sinon.SinonStub;
                before(() => {
                    methodStub = sinon.stub(apiClient, testEndpoint.innerMethod);
                    methodStub.resolves(methodStubResponse);
                });
                afterEach("test and reset stubs", () => {
                    expect(methodStub.callCount).to.equal(1);
                    methodStub.resetHistory();
                });
                after(() => {
                    methodStub.restore();
                });
                it("should pass on the provided parameters", () => {
                    const endpoint: express.RequestHandler = VehicleEndpoints[testEndpoint.endpointFn](apiClient);
                    return endpoint(req, res, next)
                        .then(() => {
                            expect(methodStub.callCount).to.equal(1);
                            expect(methodStub.getCall(0).args).to.deep.equal([
                                req.params.id,
                            ]);
                            expect(res.json.callCount).to.equal(1);
                            expect(res.setHeader.callCount).to.equal(1);
                        });
                });
                it("should call inner methods correclty", () => {
                    const endpoint: express.RequestHandler = VehicleEndpoints[testEndpoint.endpointFn](apiClient);
                    return endpoint(req, res, next)
                        .then(() => {
                            expect(methodStub.callCount).to.equal(1);
                            expect(methodStub.getCall(0).args).to.deep.equal([
                                req.params.id,
                            ]);
                        });
                });
            });
        });
    });
});
