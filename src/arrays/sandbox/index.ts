function insertion_sort_sandbox(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function binary_search_sandbox(arr: number[], target: number) {
  arr = insertion_sort_sandbox(arr);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      console.log(arr[mid]);
      return arr[mid];
    }
    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

let data = [
  { item: 2 },
  { item: 3 },
  { item: 12 },
  { item: 4 },
  { item: 6 },
  { item: 9 },
  { item: 10 },
  { item: 7 },
];

function insertion_sort_object(data: { item: number }[]) {
  for (let i = 0; i < data.length; i++) {
    let j = i - 1;
    let current = data[i];
    while (j > -1 && data[j].item > current.item) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = current;
  }
  return data;
}

function binary_search_object(data: { item: number }[], target: number) {
  data = insertion_sort_object(data);
  let start = 0;
  let end = data.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (data[mid].item === target) {
      console.log(data[mid]);
      return mid;
    }
    if (target > data[mid].item) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
function bubbleSort(arr: number[]) {
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
  const res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return res.concat(left, right);
}

function mergeSort(arr: number[]) {
  let length = arr.length;
  if (length < 2) return arr;
  let mid = Math.floor(length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let sortedLeft = mergeSort(leftArr);
  let sortedRight = mergeSort(rightArr);
  return merge(sortedLeft, sortedRight);
}

function quickSort(arr: number[]) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i]< pivot){
       left.push(arr[i]) 
    }else{
        right.push(arr[i])
    }
  }
  let sortedLeft = quickSort(left)
  let sortedRight = quickSort(right)
  return sortedLeft.concat(pivot, sortedRight)
}

console.log(quickSort([1,4,2,6,12,8,9,12,65,12,1,21]))
export {};
