function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  console.log(left, right);
  return arr.concat(left, right);
}
function mergeSort(arr: number[]) {
  // if length 1 return arr
  if (arr.length < 2) return arr;
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge_2(left: number[], right: number[]) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(right, left);
}
function mergeSort_2(arr: number[]) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  let mid = Math.floor(length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let sortedLeft = mergeSort_2(left);
  let sortedRight = mergeSort_2(right);
  return merge_2(sortedLeft, sortedRight);
}
console.log(mergeSort_2([1,7,2,4,3,21,5,6]))
export {};
