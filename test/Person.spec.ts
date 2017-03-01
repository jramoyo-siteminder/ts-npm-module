import { expect } from 'chai';

import Person from '../src/Person';

describe('Person', () => {
    describe('#getFullName', () => {
        it('returns the first and last name', () => {
            let person = new Person('Jan', 'Amoyo');
            expect(person.getFullName()).to.equal('Jan Amoyo');
        });
    });

    describe('#equals', () => {
        it('returns true when comparing the same objects', () => {
            let person = new Person('Jan', 'Amoyo');
            expect(person.equals(person)).to.equal(true);
        });

        it('returns false when comparing different objects', () => {
            let person = new Person('Jan', 'Amoyo');
            expect(person.equals(new Person('Boba', 'Fett'))).to.equal(false);
        });
    });
});