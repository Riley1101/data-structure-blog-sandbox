export function binarySearch(arr: number[], target: number) {
  let start = 0;
  let end = arr.length;
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

let arr = [1, 2, 3, 4, 5, 6];

export function binarySearch_2(
  arr: number[],
  target: number,
  start: number,
  end: number
) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return target;
  }
  if (target > arr[mid]) {
    return binarySearch_2(arr, target, mid + 1, end);
  } else {
    return binarySearch_2(arr, target, start, mid - 1);
  }
}

console.log(binarySearch_2(arr, 2, 0, arr.length - 1));
