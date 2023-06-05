export class Node {
  value: number;
  left?: Node;
  right?: Node;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  root?: Node;
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

  search(value: number) {
    if (this.root === null) return -1;
    let tmp = this.root;
    while (true) {
      if (value === tmp.value) return tmp;
      if (value < tmp.value) {
        tmp = tmp.left;
      } else {
        tmp = tmp.right;
      }
    }
  }

  getMin(node) {
    let tmp = node;
    while (tmp) {
      tmp = tmp.left;
    }
    return tmp;
  }

  remove = (value: number) => {
    console.log("did i worked");
    if (this.root === null) return -1;
    if (value == this.root.value) {
      this.root = null;
      return this.root;
    }
    let tmp = this.root;
    let prev: Node | null;
    while (tmp) {
      if (tmp.value === value) {
        // remove when there is two
        if (tmp.left !== null && tmp.right !== null) {
          prev.right = tmp.right;
          tmp.right.left = tmp.left;
          return 200;
        }

        // remove when there is only one child
        if (tmp.left !== null && tmp.right === null && tmp.value < prev.value) {
          prev.left = tmp.left;
          return 200;
        }
        if (tmp.left === null && tmp.right !== null && tmp.value > prev.value) {
          prev.right = tmp.right;
          return 200;
        }

        // remove when there is no children
        if (tmp.left === null && tmp.right === null && tmp.value < prev.value) {
          prev.left = null;
          return 200;
        }
        if (tmp.left === null && tmp.right === null && tmp.value > prev.value) {
          prev.right = null;
          return 200;
        }
      }
      // traverse the tree
      if (value < tmp.value) {
        prev = tmp;
        tmp = tmp.left;
      } else {
        prev = tmp;
        tmp = tmp.right;
      }
    }
  };
}

function breadthFirstSearch(queue: Node[], arr: number[]) {
  if (!queue.length) return arr;
  let node = queue.shift();
  arr.push(node.value);
  node.left && queue.push(node.left);
  node.right && queue.push(node.right);
  return breadthFirstSearch(queue, arr);
}

function recursiveSearch(node: Node, value: number) {
  if (node.value === value) return node;
  if (value < node.value) return recursiveSearch(node.left, value);
  if (value > node.value) return recursiveSearch(node.right, value);
}

let tre = new Tree();
tre.push(6);
tre.push(4);
tre.push(8);
tre.push(2);
tre.push(5);
tre.push(7);
tre.push(9);
tre.push(10);
tre.remove(8);
console.log(tre.root);
