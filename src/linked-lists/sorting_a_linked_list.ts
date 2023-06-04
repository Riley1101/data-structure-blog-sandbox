export class Node {
  value: number;
  next?: Node;
  prev?: Node;
  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  head?: Node;
  last?: Node;
  constructor() {
    this.head = null;
    this.last = null;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      newNode.prev = this.last;
      this.head = newNode;
      this.last = newNode;
      return newNode;
    }
    newNode.prev = this.last;
    this.last.next = newNode;
    this.last = newNode;
    return newNode;
  }
}

let list = new LinkedList();
list.push(3);
list.push(6);
list.push(2);
list.push(7);
list.push(9);

export function sortLinkedList(list: LinkedList) {
  if (list.head == null) return list;
  let tmp = list.head;
  while (tmp) {
    let current = tmp;
    let prev = current.prev;
    while (prev && prev.value > current.value) {
      console.log(prev, current);
      prev.next = prev;
      prev = prev.prev;
    }
    if (prev) {
      prev.next = current;
    }
    tmp = tmp.next;
  }
  console.log(list);
  return list;
}
sortLinkedList(list);

for(let i = 0; i < 3 ; i ++ ){
    let prev = list.head;
    console.log(prev.value)
    prev = prev.next
}

function traverseLinkedList(list: Node) {
  if (list === null) {
    return false;
  }
  console.log(list.value);
  return traverseLinkedList(list?.next);
}
// traverseLinkedList(list.head);

export function insertionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  return arr;
}
