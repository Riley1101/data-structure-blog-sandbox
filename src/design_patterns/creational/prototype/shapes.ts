export class Shape {
  x: string;
  y: string;
  constructor(source: Shape) {
    this.x = source.x;
    this.y = source.y;
  }
  clone(): Shape {
    return new Shape(this);
  }
}

export class Rectangle extends Shape {
  constructor(source: Rectangle) {
    super(source);
    this.x = source.x;
    this.y = source.y;
  }
  clone(): Shape {
    return new Rectangle(this);
  }
}

export class Circle extends Shape {
  constructor(source: Circle) {
    super(source);
    this.x = source.x;
    this.y = source.y;
  }
  clone(): Shape {
    return new Circle(this);
  }
}

