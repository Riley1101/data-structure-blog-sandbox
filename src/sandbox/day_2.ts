function insertionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function bubbleSort(arr: number[]) {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  console.log(arr);
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}
function mergeSort(arr: number[]) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let mid = Math.floor(length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let sortedLeft = mergeSort(leftArr);
  let sortedRight = mergeSort(rightArr);

  return merge(sortedLeft, sortedRight);
}

class Node {
  value: string;
  next: Node | null;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}
class NodeList {
  head: Node | null;
  length: number;
  constructor() {
    this.head = null;
    length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

export {};
