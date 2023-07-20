export interface Plane {
  fly(): string;
  land(): string;
}

export interface AirPlane extends Plane {
  fly(): string;
  land(): string;
}

export interface BoreingPlane extends Plane {
  fly(): string;
  land(): string;
}

export class Plane implements Plane {
  name: string;
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

export class AirPlane implements AirPlane {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fly(): string {
    return `I am ${this.name} and I am flying airily`;
  }
  land(): string {
    return `I am ${this.name} and I am landing airily`;
  }
}

export class BoreingPlane implements BoreingPlane {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fly(): string {
    return `I am ${this.name} and I am flying boreingly`;
  }
  land(): string {
    return `I am ${this.name} and I am landing boreingly`;
  }
}

export class PlaneFactory {
  static createPlane(type: string): Plane {
    switch (type) {
      case "air": {
        return new AirPlane("airplane");
      }
      case "boreing": {
        return new BoreingPlane("boreing");
      }
    }
  }
}

let airplane = PlaneFactory.createPlane("air");
console.log(airplane.fly());
console.log(airplane.land());

let boreing = PlaneFactory.createPlane("boreing");
console.log(boreing.fly());
console.log(boreing.land());
