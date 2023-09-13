export class Shape {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  getShape(): string {
    return "x: " + this._x + " y: " + this._y;
  }
  clone(x: number, y: number): Shape {
    return new Shape(x, y);
  }
}

let obj = new Shape(10, 20);
console.log(obj.getShape());

let obj2 = obj.clone(40, 40);
console.log(obj2.getShape());

class Car {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Driver {
  name: string;
  car: Car;
  constructor(name: string, car: Car) {
    this.name = name;
    this.car = car;
  }
}

let car = new Car("Toyota", "Camry");
let driver = new Driver("John", car);
