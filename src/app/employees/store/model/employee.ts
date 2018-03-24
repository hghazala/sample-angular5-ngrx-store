export class Employee {
  adress: string;
  name: string;
  age: number;

  constructor(adress?: string, name?: string, age?: number) {
    this.adress = adress;
    this.name = name;
    this.age = age;
  }
}
