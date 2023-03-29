function quickSort(arr: number[]) {
  // base case
  if (arr.length < 2) return arr;
  let leftArr = [];
  let rightArr = [];
  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  let sortedLeftArr = quickSort(leftArr)
  let sortedRightArr = quickSort(rightArr)
  
  return sortedLeftArr.concat(pivot,sortedRightArr);
}

let res = quickSort([1,3,2,6,4,12,4])
console.log(res)


