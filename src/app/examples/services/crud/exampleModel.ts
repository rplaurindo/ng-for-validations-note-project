export class ExampleModel {

    constructor(
        private id: Number,
        private name: String
    ) { }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}
