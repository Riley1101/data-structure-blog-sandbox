function insertionSort() {
  let arr = [1, 5, 2, 4, 5, 10, 8];
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function bubbleSort() {
  let arr = [1, 5, 2, 4, 5, 10, 8];
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
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

function quickSort(arr: number[]) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let pivot = arr[length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
}

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
export {};
