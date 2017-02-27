export default class Place {
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    public getFullAddress() {
        return `${this.name}, ${this.address}`;
    }
};