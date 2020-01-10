/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { TrapezeApiClient } from "@donmahallem/trapeze-api-client";
import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import { ITestEndpoint } from "./common-test.spec";
import { StopEndpoints } from "./stop";

describe("endpoints/stop.ts", () => {
    describe("StopEndpoints", () => {
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
        afterEach("test and reset stubs", () => {
            sandbox.reset();
        });
        after(() => {
            sandbox.restore();
        });
        describe("createStopInfoEndpoint(client)", () => {
            beforeEach(() => {
                testRequestHandler = StopEndpoints.createStopInfoEndpoint(stubInstance as any);
            });
            afterEach("test and reset stubs", () => {
                expect(stubInstance.getStopInfo.callCount).to.equal(1);
            });
            it("should pass on the provided parameters", () => {
                stubInstance.getStopInfo.resolves(methodStubResponse);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getStopInfo.callCount).to.equal(1);
                        expect(stubInstance.getStopInfo.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(1);
                        expect(jsonStub.getCall(0).args)
                            .to.deep.equal([methodStubResponse]);
                        expect(setHeaderStub.callCount).to.equal(1);
                        expect(setHeaderStub.getCall(0).args).to.deep
                            .equal(["Cache-Control", "public, max-age=60"]);
                    });
            });
            it("should fail correctly inner methods correclty", () => {
                stubInstance.getStopInfo.rejects(methodStubResponse);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getStopInfo.callCount).to.equal(1);
                        expect(stubInstance.getStopInfo.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(0);
                        expect(setHeaderStub.callCount).to.equal(0);
                        expect(nextObj.calledOnceWithExactly(methodStubResponse)).to.equal(true);
                    });
            });
        });
        describe("createStopDeparturesEndpoint(client)", () => {
            beforeEach(() => {
                testRequestHandler = StopEndpoints.createStopDeparturesEndpoint(stubInstance as any);
            });
            afterEach("test and reset stubs", () => {
                expect(stubInstance.getStopPassages.callCount).to.equal(1);
            });
            it("should pass on the provided parameters", () => {
                stubInstance.getStopPassages.resolves(methodStubResponse);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getStopPassages.callCount).to.equal(1);
                        expect(stubInstance.getStopPassages.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(1);
                        expect(jsonStub.getCall(0).args)
                            .to.deep.equal([methodStubResponse]);
                        expect(setHeaderStub.callCount).to.equal(1);
                        expect(setHeaderStub.getCall(0).args).to.deep
                            .equal(["Cache-Control", "public, max-age=10"]);
                    });
            });
            it("should fail correctly inner methods correclty", () => {
                stubInstance.getStopPassages.rejects(methodStubResponse);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getStopPassages.callCount).to.equal(1);
                        expect(stubInstance.getStopPassages.getCall(0).args).to.deep.equal([
                            req.params.id,
                        ]);
                        expect(jsonStub.callCount).to.equal(0);
                        expect(setHeaderStub.callCount).to.equal(0);
                        expect(nextObj.calledOnceWithExactly(methodStubResponse)).to.equal(true);
                    });
            });
        });
    });
});
