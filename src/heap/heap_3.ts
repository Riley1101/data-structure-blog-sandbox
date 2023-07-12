export function createMaxHeap(arr: number[]) {
  let length = Math.floor(arr.length / 2) - 1
  for (let index = length; index >= 0; index--) {
    console.log(arr[index])
  }
}

function heapify(array: number[], index: number, heapSize: number) {
  let left = 2 * index + 1
  let right = 2 * index + 2
  let largestValue = index


}
createMaxHeap([ 5, 3, 2, 10, 1, 9, 8, 6, 4, 7 ])
