export class Node {
  value: number;
  left: Node | null;
  right: Node | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  root?: Node;
  constructor() {
    this.root = undefined;
  }
  push(value: number) {
    let newNode = new Node(value);
    if (this.root === undefined) {
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
  private _traverse(node: Node, value: number) {
    let current: Node | null = node;
    let parent = null;
    while (current) {
      if (value < current.value) {
        if (current.value === value) {
          return {
            node: current,
            parent,
          };
        }
        parent = current;
        current = current.left;
      } else {
        if (current.value === value) {
          return {
            node: current,
            parent,
          };
        }
        parent = current;
        current = current.right;
      }
    }
  }
  print_tree() {
    let raw = JSON.stringify(this.root);
    console.log(raw);
  }
  remove(value: number) {
    if (this.root === null) {
      return -1;
    }
    let res = this._traverse(this.root as Node, value);
    let target = res?.node;
    let parent = res?.parent;
    if (!target || !parent) return -1;
    /** removed with one child */

  }
}

export function breadthFirstSearchRec(
  queue: Node[],
  result: number[]
): number[] {
  if (!queue.length) return result;
  let node = queue.shift() as Node;
  result.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  return breadthFirstSearchRec(queue, result);
}

export function breadthFirstSearch(queue: Node[], result: number[]) {
  while (queue.length) {
    let node = queue.shift() as Node;
    result.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
}
const tr = new Tree();

tr.push(6);
tr.push(5);
tr.push(4);
tr.push(3);
tr.push(8);
tr.push(7);
tr.push(1);

console.log(tr.root);
console.log(tr.root);

