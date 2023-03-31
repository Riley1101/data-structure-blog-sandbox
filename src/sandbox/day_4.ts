function insertionSort(){
    let arr = [5, 4, 3, 2, 1];
    for(let i = 0 ; i < arr.length; i ++ ){
        let j = i -1 ;
        let current = arr[i]
        while((j > -1) && (arr[j] > current)){
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = current
    }
}

insertionSort()

export {}
