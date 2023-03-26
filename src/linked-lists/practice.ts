class Node {
  value: string;
  next: Node;
  constructor(value: string) {
    this.value = value;
  }
}
class LinkedList {
  head: Node;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  add_front(value: string) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return newNode;
  }
  add_back(value: string) {
    let newNode = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.length += 1;
  }
  getNodes() {
    let arr: string[] = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
    return arr;
  }
  getByValue(value: string): Node | Error {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return new Error("item not exists");
  }
  insertByIndex(index: number, value: string) {
    if (this.length < index) return new Error("Insert is impossible");
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;
    this.length += 1;
  }
  insertBehindValue(target: string, value: string) {
    let current = this.head;
    while (current.next) {
      if (current.value === target) {
        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length += 1;
        return newNode;
      }
      current = current.next;
    }
  }
  deleteByValue(value: string) {
    let current = this.head;
    let prev = null;
    if (current.value === value) return current;
    while (current.next) {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
        }
        this.length -= 1;
      }
      prev = current;
      current = current.next;
    }
  }
}
let node = new LinkedList();
node.add_front("Hello");
node.add_front("I");
node.add_front("live");
node.add_front("in");
node.add_front("World !");
node.add_back(" Brother ");
node.getByValue("live");
node.insertByIndex(3, "Medium");
node.insertBehindValue("in", "AfterIn");
node.deleteByValue("I");
node.getNodes();

export {};
