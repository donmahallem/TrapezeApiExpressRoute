/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressRoute
 */

import { IPathSegment } from '@donmahallem/trapeze-api-types';
import { expect } from 'chai';
import 'mocha';
import { awesomepackage } from './models';
describe('test.ts', (): void => {
    describe('test()', (): void => {
        it('should use the 404 handler', (): void => {
            const b: awesomepackage.VehicleLocation.PathSegment = awesomepackage.VehicleLocation.PathSegment.create();
            const c: IPathSegment = b;
            expect(b).to.not.eq(false);
        });
    });
});
