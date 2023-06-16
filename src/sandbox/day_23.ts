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
  root?: Node | null;
  constructor() {
    this.root = null;
  }
  push(value: number) {
    let newNode = new Node(value);
    if (this.root === null || this.root === undefined) {
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
    let raw = JSON.stringify(this.root, null, 4);
    console.log(raw);
  }
  remove(value: number) {
    if (this.root === null || this.root === undefined) {
      return -1;
    }
    let c: Node | null = this.root;
    let p = null;
    while (c) {
      if (c.value === value) {
        if (c.left !== null && c.right !== null) {
          let ancisor = c.right;
          ancisor.left = c.left;
          if (value < p.value) {
            p.left = ancisor;
            return p.value;
          } else {
            p.right = ancisor;
            return p.value;
          }
        }
        // remove with one node
        else if (c.left !== null && c.right === null) {
          let cp = c;
          if (value < p.value) {
            p.left = cp.left;
            return cp.value;
          } else {
            p.right = cp.left;
            return cp.value;
          }
        } else if (c.right !== null && c.left === null) {
          let cp = c;
          if (value < p.value) {
            p.left = cp.right;
            return cp.value;
          } else {
            p.right = cp.right;
            return cp.value;
          }
        }

        // removed the leaf node
        else if (c.left === null && c.right === null) {
          if (value < p?.value && p?.left) {
            let cp = p.left;
            p.left = null;
            return cp.value;
          } else {
            let cp = p.right;
            p.right = null;
            return cp.value;
          }
        }
        // remove with a child
      }
      p = c;
      if (value < c.value) {
        c = c.left;
      } else {
        c = c.right;
      }
    }
    return -1;
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

const tr = new Tree();

tr.push(6);
tr.push(4);
tr.push(5);
tr.push(3);
tr.push(8);
tr.push(7);
tr.push(9);
tr.push(1);
tr.push(10);
tr.print_tree();
tr.remove(8);
tr.remove(9);
tr.print_tree();

export function inOrder(root: Node, result: number[]) {
  if (!root) return result;
  if (root.left) {
    result = inOrder(root.left, result);
  }
  result.push(root.value);
  if (root.right) {
    result = inOrder(root.right, result);
  }
  return result;
}

export function postOrder(root: Node, result: number[]) {
  if (!root) return result;
  if (root.left) {
    result = postOrder(root.left, result);
  }
  if (root.right) {
    result = postOrder(root.right, result);
  }
  result.push(root.value);
  return result;
}
export function preOrderTaversal2(root: Node, result: number[]) {
  if (!root) return result;
  result.push(root.value);
  if (root.left) {
    result = preOrderTaversal2(root.left, result);
  }
  if (root.right) {
    result = preOrderTaversal2(root.right, result);
  }
  return result;
}

export function preOrderTraversal(root: Node): number[] {
  if (!root) {
    return [];
  }
  let result = [];
  let stack: Node[] = [root];
  while (stack.length) {
    let node = stack.pop();
    if (node.left) {
      stack.push(node.left);
    }
    result.push(node.value);
    if (node.right) {
      stack.push(node.right);
    }
  }
  return result;
}

console.log(preOrderTraversal(tr.root), "REc");
console.log(preOrderTaversal2(tr.root, []));
console.log(inOrder(tr.root, []));
console.log(postOrder(tr.root, []));
