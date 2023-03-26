function bubbleSort(arr: number[]) {
  let total = arr.length - 1;
  for (let i = 0; i < total - 1; i++) {
    let current = 0;
    while (current <= total) {
      if (arr[current] > arr[current + 1]) {
        let tmp = arr[current + 1];
        arr[current + 1] = arr[current];
        arr[current] = tmp;
      }
      current += 1;
    }
  }
  console.log(arr);
}

function bubbleSort_2(arr: number[]) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let tmp = arr[j + 1];
      if (tmp < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  console.log(arr);
}

function bubbleSort_3(arr: number[]) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      let tmp = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
}

function bubbleSort_4(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

function bubbleSort_5(arr: number[]) {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.log(arr);
}

function bubbleSort_6(arr: number[]) {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.log(arr);
}

function bubbleSort_7(arr: number[]) {
    let swapped = false;
    for(let i = 0; i < arr.length; i ++ ){
        for(let j = 0; j< arr.length - i;j++){
            if(arr[j] > arr[j + 1]){
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[i] = tmp
                swapped = true
            }
        }
        if(!swapped){
            break
        }
    }
    console.log(arr)
}

bubbleSort_7([1, 3, 2, 5, 4, 8, 7]);

export {};
