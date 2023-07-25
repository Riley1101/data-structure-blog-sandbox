export interface Builder {
  addSeats(seats: number): Builder;
  addNitro(mili: number): Builder;
  addEngine(type: string): Builder;
  addGps(type: boolean): Builder;
  getInfo(): Car;
}

export interface Car {
  seats: number;
  nitro: number;
  engine: string;
  gps: boolean;
}

export class CarBuilder implements Builder {
  private seats: number;
  private nitro: number;
  private engine: string;
  private gps: boolean;

  constructor() {
    this.seats = 0;
    this.nitro = 0;
    this.engine = "";
    this.gps = false;
  }

  addSeats(seats: number): CarBuilder {
    this.seats = seats;
    return this;
  }

  addNitro(mili: number): CarBuilder {
    this.nitro = mili;
    return this;
  }

  addEngine(type: string): CarBuilder {
    this.engine = type;
    return this;
  }

  addGps(type: boolean): CarBuilder {
    this.gps = type;
    return this;
  }

  getInfo(): Car {
    return {
      seats: this.seats,
      nitro: this.nitro,
      engine: this.engine,
      gps: this.gps,
    };
  }
}

export interface Engineer {
  makeSportCar(): Car;
  makeFamilyCar(): Car;
}

export class Application {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  makeSportCar(): Car {
    return this.builder
      .addEngine("v8")
      .addGps(true)
      .addNitro(1000)
      .addSeats(2)
      .getInfo();
  }

  makeFamilyCar(): Car {
    return this.builder
      .addEngine("v4")
      .addGps(true)
      .addNitro(0)
      .addSeats(4)
      .getInfo();
  }
}

let carBuilder = new CarBuilder();
let app = new Application(carBuilder);

let sport = app.makeFamilyCar();
console.log(sport);
let fam = app.makeSportCar();
console.log(fam);
