export function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}
function merge(left: number[], right: number[]): number[] {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }
  return result.concat(left, right);
}

console.log(mergeSort([1, 4, 2, 5, 6, 9, 3]));
