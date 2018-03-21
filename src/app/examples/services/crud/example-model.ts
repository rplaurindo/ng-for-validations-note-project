export class ExampleModel {

    id: Number;
    name: String;

    constructor(optionalParams: Object = {}) {
        this.id = optionalParams['id'] || null;
        this.name = optionalParams['name'] || null;
    }

    getId(): Number {
        return this.id;
    }

    getName(): String {
        return this.name;
    }
}
