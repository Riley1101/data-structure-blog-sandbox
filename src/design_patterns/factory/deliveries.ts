export interface Delivery {
  deliver(): string;
  getLocation(): void;
}

export class Delivery implements Delivery {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
  deliver(): string {
    console.log("delivering from the default" + this.id);
    return this.id;
  }
  getLocation(): void {
    console.log("getting location from ", this.id);
  }
}

export class LandDelivery extends Delivery {
  constructor(id: string) {
    super(id);
  }
  deliver() {
    console.log("delivering from the land " + this.id);
    return this.id;
  }
}

export class AirDelivery extends Delivery {
  constructor(public id: string) {
    super(id);
  }
  deliver() {
    console.log("delivering from the air " + this.id);
    return this.id;
  }
}

export class DeliveryFactory {
  createDelivery(type: "land" | "air"): Delivery {
    switch (type) {
      case "land":
        return new LandDelivery("land");
      case "air":
        return new AirDelivery("air");
      default:
        return new Delivery("default");
    }
  }
}

export class Application {
  data: Delivery[];
  constructor() {
    this.data = [];
  }

  getCurrency() {
    console.log("getting currency " + "USD");
    return "USD";
  }

  private push(deli: Delivery) {
    this.data.push(deli);
  }

  order(id: string, type: "land" | "air") {
    let factory = new DeliveryFactory();
    let delivery = factory.createDelivery(type);
    delivery.id = id;
    this.push(delivery);
  }

  deliver() {
    this.data.forEach((d) => {
      d.getLocation();
      d.deliver();
    });
  }
}

let americanApp = new Application();
americanApp.order("1", "land");
americanApp.order("2", "air");
americanApp.deliver();
americanApp.getCurrency();

export class BurmaApp extends Application {
  getCurrency() {
    console.log("getting currency " + "MMK");
    return "MMK";
  }
}

let burmaApp = new BurmaApp();
burmaApp.order("1", "land");
burmaApp.order("2", "air");
burmaApp.deliver();
burmaApp.getCurrency();
