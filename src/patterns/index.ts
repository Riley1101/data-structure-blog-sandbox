function sliding_window(arr: number[], n: number) {
  let maxSum = 0;
  let tmpSum = 0;
  for (let i = 0; i < n; i++) {
    tmpSum = arr[i] + tmpSum;
    console.log(i);
  }
  for (let i = n; i < arr.length; i++) {
    console.log(arr[i], arr[i - n]);
    console.log(i, i - n, "i and i -n ");
  }
  console.log(tmpSum);
}

sliding_window([1, 2, 4, 1, 2, 4], 2);
