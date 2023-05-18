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
  root: null | Node;
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
      if (value > tmp.value) {
        if (tmp.right === null) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      } else {
        if (tmp.left === null) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      }
    }
  }
}

let trl = new Tree();
trl.push(9);
trl.push(4);
trl.push(2);
trl.push(7);
trl.push(5);
trl.push(3);
trl.push(11);
trl.push(12);
trl.push(10);
console.log(trl.root);

const preOrderTraversals = (node: Node, arr: number[]) => {
  if (!node) return arr;
  arr.push(node.value);
  arr = preOrderTraversals(node.left, arr);
  arr = preOrderTraversals(node.right, arr);
  return arr;
};
console.log(preOrderTraversals(trl.root, []));

const inOrderTraversals = (node: Node, arr: number[]) => {
  if (!node) return arr;
  arr = inOrderTraversals(node.left, arr);
  arr.push(node.value);
  arr = inOrderTraversals(node.right, arr);
  return arr;
};
console.log(inOrderTraversals(trl.root, []));

const postOrderTraversals = (node: Node, arr: number[]) => {
  if (!node) return arr;
  arr = postOrderTraversals(node.left, arr);
  arr = postOrderTraversals(node.right, arr);
  arr.push(node.value);
  return arr;
};
console.log(postOrderTraversals(trl.root, []));

const breadthFirstSearch = (queue: Node[], arr: number[]) => {
  if (!queue.length) return arr;
  let tmp = queue.shift();
  arr.push(tmp.value);
  if (tmp.left) {
    queue.push(tmp.left);
  }
  if (tmp.right) {
    queue.push(tmp.right);
  }
  return breadthFirstSearch(queue, arr);
};

console.log(breadthFirstSearch([trl.root], []));
class BolkTree {
  root: Node | null;
  arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
    this.root = null;
  }
  build() {
    let length = this.arr.length;
    let mid = Math.floor(length / 2);
    let left = this.arr.slice(0, mid - 1);
    let midEle = this.arr[mid];
    let right = this.arr.slice(mid + 1);
    let lt = new Tree();
    let rt = new Tree();
    let midRoot = new Node(midEle);
    for (let i = 0; i < left.length; i++) {
      lt.push(left[i]);
    }
    for (let i = 0; i < right.length; i++) {
      rt.push(right[i]);
    }
    midRoot.left = lt.root;
    midRoot.right = rt.root;
    this.root = midRoot;
  }
}

export {};
