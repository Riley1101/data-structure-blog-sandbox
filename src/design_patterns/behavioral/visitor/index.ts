export interface Shape {
  move(x: number, y: number): void;
  draw(): void;
  accept(visitor: Visitor): void;
}

export class Dot implements Shape {
  move(x: number, y: number): void {
    console.log("moving a dot by x: " + x + " y: " + y);
  }
  draw(): void {
    console.log("Drawing a dot");
  }
  accept(visitor: Visitor): void {
    visitor.visitDot(this);
  }
}

export class Circle implements Shape {
  move(x: number, y: number): void {
    console.log("moving a circle by x: " + x + " y: " + y);
  }
  draw(): void {
    console.log("Drawing a circle");
  }
  accept(visitor: Visitor): void {
    visitor.visitCircle(this);
  }
}

export class Rectangle implements Shape {
  move(x: number, y: number): void {
    console.log("moving a rectangle by x: " + x + " y: " + y);
  }
  draw(): void {
    console.log("Drawing a rectangle");
  }
  accept(visitor: Visitor): void {
    visitor.visitRectangle(this);
  }
}

export interface Visitor {
  visitDot(d: Dot): void;
  visitCircle(c: Circle): void;
  visitRectangle(r: Rectangle): void;
}

export class XMLExportVisitor implements Visitor {
  visitDot(d: Dot): void {
    d.accept(this);
  }
  visitCircle(c: Circle): void {
    c.accept(this);
  }
  visitRectangle(r: Rectangle): void {
    r.accept(this);
  }
}

export class Application {
  constructor(private shapes: Shape[]) {
    this.shapes = shapes;
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
  }

  draw() {
    this.shapes.forEach((shape) => shape.draw());
  }

  export() {
    let xmlExportVisitor = new XMLExportVisitor();
    this.shapes.forEach((shape) => shape.accept(xmlExportVisitor));
  }
}

let app = new Application([new Dot(), new Circle(), new Rectangle()]);
app.draw();
