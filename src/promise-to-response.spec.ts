import { expect } from "chai";
import * as express from "express";
import "mocha";
import * as sinon from "sinon";
import { promiseToResponse } from "./promise-to-response";
import * as reqp from 'request-promise-native';
import { ServerResponse, IncomingMessage } from 'http';
import * as request from 'request';
interface ITestObject {
    prom: Promise<any>,
    nextSpyCallCount: number;
    statusSpyCallCount: number;
};
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
        describe('promise rejects', () => {

        });
        describe('promise resolves', () => {
            [true, false].forEach((nextProvided) => {
                describe("next parameter " + (nextProvided ? '' : 'not') + " provided", () => {
                    it("should forward the resolved value to the response", (done) => {
                        if (nextProvided)
                            promiseToResponse(Promise.resolve(testResponse), resObj, nextSpy);
                        else
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
                });
            });
        });
        describe('promise rejects', () => {
            const testErrors: any[] = [
                {
                    error: {
                        statusCode: 400,
                        message: 'another message'
                    },
                    response: {
                        statusCode: 400
                    }
                },
                {
                    error: new Error('test erorr'),
                    response: {
                        statusCode: 500
                    }
                },
            ]
            describe("next parameter provided", () => {
                testErrors.forEach((testError) => {
                    it("should forward the error to the next function", (done) => {
                        promiseToResponse(Promise.reject(testError.error), resObj, nextSpy);
                        setTimeout(() => {
                            expect(nextSpy.callCount).to.equal(1);
                            expect(statusStub.callCount).to.equal(0);
                            expect(jsonSpy.callCount).to.equal(0);
                            expect(nextSpy.getCall(0).args).to.deep.equal([testError.error]);
                            done();
                        }, 100);
                    });
                });
            });
            describe("next parameter not provided", () => {
                testErrors.forEach((testError) => {
                    it("should forward the error to the next function", (done) => {
                        promiseToResponse(Promise.reject(testError.error), resObj);
                        setTimeout(() => {
                            expect(nextSpy.callCount).to.equal(0);
                            expect(statusStub.callCount).to.equal(1);
                            expect(jsonSpy.callCount).to.equal(1);
                            expect(statusStub.getCall(0).args).to.deep.equal([testError.response.statusCode]);
                            expect(jsonSpy.getCall(0).args).to.deep.equal([{
                                error: true,
                                statusCode: testError.response.statusCode,
                            }]);
                            done();
                        }, 100);
                    });
                });
            });
        });
    });
});