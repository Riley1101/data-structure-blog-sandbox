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

function quickSort(arr){
    if(arr.length < 2 ) return arr;
    let length = arr.length;
    let pivot = arr[length - 1];
    let mid = Math.floor(length / 2)
    let leftArr = []
    let rightArr = []
    for(let i =0; i < arr.length - 1; i++ ){
        if(arr[i] > pivot){
            rightArr.push(arr[i])
        }else{
            leftArr.push(arr[i])
        }
    }
    let sortedLeft = quickSort(leftArr)
    let sortedRight = quickSort(rightArr)
    return sortedLeft.concat(pivot, sortedRight)
}

console.log(quickSort([1,3,4,2,4,6,2,1]))
export {};
