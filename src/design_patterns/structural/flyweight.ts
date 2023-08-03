export class TreeType {
  name: string;
  color: string;
  texture: string;
  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }
  draw(canvas: string, x: number, y: number) {
    console.log(`Drawing ${this.name} at ${x},${y}, canvas: ${canvas}`);
  }
}

export class TreeFactory {
  treeTypes: { [key: string]: TreeType } = {};
  getTreeType(name: string, color: string, texture: string): TreeType {
    if (this.treeTypes[name]) {
      return this.treeTypes[name];
    } else {
      let newTreeType = new TreeType(name, color, texture);
      this.treeTypes[name] = newTreeType;
      return newTreeType;
    }
  }
}

export class Tree {
  x: number;
  y: number;
  type: TreeType;
  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
  draw(canvas: string) {
    this.type.draw(canvas, this.x, this.y);
  }
}

export class Forest {
  tress: Tree[] = [];
  treeFactory: TreeFactory;
  constructor() {
    this.treeFactory = new TreeFactory();
  }
  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ) {
    const type = this.treeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.tress.push(tree);
  }
  draw(canvas: string) {
    this.tress.forEach((tree) => tree.draw(canvas));
  }
}

// Usage
const forest = new Forest();

function plants1000Apples() {
  for (let i = 0; i < 1000; i++) {
    forest.plantTree(i, i, "apple", "red", "apple texture");
  }
}
plants1000Apples();

for (let i = 0; i < forest.tress.length - 1; i++) {
  console.log(Object.is(forest.tress[i].type, forest.tress[i + 1].type))
}
