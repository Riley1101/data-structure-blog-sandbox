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
export class BinarySearchTree {
  root?: Node;
  constructor() {
    this.root = null;
  }
  addNode(value: number) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    let tmp = this.root;
    while (tmp) {
      if (value > tmp.value) {
        if (tmp.right == null) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      } else {
        if (tmp.left == null) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.addNode(6);
tree.addNode(8);
tree.addNode(3);
tree.addNode(10);
tree.addNode(2);
tree.addNode(1);

export function breadthFirstSearch(queue: Node[], result: number[]) {
  if (!queue.length) return result;
  let current = queue.shift();
  result.push(current.value);
  if (current.left) {
    queue.push(current.left);
  }
  if (current.right) {
    queue.push(current.right);
  }
  return breadthFirstSearch(queue, result);
}

export function depthFirstSearch(node: Node, array: number[]) {
  if (!node) return array;
  array = depthFirstSearch(node.left, array);
  array = depthFirstSearch(node.right, array);
  array.push(node.value);
  return array;
}

console.log(depthFirstSearch(tree.root, []));
