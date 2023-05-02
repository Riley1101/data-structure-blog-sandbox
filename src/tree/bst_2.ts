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

const breadthFirstSearch = (queue: Node<number>[], arr: number[]) => {
  if (!queue.length) {
    return arr;
  }
  let node = queue.shift();
  arr.push(node.value)
  if (node.left) {
    queue.push(node.left);
  }
  if (node.right) {
    queue.push(node.right);
  }
  return breadthFirstSearch(queue,arr)
};

console.log(breadthFirstSearch([t1.root],[]))


export {};
