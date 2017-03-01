import { expect } from 'chai';

import Place from '../src/Place';

describe('Place', () => {
    describe('#getFullAddress', () => {
        it('returns the name and address', () => {
            let place = new Place('SiteMinder', '88 Cumberland St, The Rocks NSW 2000');
            expect(place.getFullAddress()).to.equal('SiteMinder, 88 Cumberland St, The Rocks NSW 2000');
        });
    });

    describe('#equals', () => {
        it('returns true when comparing the same objects', () => {
            let place = new Place('SiteMinder', '88 Cumberland St, The Rocks NSW 2000');
            expect(place.equals(place)).to.equal(true);
        });

        it('returns false when comparing different objects', () => {
            let place = new Place('SiteMinder', '88 Cumberland St, The Rocks NSW 2000');
            expect(place.equals(new Place('Sydney Opera House', 'Bennelong Point, Sydney NSW 2000'))).to.equal(false);
        });
    });
});