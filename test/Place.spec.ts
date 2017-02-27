import { expect } from 'chai';

import Place from '../src/Place';

describe('Place', function () {
    describe('#getFullAddress', function () {
        it('returns the name and address', function () {
            let place = new Place('SiteMinder', '88 Cumberland St, The Rocks NSW 2000');
            expect(place.getFullAddress()).to.equal('SiteMinder, 88 Cumberland St, The Rocks NSW 2000');
        });
    });
});