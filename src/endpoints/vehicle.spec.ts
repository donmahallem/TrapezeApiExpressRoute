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

describe("endpoints/vehicle.ts", () => {
    describe("VehicleEndpoints", () => {
        describe("createVehicleInfoEndpoint(client)", () => {
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
                testRequestHandler = VehicleEndpoints.createVehicleInfoEndpoint(stubInstance as any);
            });
            afterEach("test and reset stubs", () => {
                expect(stubInstance.getRouteByVehicleId.callCount).to.equal(1);
                sandbox.reset();
            });
            after(() => {
                sandbox.restore();
            });
            it("should pass on the provided parameters", () => {
                stubInstance.getRouteByVehicleId.resolves(methodStubResponse);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getRouteByVehicleId.callCount).to.equal(1);
                        expect(stubInstance.getRouteByVehicleId.getCall(0).args).to.deep.equal([
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
                stubInstance.getRouteByVehicleId.rejects(methodStubResponse);
                return testRequestHandler(req, responseObj, nextObj)
                    .then(() => {
                        expect(stubInstance.getRouteByVehicleId.callCount).to.equal(1);
                        expect(stubInstance.getRouteByVehicleId.getCall(0).args).to.deep.equal([
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
