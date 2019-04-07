import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import * as prom from "../promise-to-response";
import { StopEndpoints } from "./stop";

interface ITestEndpoint {
    endpointFn: string;
    innerMethod: string;
}

const testEndpoints: ITestEndpoint[] = [
    {
        endpointFn: "createStopInfoEndpoint",
        innerMethod: "getStopInfo",
    },
    {
        endpointFn: "createStopDeparturesEndpoint",
        innerMethod: "getStopPassages",
    },
];
describe("endpoints/stop.ts", () => {
    describe("StopEndpoints", () => {
        const apiClient: TrapezeApiClient = new TrapezeApiClient("https://test.url/");
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
                    test: "many",
                };
                const next: any = {
                    next: true,
                    value: "test",
                };
                let methodStub: sinon.SinonStub;
                before(() => {
                    methodStub = sinon.stub(apiClient, testEndpoint.innerMethod);
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
                    const endpoint: express.RequestHandler = StopEndpoints[testEndpoint.endpointFn](apiClient);
                    endpoint(req, res, next);
                    expect(methodStub.callCount).to.equal(1);
                    expect(methodStub.getCall(0).args).to.deep.equal([
                        req.params.id,
                    ]);
                });
                it("should call inner methods correclty", () => {
                    const endpoint: express.RequestHandler = StopEndpoints[testEndpoint.endpointFn](apiClient);
                    endpoint(req, res, next);
                    expect(promiseStub.callCount).to.equal(1);
                    expect(promiseStub.getCall(0).args).to.deep.equal([
                        methodStubResponse,
                        res,
                        next,
                    ]);
                });
            });
        });
    });
});
