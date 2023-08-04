export class Node {
  value: string;
  next?: Node;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}
export class LinkedList {
  head: Node;
  constructor() {
    this.head = null;
  }

  private traverse() {
    let tmp = this.head;
    let prev = null;
    while (tmp) {
      prev = tmp;
      tmp = tmp.next;
    }
    return prev;
  }
  addElement(ele: string) {
    let newNode = new Node(ele);
    if (this.head == null) {
      this.head = newNode;
      return newNode;
    } else {
      let last = this.traverse();
      last.next = newNode;
    }
  }
}

let li = new LinkedList();
li.addElement("1");
li.addElement("2");
li.addElement("3");
li.addElement("4");
li.addElement("5");
li.addElement("6");
console.log(li.head);
