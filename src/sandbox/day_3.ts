function insertionSort() {
  let arr = [1, 3, 4, 2, 5, 8, 7, 2];
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > 0 && arr[j] > arr[i]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
}

function bubbleSort() {
  let arr = [1, 3, 4, 2, 5, 8, 7, 2];
  let length = arr.length;
  let swapped = false;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
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
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let mid = Math.floor(length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let sortedLeft = mergeSort(leftArr);
  let sortedRight = mergeSort(rightArr);
  return merge(sortedLeft, sortedRight);
}

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let pivot = arr[length - 1];
  let mid = Math.floor(length / 2);
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  let sortedLeft = quickSort(leftArr);
  let sortedRight = quickSort(rightArr);
  return sortedLeft.concat(pivot, sortedRight);
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      console.log(arr[mid]);
      return mid;
    }
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

class Stack {
  top: number;
  data: string[];
  size: number;
  constructor() {
    this.top = -1;
    this.size = 0;
    this.data = [];
  }
  private _resize() {
    if (this.top === this.size) {
      this.size = (this.size + 1) * 2;
    }
  }
  push(value) {
    this._resize();
    this.top = this.top + 1;
    this.data[this.top] = value;
  }
  pop() {
    let tmp = this.data[this.top];
    this.data[this.top] = null;
    this.top = this.top - 1;
    return tmp;
  }
}

let s1 = new Stack();
s1.push("Hello");
s1.push("Stack");
s1.push("I");
s1.push("Live");
s1.push("In");
s1.push("World");
s1.push("dumb")
s1.pop()

s1.push("dumb")
console.log(s1);
export {};
