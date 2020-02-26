/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { expect } from 'chai';
import * as express from 'express';
import 'mocha';
import { Root } from 'protobufjs';
import * as supertest from 'supertest';
import { promiseToResponse } from './promise-to-response';
const testProtoDefinition: any = {
    'nested': {
        'TestMessage': {
            'fields': {
                'testField': {
                    'id': 1,
                    'type': 'string',
                },
            },
        },
    },
};
interface IResponse {
    testField: string;
}
const testRoot: Root = Root.fromJSON(testProtoDefinition);
const testMessage: any = testRoot.lookupType('TestMessage');
describe('promise-to-response.ts', (): void => {
    describe('promiseToResponse(prom,res)', (): void => {
        const testRep: IResponse = { testField: 'any test' };
        let testApp: express.Application;
        before((): void => {
            testApp = express().use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
                try {
                    promiseToResponse(Promise.resolve(testRep), testMessage, res, next);
                } catch (err) {
                    console.error(err);

                }
            });
        });
        afterEach((): void => {
        });
        describe('promise resolves', (): void => {
            it('should resolve with the result and return a protobuffer', (): Promise<void> => {
                return supertest(testApp)
                    .get('/users')
                    .set('Accept', 'application/octet-stream')
                    .expect('Content-Type', /^application\/octet\-stream/)
                    .expect(200)
                    .then((response: supertest.Response): void => {
                        expect(response.body).to.deep.equal(testMessage.encode(testRep).finish());
                    });
            });
            it('should resolve with the result and return a json object', (): Promise<void> => {
                return supertest(testApp)
                    .get('/users')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /^application\/json/)
                    .expect(200)
                    .then((response: supertest.Response): void => {
                        expect(response.body).to.deep.equal(testRep);
                    });
            });
            it('should return a Bad Request if a unknown Accept header is provided ', (): Promise<void> => {
                return supertest(testApp)
                    .get('/users')
                    .set('Accept', 'text/html')
                    .expect('Content-Type', /^application\/json/)
                    .expect(400, { status: 400, message: 'Bad Request' })
                    .then((): void => { });
            });
        });
    });
});
