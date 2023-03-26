class LinkNode {
  value: string;
  next: LinkNode | null;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  head: LinkNode | null;
  tail: LinkNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  printAll() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(current.value);
      current = current.next;
    }
  }
  push(value: string) {
    let newNode = new LinkNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  getByIndex(index: number): string | Error {
    if (index > this.length) return new Error("value doest not exists");
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
  getByValue(value: string) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return new Error("Error: value doest not exists");
  }
  insertAt(value: string, index: number) {
    if (this.length < index) return new Error("Cannot inset at that index");
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    let newNode = new LinkNode(value);
    newNode.next = current.next;
    current.next = newNode;
    this.length += 1;
  }
  deleteAt(index: number) {
    if (this.length < index) return new Error("Cannot delete at that index");
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    let next = current.next;
    current.next = next.next;
    this.length -= 1;
  }
  reverse(){
    
  }
}
const node1 = new LinkedList();
node1.push("I");
node1.push("Live");
node1.push("In");
node1.push("The");
node1.push("World !");
node1.getByIndex(10);
node1.getByValue("In");
node1.insertAt("HEART", 1);
node1.deleteAt(2);
node1.printAll();
