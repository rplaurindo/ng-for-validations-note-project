export class ExampleModel {

    id: number;
    name: String;

    constructor(optionalParams: Object = {}) {
        this.id = optionalParams['id'] || null;
        this.name = optionalParams['name'] || null;
    }

    getId(): number {
        return this.id;
    }

    getName(): String {
        return this.name;
    }

    setName(name: String) {
        this.name = name;
    }
}
