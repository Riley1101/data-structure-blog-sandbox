function insertion_sort(array: number[]) {
  let total = array.length;
  for (let i = 0; i < total; i++) {
    let j = i - 1;
    let current = array[i];
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = current;
  }
  console.log(array);
}

function binary_search(arr: number[], value: number) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
        console.log(arr[mid])
        return mid;
    }
    else if (value > arr[mid]) {
        start = mid + 1
    }else if(value < arr[mid]){
        end = mid - 1
    }
  }
}
binary_search([1, 2, 5, 7, 8, 12,15, ], 8);

