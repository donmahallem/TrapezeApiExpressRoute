/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import { ITestEndpoint } from "./common-test.spec";
import { SettingsEndpoints } from "./settings";

const testEndpoints: Array<ITestEndpoint<SettingsEndpoints, TrapezeApiClient>> = [
    {
        endpointFn: "createSettingsEndpoint",
        innerMethod: "getSettings",
    },
];
describe("endpoints/settings.ts", () => {
    describe("SettingsEndpoints", () => {
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
                    json: () => { },
                };
                const next: any = {
                    next: true,
                    value: "test",
                };
                let methodStub: sinon.SinonStub;
                let jsonStub: sinon.SinonStub;
                before(() => {
                    methodStub = sinon.stub(apiClient, testEndpoint.innerMethod);
                    jsonStub = sinon.stub();
                    res.json = jsonStub;
                    methodStub.returns(methodStubResponse);
                });
                afterEach("test and reset stubs", () => {
                    expect(methodStub.callCount).to.equal(1);
                    jsonStub.resetHistory();
                    methodStub.resetHistory();
                });
                after(() => {
                    methodStub.restore();
                });
                it("should pass on the provided parameters", () => {
                    const endpoint: express.RequestHandler = SettingsEndpoints[testEndpoint.endpointFn](apiClient);
                    endpoint(req, res, next);
                    expect(methodStub.callCount).to.equal(1);
                    expect(methodStub.getCall(0).args).to.deep.equal([]);
                });
                it("should call inner methods correclty", () => {
                    const endpoint: express.RequestHandler = SettingsEndpoints[testEndpoint.endpointFn](apiClient);
                    endpoint(req, res, next)
                        .then(() => {
                            expect(jsonStub.callCount).to.equal(1);
                            expect(jsonStub.getCall(0).args).to.deep.equal([
                                methodStubResponse,
                                res,
                                next,
                            ]);
                        });
                });
            });
        });
    });
});
