function insertionSort(arr: number[]) {
    for(let i = 0 ; i < arr.length; i ++ ){
        let current = arr[i];
        let j = i - 1;
        while((j > - 1) && arr[j] > current){
            arr[j + 1]  = arr[j]
            j = j - 1
        }
        arr[j + 1 ] = current;
    }
    console.log(arr);
}

function insertionSort_2(arr:number[]){
    for(let i = 0 ; i < arr.length; i ++ ){
        let current = arr[i]
        let j = i - 1
        while((j > - 1) && arr[j] > current){
            arr[j  + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = current 
    }
    console.log(arr)
}
insertionSort_2([1, 3, 2, 6, 4, 7, 1]);
