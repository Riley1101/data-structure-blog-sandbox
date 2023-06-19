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

export function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}


function merge(left: number[], right: number[]) {
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

export function mergeSort(arr: number[]) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let sortedLeft = mergeSort(leftArr);
  let sortedRight = mergeSort(rightArr);
  return merge(sortedLeft, sortedRight);
}

export function qs(arr: number[], low: number, high: number) {
    if(low>= high){
        return ;
    }
    const pivot = partition(arr,low,high)
    qs(arr,low,pivot - 1)
    qs(arr,pivot + 1,high)
}


export function partition(arr: number[], low: number, high: number) {
  const pivot = arr[high];
  let index = low - 1;
  for (let i = low; i < high; i++) {
    if (arr[i] <= arr[pivot]) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  index++;
  arr[high] = arr[index];
  arr[index] = pivot;
  return index;
}

export function quickSort_3(arr: number[]) {
  qs(arr, 0, arr.length);
}

