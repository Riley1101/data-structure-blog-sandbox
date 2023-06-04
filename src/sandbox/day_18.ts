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
  remove = (value: number) => {
    if (this.root === null) return -1;
    if (value == this.root.value) {
      this.root = null;
      return this.root;
    }
    let tmp = this.root;
    while (tmp) {
      if (value < tmp.value) {
        // go left
        if (tmp.value === value) {
          console.log(tmp);
        }
        tmp = tmp.left;
      } else {
        // go right
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
tre.remove(2);
console.log(breadthFirstSearch([tre.root], []));
console.log(tre.root);
