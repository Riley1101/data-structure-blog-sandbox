function qs(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }
  const pivot = partation(arr, low, high);
  qs(arr, low, pivot - 1);
  qs(arr, pivot + 1, high);
}

function partation(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let index = low - 1;
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      index++;
      [arr[i],arr[index]] = [arr[index],arr[i]]
    }
  }
  index++;
  arr[high] = arr[index];
  arr[index] = pivot;
  return index;
}

export function quickSort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
  console.log(arr)
}

quickSort([12, 3, 4, 5, 1, 2, 4]);
