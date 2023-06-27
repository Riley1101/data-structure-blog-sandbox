export function binaryResursive(
  arr: number[],
  start: number,
  end: number,
  element: number
) {
  let mid = Math.floor((start + end) / 2);
  if (element === arr[mid]) return element;
  if (start > end) return -1;
  if (element > arr[mid]) {
    return binaryResursive(arr, mid + 1, arr.length, element);
  } else {
    return binaryResursive(arr, 0, mid - 1, element);
  }
}

console.log(binaryResursive([1, 2, 3, 4, 5, 6, 9], 0, 6, 4));
