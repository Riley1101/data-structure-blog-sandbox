class Node {
  value: string;
  next: Node | null;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: Node | null;
  length: number;
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value: string) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length += 1;
  }
  getAll() {
    let current = this.top;
    for (let i = 0; i < this.length; i++) {
      console.log(current.value);
      current = current.next;
    }
  }
  pop() {
    let tmp = this.top.value;
    this.top = this.top.next;
    this.length -= 1;
    return tmp;
  }
}
let animalStacks = new Stack();
animalStacks.push("cat");
animalStacks.push("mouse");
animalStacks.push("dog");
animalStacks.push("err");
animalStacks.pop();
animalStacks.getAll();
export {};
