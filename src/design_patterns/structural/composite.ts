export class Graphic {
  move(x: number, y: number) {
    console.log("move to x:" + x + " y:" + y);
  }
  draw() {
    console.log("draw");
  }
}

export class Dot implements Graphic {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  move(x: number, y: number) {
    this.x = x + this.x;
    this.y = y + this.y;
  }
  draw() {
    console.log("draw");
  }
}

export class Circle extends Dot {
  constructor(x: number, y: number) {
    super(x, y);
  }
  draw() {
    console.log("draw circle");
  }
}

export class CompoundGraphic implements Graphic {
  children: Graphic[];
  constructor() {
    this.children = [];
  }
  move(x: number, y: number): void {
    this.children.forEach((child) => {
      child.move(x, y);
    });
  }
  draw(): void {
    this.children.forEach((child) => {
      child.draw();
    });
  }
  add(child: Graphic) {
    this.children.push(child);
  }
  remove(child: Graphic) {
    this.children = this.children.filter((c) => c !== child);
  }
}

export class ImageEditor {
  all: CompoundGraphic;
  constructor(all: CompoundGraphic) {
    this.all = all;
  }
  load() {
    // create compound graphic
      // load from file
    // add to all
  }
  groupSelected(components: Graphic[]) {
    const group = new CompoundGraphic();
    components.forEach((c) => {
      group.add(c);
      this.all.remove(c);
    });
    this.all.add(group);
    this.all.draw();
  }
}
