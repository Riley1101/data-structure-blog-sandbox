function insertion_sort_practice(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function insertion_sort_practice_2(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > current) {
      console.log(j + 1);
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function insertion_sort_practice_3(arr: number[]) {
  let total = arr.length;
  for (let i = 0; i < total; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j];
      }
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function insertion_sort_practice_4(arr: number[]) {
  let total = arr.length;
  for (let i = 0; i < total; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // move the i to the next place
    arr[j + 1] = current;
  }
  console.log(arr);
}

function insertion_sort_practice_5(arr: number[]) {
  console.log(arr);
  let total = arr.length;
  for (let i = 0; i < total; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
    console.log(arr[i], arr[j]);
  }
}

function insertion_sort_practice_6(arr: number[]) {
  let total = arr.length;
  for (let i = 0; i < total; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function insertion_sort_practice_7(arr: number[]) {
  let total = arr.length;
  for (let i = 0; i < total; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function insertion_sort_practice_8(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
  return arr;
}

function binary_search_practice_1(arr: number[], target : number) {
  arr = insertion_sort_practice_8(arr);
  console.log("did i work")
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(target === arr[mid]){
        return arr[mid]
    }
    if(target > arr[mid]){
        start = mid + 1
    }else{
        end = mid - 1
    }
  }
}
binary_search_practice_1([2, 45, 1, 3, 4, 1, 3], 4);
