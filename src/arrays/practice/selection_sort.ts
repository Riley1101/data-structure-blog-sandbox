function selection_sort(arr: number[]) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

function selection_sort_2(arr:number[]){
    let length = arr.length;
    for(let i= 0 ; i < length ; i ++ ){
        let min = i  
        for(let j = i  +  1; j < length ; j ++ ){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min != i ){
            [arr[i], arr[min]] = [arr[min], arr[i]] 
        }
    }
    return arr
}
console.log(selection_sort_2([1,3,2,5,1,7,2]))
