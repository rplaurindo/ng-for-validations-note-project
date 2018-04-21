// Model

export class ExampleModel {

  id: number;
  name: string;

  constructor(attrs: Object = {}) {
    this.id = attrs['id'] || null;
    this.name = attrs['name'] || null;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): string {
    return this.name = name;
  }

}
