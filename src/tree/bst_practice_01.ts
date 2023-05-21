class Node {
  value: number;
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

  search(root: Node, value: number) {
    if (!root) return null;
    if (root.value === value) {
      return value;
    }
    if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  insert(root: Node, value: number) {
    if (root === null) return new Node(value);
    if (value > root.value) {
      root.left = this.insert(root.left, value);
    } else {
      root.right = this.insert(root.right, value);
    }
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
        if (tmp.left === null) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      } else {
        if (tmp.right === null) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      }
    }
  }
}

let tr = new Tree();
tr.push(9);
tr.push(4);
tr.push(3);
tr.push(7);
tr.push(6);
tr.push(12);
tr.insert(tr.root,14)
tr.insert(tr.root,12)
console.log(tr.root);

export {};
