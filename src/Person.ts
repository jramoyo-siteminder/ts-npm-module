import * as _ from 'lodash';
import * as model from 'proto-npm-module';

export default class Person {
    name: model.Name;

    constructor(firstName: string, lastName: string) {
        this.name = new model.Name();
        this.name.first = firstName;
        this.name.last = lastName;
    }

    public getFullName(): string {
        return `${this.name.first} ${this.name.last}`;
    }

    public equals(other: Person): boolean {
        return _.isEqual(this, other);
    }
};