export function qs2(arr: number[]) {
  if (!arr.length) return arr;
  let length = arr.length;
  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  let sortedLeft = qs2(left);
  let sortedRight = qs2(right);
  return sortedLeft.concat(pivot, sortedRight);
}

export function qs(arr: number[], low: number, high: number) {
  if (low > high) {
    return;
  }
  const pivot = partition(arr, low, high);
  qs(arr, low, pivot - 1);
  qs(arr, pivot + 1, high);
  return arr;
}

function partition(arr: number[], low: number, high: number) {
  let pivot = arr[high];
  let index = low - 1;
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  index++;
  arr[high] = arr[index];
  arr[index] = pivot;
  return index;
}

let arr = qs([1, 34, 2, 4, 3, 0], 0, 5);
console.log(arr);
