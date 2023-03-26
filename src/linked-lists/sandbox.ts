class Node {
  value: string;
  next: Node | null;
  prev: Node | null;
  constructor(value: string) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class DoubleLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get_values() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(current.value);
      current = current.next;
    }
  }
  get_values_rev() {
    let current = this.tail;
    for (let i = 0; i < this.length; i++) {
      console.log(current.value);
      current = current.prev;
    }
  }
  push(value: string) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
}

class DoubleLinkedList_2 {
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  printValues_2() {
    let current = this.head;
    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
  }
  printValues() {
    let current = this.head;
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
  push(value: string) {
    let newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  insertAt(value: string, index: number) {
    if (index > this.length) {
      return new Error("Insertion is impossible at the index");
    }
    let newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    newNode.next = current.next
    newNode.prev = current.prev 
    console.log(newNode)
    current.next = newNode
    this.length += 1;
  }
  removeByValue(value: string) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        let prev = current.prev;
        prev.next = current.next;
        this.length -= 1;
        return current;
      }
      current = current.next;
    }
    return new Error("value does not exists");
  }
  pop() {
    let last = this.tail;
    this.tail = last.prev;
    this.tail.next = null;
    this.length -= 1;
    return last;
  }
  removeHead() {
    let head = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return head;
  }
}

let node = new DoubleLinkedList_2();
node.push("Hello !");
node.push("I");
node.push("May");
node.push("Live");
node.push("In");
node.push("Typo");
node.push("The");
node.push("world");
node.removeHead();
node.insertAt("love", 3);
node.removeByValue("Typo");
node.printValues_2();
e
