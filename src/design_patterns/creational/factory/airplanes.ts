export interface BoreingPlane extends Plane {
  fly(): string;
  land(): string;
  getName(): string;
}

export class BoreingPlane implements Plane {
  private _name: string;
  constructor() {
    this._name = "boreing";
  }
  fly(): string {
    return `I am ${this._name} and I am flying boreingly`;
  }
  land(): string {
    return `I am ${this._name} and I am landing boreingly`;
  }
}
export interface AirPlane extends Plane {
  fly(): string;
  land(): string;
  getName(): string;
}

export class AirPlane implements AirPlane {
  private _name: string;
  constructor() {
    this._name = "airplane";
  }
  fly(): string {
    return `I am ${this._name} and I am flying airplane`;
  }
  land(): string {
    return `I am ${this._name} and I am landing airplane`;
  }
}
export interface Plane {
  fly(): string;
  land(): string;
  getName(): string;
}

export class Plane implements Plane {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  fly(): string {
    return `I am ${this.name} and I am flying like a plane`;
  }
  land(): string {
    return `I am ${this.name} and I am landing like a plane`;
  }
}

export class PlaneFactory {
  static createPlane(type: string): Plane {
    switch (type) {
      case "air": {
        return new AirPlane();
      }
      case "boreing": {
        return new BoreingPlane();
      }
    }
  }
}

const planes = {
  air: AirPlane,
  boreing: BoreingPlane,
};

export class PlaneFactory_2 {
  static createPlane(name: string, ...args: any[]): Plane {
    const instance = Object.create(planes[name].prototype);
    instance.constructor.apply(instance, args);
    return instance;
  }
}

let airplane = PlaneFactory.createPlane("air");
console.log(airplane.fly());
console.log(airplane.land());

let boreing = PlaneFactory_2.createPlane("boreing");
console.log(boreing.fly());
console.log(boreing.land());
