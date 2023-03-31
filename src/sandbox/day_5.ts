function insertionSort() {
  let arr = [1, 3, 2, 4, 7, 6, 10];
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j] > arr[i]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function bubbleSort() {
  let arr = [1, 3, 2, 4, 7, 6, 10];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  console.log(arr);
}

function bubbleSort_2() {
  let arr = [1, 7, 5, 2, 10, 12, 3, 4];

  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
        if (!swapped) return arr;
      }
    }
  }
  console.log(arr);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
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
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);
  return sortedLeft.concat(pivot, sortedRight);
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) return arr[mid];
    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
console.log(binarySearch([1, 2, 4, 5, 7, 8, 10], 10));
export {};
