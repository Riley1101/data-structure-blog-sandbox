export class Node {
  value: string;
  isComplete: boolean;
  children: Map<string, Node>;
  parent: Node | null;
  constructor(value: string, isComplete = false) {
    this.parent = null;
    this.value = value;
    this.children = new Map();
    this.isComplete = isComplete;
  }
}

export class Tries {
  root: Node;
  constructor() {
    this.root = new Node(" ");
  }
  insert(word: string) {
    let current = this.root;
    for (const letter of word) {
      if (!current.children.has(letter)) {
        let newNode = new Node(letter);
        newNode.parent = current;
        current.children.set(letter, newNode);
      }
      current = current.children.get(letter);
    }
    current.isComplete = true;
    return current;
  }
  getValues() {
    console.log(this.root);
    return this.root;
  }
}

let tr = new Tries();
tr.insert("car");
tr.insert("cart");
tr.insert("cartoon");
tr.insert("carless");
tr.insert("cow");
tr.insert("cat");

export function traverseNodes(node: Node) {
  let arr = [];
  if (!node) return [];
  let queue = [node];
  while (queue.length) {
    let current = queue.pop();
    arr.push(current.value);
    current.children.forEach((item) => {
      queue.push(item);
    });
  }
  return arr;
}

export function getPrev(node: Node, word: string) {
  if (!node) return word.replace(" ", "").split("").reverse().join('');
  return getPrev(node.parent, word + node.value);
}

export function getWords(node: Node) {
  if (!node) return [];
  let queue = [node];
  let res = [];
  while (queue.length) {
    let current = queue.pop();
    // word constract logic
    if (current.value !== " ") {
    }
    if (current.isComplete) {
      let prefix = getPrev(current, "");
      res.push(prefix)
    }
    current.children.forEach((item) => {
      queue.push(item);
    });
  }
  console.log(res)
  return res;
}

getWords(tr.root);
