export function binarySearch(arr: number[], target) {
  let length = arr.length;
  let start = 0;
  let end = length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

let arr = [1, 3, 4, 6, 9];
console.log(binarySearch(arr, 3));

export function insertionSort(arr: number[]) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  return arr;
}

export function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function merge(left: number[], right: number[]) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

export function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let sortedLeft = mergeSort(leftArr);
  let sortedRight = mergeSort(rightArr);
  return merge(sortedLeft, sortedRight);
}

export function quickSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  let length = arr.length;
  let pivot = arr[length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  let sortedLeft = quickSort(leftArr);
  let sortedRight = quickSort(rightArr);
  return sortedLeft.concat(pivot, sortedRight);
}

export class Node {
  value: number;
  left?: Node;
  right?: Node;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  root?: Node;
  constructor() {
    this.root = null;
  }
  push(value: number) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return newNode;
    }
    let tmp = this.root;
    while (true) {
      if (value < tmp.value) {
        if (tmp.left === null) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      } else {
        if (tmp.right === null) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      }
    }
  }
}

let tree = new Tree();
tree.push(5);
tree.push(3);
tree.push(1);
tree.push(2);
tree.push(7);
tree.push(6);
tree.push(9);
tree.push(12);

const preordertraversals = (node: Node, arr: number[]) => {
  if (!node) return arr;
  arr.push(node.value);
  arr = preordertraversals(node.left, arr);
  arr = preordertraversals(node.right, arr);
  return arr;
};
const inOrderTraversals = (node: Node, arr: number[]) => {
  if (!node) return arr;
  arr = inOrderTraversals(node.left, arr);
  arr.push(node.value);
  arr = inOrderTraversals(node.right, arr);
  return arr;
};
const postOrderTraversals = (node: Node, arr: number[]) => {
  if (!node) return arr;
  arr = postOrderTraversals(node.left, arr);
  arr = postOrderTraversals(node.right, arr);
  arr.push(node.value);
  return arr;
};

export function breadthFirstSearch(queue: Node[], arr) {
  if (!queue.length) return arr;

  let node = queue.shift();
  arr.push(node.value);
  if (node.left) {
    queue.push(node.left);
  }
  if (node.right) {
    queue.push(node.right);
  }
  return breadthFirstSearch(queue, arr);
}

class Queue {
  size: number;
  start: number;
  last: number;
  top: number;
  constructor() {
    this.size = 4;
    this.start = -1;
    this.last = -1;
    this.top = -1;
  }
  queue(value: number) {}
}

function rec_binary(arr: number[], target) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (target < arr[mid]) {
    return rec_binary(arr.slice(0, mid), target);
  } else {
    return rec_binary(arr.slice(mid), target);
  }
}

function rec_binary_slice(
  arr: number[],
  start: number,
  end: number,
  target: number
) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (target < arr[mid]) {
    return rec_binary_slice(arr, start, mid - 1, target);
  } else {
    return rec_binary_slice(arr, mid + 1, end, target);
  }
}

let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rec_binary_slice(elements, 0, elements.length, 4));
