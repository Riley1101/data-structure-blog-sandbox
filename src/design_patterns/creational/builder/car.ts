import { CarBuilder } from ".";

export interface Builder {
  setSeats(): void;
  setDoors(): void;
  setEngine(): void;
  setGPS(): void;
  build(): Car;
}

export interface Car {
  seats: number;
  doors: number;
  engine: string;
  gps: string;
}

export class Builder implements Builder {
  private car: Car;

  constructor() {
    this.car = {} as Car;
  }

  setSeats(): void {
    this.car.seats = 4;
  }

  setDoors(): void {
    this.car.doors = 4;
  }

  setEngine(): void {
    this.car.engine = "V8";
  }

  setGPS(): void {
    this.car.gps = "Google GPS";
  }

  build(): Car {
    return this.car;
  }
}

export interface Engineer {
  makeSportsCar(builder: Builder): void;
  makeSUV(builder: Builder): void;
}

export class Engineer {
  private builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }
  changeBuilder(builder: Builder): void {
      this.builder = builder;
  }
  makeSportsCar(builder: Builder): void {
    this.builder.setSeats();
    this.builder.setDoors();
    this.builder.setEngine();
    this.builder.setGPS();
    this.builder.build();
  }
  makeSUV(builder: Builder): void {
    this.builder.setSeats();
    this.builder.setDoors();
    this.builder.setEngine();
    this.builder.setGPS();
    this.builder.build();
  }
}

export class SportCarBuilder extends CarBuilder{

}
