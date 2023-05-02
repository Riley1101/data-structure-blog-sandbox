class Node {
  value?: number;
  left?: Node;

  right?: Node;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root?: Node;
  constructor() {
    this.root = null;
  }
  push(value: number) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    let tmp = this.root;
    while (true) {
      if (value < tmp.value) {
        if (!tmp.left) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      } else {
        if (!tmp.right) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      }
    }
  }
}

export {}
