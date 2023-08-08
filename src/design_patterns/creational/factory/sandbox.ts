export interface Deliver {
  deliver(): void;
  get_vehicle_id(): string;
}

export type DELIVERY_TYPE = "truck" | "ship" | "plane";

export class Delivery implements Delivery {
  private vehicle_id: string;
  constructor(vehicle_id: string) {
    this.vehicle_id = vehicle_id;
  }
  deliver(): void {
    console.log("Delivering with vehicle id: " + this.vehicle_id);
  }
  get_vehicle_id(): string {
    return this.vehicle_id;
  }
}

export class Truck_Delivery extends Delivery {
  constructor(vehicle_id: string) {
    super(vehicle_id);
  }
  deliver(): void {
    // unique truck delivery logic
    console.log("Delivering with truck id: " + this.get_vehicle_id());
  }
}

export class Ship_Delivery extends Delivery {
  constructor(vehicle_id: string) {
    super(vehicle_id);
  }
  deliver(): void {
    // unique ship delivery logic
    console.log("Delivering with ship id: " + this.get_vehicle_id());
  }
}

export class Plane_Delivery extends Delivery {
  constructor(vehicle_id: string) {
    super(vehicle_id);
  }
  deliver(): void {
    // unique plane delivery logic
    console.log("Delivering with plane id: " + this.get_vehicle_id());
  }
}

export class DeliveryFactory {
  create_delivery(type: DELIVERY_TYPE, vehicle_id: string): Delivery {
    switch (type) {
      case "truck":
        return new Truck_Delivery(vehicle_id);
      case "ship":
        return new Ship_Delivery(vehicle_id);
      case "plane":
        return new Plane_Delivery(vehicle_id);
      default:
        throw new Error("Invalid delivery type");
    }
  }
}

export class Application {
  private deliveries: Delivery[];
  factory: DeliveryFactory;
  constructor() {
    this.deliveries = [];
    this.factory = new DeliveryFactory();
  }
  order(id: string, type: DELIVERY_TYPE) {
    let new_delivery = this.factory.create_delivery(type, id);
    this.deliveries.push(new_delivery);
  }
  deliver_all() {
    this.deliveries.forEach((delivery) => {
      delivery.deliver();
    });
  }
}
