function radixSort(arr) {
  const maxNum = Math.max(...arr);
  const maxDigitCount = Math.floor(Math.log10(maxNum)) + 1;

  let buckets = new Array(10).fill([], 0, 10);

  for (let digit = 0; digit < maxDigitCount; digit++) {
    for (let i = 0; i < arr.length; i++) {
      const digitValue = Math.floor(arr[i] / Math.pow(10, digit)) % 10;
      buckets[digitValue].push(arr[i]);
    }

    arr = [].concat(...buckets);

    buckets = new Array(10).fill([], 0, 10);
  }

  return arr;
}
console.log(radixSort([111, 3321, 321, 3, 432, 466, 655]));
