function paris(arr: number[], target: number) {
  let length = arr.length;
  let start = 0;
  let end = length - 1;
  let shift = 0;
  while (start <= end) {
    if (arr[start] + arr[end] == target) return [start, end];
    if (shift % 2 == 0) {
      end -= 1;
      shift++;
    } else {
      start += 1;
    }
  }
}

function shift2(arr: number[], target: number) {
  let length = arr.length;
  let start = 0;
  let end = length - 1;
  let shift = "R";
  while (start <= end) {
    if (arr[start] + arr[end] == target) return [start, end];
    if (shift == "R") {
      end -= 1;
      shift = "L";
    } else {
      start += 1;
      shift = "R";
    }
  }
}

function shift3(arr: number[], target: number) {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let mid = Math.floor(start + end) / 2;
    if (target == arr[mid]) return mid;
    if (target > mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(shift3([1, 2, 3, 4, 6, 7], 3));

console.log(paris([1, 2, 3, 4, 6, 7], 3));

console.log(shift2([1, 2, 3, 4, 6, 7], 3));

