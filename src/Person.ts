export default class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};