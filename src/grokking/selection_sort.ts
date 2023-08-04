export function selection_sort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[min] !== arr[i]) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

export function selection_sort_2(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[min] !== arr[i]) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

export function selection_sort_3(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[j]<arr[min]){
            min = j
        }
    }
    if(arr[min]!==arr[i]){
        [arr[min],arr[i]] = [arr[i], arr[min]]
    }
  }
  return arr
}

let arr = selection_sort_3([1, 3, 2, 4, 1, 5, 2]);
console.log(arr)
