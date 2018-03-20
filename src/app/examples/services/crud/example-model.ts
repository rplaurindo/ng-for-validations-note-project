export class ExampleModel {

    constructor(
        private id: Number,
        private name: String
    ) { }

    getId(): Number {
        return this.id;
    }

    getName(): String {
        return this.name;
    }
}
