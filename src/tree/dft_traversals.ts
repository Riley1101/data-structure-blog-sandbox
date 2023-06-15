class Node {
  value: number;
  left: Node | null;
  right: Node | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root: Node | null;
  constructor() {
    this.root = null;
  }
  push(value: number) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return newNode;
    }
    let tmp = this.root;
    while (true) {
      if (value < tmp.value) {
        if (!tmp.left) {
          tmp.left = newNode;
          return newNode;
        } else {
          tmp = tmp.left;
        }
      } else {
        if (!tmp.right) {
          tmp.right = newNode;
          return newNode;
        } else {
          tmp = tmp.right;
        }
      }
    }
  }
}

const t1 = new Tree();
t1.push(1);
t1.push(3);
t1.push(2);
t1.push(7);
t1.push(9);
t1.push(12);

const preOrderTraverse = (node: Node | null, array: number[]) => {
  if (!node) return array;
  array.push(node.value);
  array = preOrderTraverse(node.left, array);
  array = preOrderTraverse(node.right, array);
  return array;
};
console.log(preOrderTraverse(t1.root, []));

const postOrderTraverse = (node: Node | null, array: number[]) => {
  if (!node) return array;
  array = postOrderTraverse(node.left, array);
  array = postOrderTraverse(node.right, array);
  array.push(node.value);
  return array;
};
console.log(postOrderTraverse(t1.root, []));

export {};
