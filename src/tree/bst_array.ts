export class Tree {
  data: number[];
  length: number;
  constructor() {
    this.data = [];
    this.length = 0;
  }
  root(value: number) {
    if (this.data.length === 0) {
      this.data[0] = value;
      this.length++;
    }
  }
  setLeft(value: number) {
    this.data[this.leftChild(this.length)] = value;
    this.length++;
  }
  setRight(value: number) {
    this.data[this.rightChild(this.length)] = value;
    this.length++;
  }
  leftChild(idx: number) {
    return 2 * idx + 1;
  }
  rightChild(idx: number) {
    return 2 * idx + 2;
  }
}

let tr = new Tree();
tr.root(2);
tr.setLeft(3);
tr.setRight(5);

console.log(tr.data);
