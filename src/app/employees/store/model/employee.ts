export class Employee {
  name: string;
  adress: string;
  age: number;

  constructor(name?: string,
              adress?: string,
              age?: number) {
    this.name = name;
    this.adress = adress;
    this.age = age;
  }
}
