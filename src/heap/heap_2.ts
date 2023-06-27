export function heapSort(array): number[] {
  array = createMaxHeap(array);
  for (let index = 0; index < array.length; index++) {
    swapPlace(0, index, array);

    heapify(array, 0, index);
  }
  return array;
}

export function heapify(array: number[], index: number, heapSize: number) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let largestValue = index;
  if (heapSize > left && array[largestValue] < array[left]) {
    largestValue = left;
  }
  if (heapSize > right && array[largestValue] < array[right]) {
    largestValue = right;
  }
}

export function swapPlace(index1: number, index2: number, array: number[]) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
  return array;
}

export function createMaxHeap(array: number[]) {
  for (let index = Math.floor(array.length / 2) - 1; index >= 0; index--) {
    heapify(array, index, array.length);
  }
}
