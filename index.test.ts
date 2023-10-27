import * as fc from 'fast-check';
import * as _ from 'lodash-es';

import { isEqual } from './index';

const isCi = !!process.env.CI;

describe('isEqual', function() {
  it('test with fast-check', function() {
    fc.assert(
      fc.property(fc.anything({ withDate: true }), function(a) {
        if (!isCi) {
          console.log(a);
        }

        return isEqual(a, a) === _.isEqual(a, a);
      })
    );
  });
});
