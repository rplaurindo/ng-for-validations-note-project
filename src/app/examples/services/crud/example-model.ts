// Model

export class ExampleModel {

    id: number;
    name: String;

    constructor(attrs: Object = {}) {
        this.id = attrs['id'] || null;
        this.name = attrs['name'] || null;
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
