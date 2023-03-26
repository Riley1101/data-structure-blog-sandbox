function insertionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j] > arr[i]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = current;
  }

  console.log(arr);
  return arr;
}

function binarySearch(arr: number[], item: number) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (item == arr[mid]) {
      console.log(arr[mid]);
      return mid;
    }
    if (item > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

class Node {
  value: string;
  next: Node | null;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  length: number;
  head: Node;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getNodes() {
    let current = this.head;
    let arr = [];
    while (current.next) {
      arr.push(current.value);
      console.log(current.value);
      current = current.next;
    }
    console.log(arr);
  }
  push(value: string) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length += 1;
      return newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }
  pushEnd(value: string) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length += 1;
      return newNode;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.length += 1;
  }
}

let node = new LinkedList();
node.push("Hello");
node.push("World");
node.push("Love");
node.getNodes();
export {};
