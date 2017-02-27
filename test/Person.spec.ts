import { expect } from 'chai';

import Person from '../src/Person';

describe('Person', function () {
    describe('#getFullName', function () {
        it('returns the first and last name', function () {
            let person = new Person('Jan', 'Amoyo');
            expect(person.getFullName()).to.equal('Jan Amoyo');
        });
    });
});