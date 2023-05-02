class Node<T> {
  value?: T;
  left?: Node<T>;
  right?: Node<T>;
  constructor(value: T) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

class Tree {
  root?: Node<number>;
  constructor() {
    this.root = undefined;
  }
  push(value: number) {
    let newNode = new Node<number>(value);
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
let t1 = new Tree();
t1.push(5);
t1.push(4);
t1.push(6);
t1.push(2);
t1.push(9);
console.log(t1);

function preOrderTraversal(node: Node<number>, arr: number[]) {
  if (!node) return arr;
  let tmp = node;
  arr.push(tmp.value);
  arr = preOrderTraversal(node.left, arr);
  arr = preOrderTraversal(node.right, arr);
  return arr;
}
function inOrderTraversal(node: Node<number>, arr: number[]) {
  if (!node) return arr;
  let tmp = node;
  arr = inOrderTraversal(node.left, arr);
  arr.push(tmp.value);
  arr = inOrderTraversal(node.right, arr);
  return arr;
}
function postOrderTraversal(node: Node<number>, arr: number[]) {
  if (!node) return arr;
  let tmp = node;
  arr = postOrderTraversal(node.left, arr);
  arr = postOrderTraversal(node.right, arr);
  arr.push(tmp.value);
  return arr;
}
console.log(preOrderTraversal(t1.root,[]))
console.log(inOrderTraversal(t1.root,[]))
console.log(postOrderTraversal(t1.root,[]))

export {};
