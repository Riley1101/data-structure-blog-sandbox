function insertionSort(){
    const arr : number[] = [1,4,2,45,3,2];
    for(let i=0; i < arr.length; i ++  ){
        let j = i - 1;
        let current = arr[i];
        while((j > 0) && (arr[j] > current)){
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        arr[j + 1] = current 
    }
    console.log(arr)
}

function bubbleSort(){
    const arr : number[] = [1,4,2,45,3,2];
    let length = arr.length - 1;
    let swapped =false; 
    for(let i =0 ; i < length ; i ++ ){
        for(let j = 0; j < length - i; j ++){
            if(arr[j] > arr[j + 1]){
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+ 1] = tmp
                swapped = true 
            }
        }
        if(!swapped){
            break
        }
    }
}

function merge(left : number[],right:number[]){
    let result = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            result.push(right.shift())
        }
        else {
            result.push(left.shift())
        }
    }
    return result.concat(left,right)
}
function mergeSort( arr: number[]){
    if(arr.length < 2) return arr;
    let length = arr.length;
    let mid = Math.floor(length / 2) 
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    let sortedLeft = mergeSort(leftArr)
    let sortedRight = mergeSort(rightArr)
    return merge(sortedLeft,sortedRight)
}

function quickSort(arr:number[]){
    if(arr.length < 2) return arr
    let length = arr.length;
    let pivot = arr[length - 1]
    let left = []
    let right = []
    for(let i =0; i < arr.length - 1; i ++ ){
        if(arr[i] > pivot ){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    let sortedleft = quickSort(left)
    let sortedRight = quickSort(right)
    return sortedleft.concat(pivot,sortedRight)
}

class Node {
    value :number
    left : Node | null
    right : Node | null
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null 
    }
}

class Tree{
    root : Node | null
    constructor(){
        this.root = null
    }
    push(value :number) {
        let newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
            return newNode
        }
        let tmp = this.root
        while(true){
            if(value > tmp.value){
               if(tmp.right === null){
                    tmp.right = newNode 
                    return newNode
               }
               tmp = tmp.right
            }else{
               if(tmp.left=== null){
                    tmp.left= newNode 
                    return newNode
               }
                tmp = tmp.left
            }
        }
    }
}
let t1 = new Tree()
t1.push(1)
t1.push(4)
t1.push(2)
t1.push(8)
t1.push(5)
console.log(t1.root)
export {}
