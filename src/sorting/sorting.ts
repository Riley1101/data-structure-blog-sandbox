export function insertion_sort(arr: number[]) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
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

export function bubble_sort(arr: number[]) {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
        swapped = true;
      }
    }
    if (!swapped) {
      return arr;
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

export function merge_sort(arr: number[]) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let mid = Math.floor(length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let sortedLeft = merge_sort(leftArr);
  let sortedRight = merge_sort(rightArr);
  return merge(sortedLeft, sortedRight);
}

export function quick_sort(arr: number[]) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let pivot = arr[length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  let sortedLeft = quick_sort(leftArr);
  let sortedRight = quick_sort(rightArr);
  return sortedLeft.concat(pivot, sortedRight);
}

export function quick_sort_2(arr: number[]) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < arr.length ; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  let sortedLeft = quick_sort_2(leftArr);
  let sortedRight = quick_sort_2(rightArr);
  return sortedLeft.concat(pivot, sortedRight);
}

console.log(quick_sort_2([1,3,2,6,4,12,10]))
