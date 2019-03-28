import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import { promiseToResponse } from "./promise-to-response";

describe("promise-to-response.ts", () => {
    describe("promiseToResponse(prom,res)", () => {
        let jsonSpy: sinon.SinonSpy;
        let nextSpy: sinon.SinonSpy;
        let statusStub: sinon.SinonStub;
        let resObj: any;
        const testResponse: any = {
            success: true,
            test: "response",
        };
        before(() => {
            jsonSpy = sinon.spy();
            nextSpy = sinon.spy();
            statusStub = sinon.stub();
            resObj = {
                json: jsonSpy,
                status: statusStub,
            };
            statusStub.returns(resObj);
        });
        afterEach(() => {
            jsonSpy.resetHistory();
            nextSpy.resetHistory();
            statusStub.resetHistory();
        });
        describe("next parameter provided", () => {
            it("should forward the resolved value to the response", (done) => {
                promiseToResponse(Promise.resolve(testResponse), resObj, nextSpy);
                setTimeout(() => {
                    expect(nextSpy.callCount).to.equal(0);
                    expect(statusStub.callCount).to.equal(1);
                    expect(jsonSpy.callCount).to.equal(1);
                    expect(statusStub.getCall(0).args).to.deep.equal([200]);
                    expect(jsonSpy.getCall(0).args).to.deep.equal([testResponse]);
                    done();
                }, 100);
            });
            it("should forward the error to the next function", (done) => {
                promiseToResponse(Promise.reject(testResponse), resObj, nextSpy);
                setTimeout(() => {
                    expect(nextSpy.callCount).to.equal(1);
                    expect(statusStub.callCount).to.equal(0);
                    expect(jsonSpy.callCount).to.equal(0);
                    expect(nextSpy.getCall(0).args).to.deep.equal([testResponse]);
                    done();
                }, 100);
            });
        });
        describe("next parameter not provided", () => {
            it("should forward the resolved value to the response", (done) => {
                promiseToResponse(Promise.resolve(testResponse), resObj);
                setTimeout(() => {
                    expect(nextSpy.callCount).to.equal(0);
                    expect(statusStub.callCount).to.equal(1);
                    expect(jsonSpy.callCount).to.equal(1);
                    expect(statusStub.getCall(0).args).to.deep.equal([200]);
                    expect(jsonSpy.getCall(0).args).to.deep.equal([testResponse]);
                    done();
                }, 100);
            });
            it("should send an error directly back", (done) => {
                promiseToResponse(Promise.reject(testResponse), resObj);
                setTimeout(() => {
                    expect(nextSpy.callCount).to.equal(0);
                    expect(statusStub.callCount).to.equal(1);
                    expect(jsonSpy.callCount).to.equal(1);
                    expect(statusStub.getCall(0).args).to.deep.equal([500]);
                    expect(jsonSpy.getCall(0).args).to.deep.equal([{
                        error: true,
                    }]);
                    done();
                }, 100);
            });
        });
    });
});
