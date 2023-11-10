import * as fc from 'fast-check';
import * as _ from 'lodash-es';

import { isEqual } from './index';

const isCi = !!process.env.CI;

describe('isEqual', function() {
  it('test with fast-check', function() {
    fc.assert(
      fc.property(fc.anything({ withDate: true }), function(a) {
        return isEqual(a, a) === _.isEqual(a, a);
      })
    );
  });
  it('return true if primitives are passed', function() {
    // TODO: without Array, add more other primitives
    const arb = fc.clone(fc.oneof(fc.integer(), fc.string(), fc.array(fc.integer())), 2);

    fc.assert(
      fc.property(arb, function([a, b]) {
        if (!isCi) {
          console.log(a, b);
        }

        return isEqual(a, b);
      })
    );
  });
});
