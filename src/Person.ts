import * as model from 'proto-npm-module';

export default class Person {
    name: model.Name;

    constructor(firstName: string, lastName: string) {
        this.name = new model.Name();
        this.name.first = firstName;
        this.name.last = lastName;
    }

    public getFullName() {
        return `${this.name.first} ${this.name.last}`;
    }
};