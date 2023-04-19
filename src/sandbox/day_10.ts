function insertionSort (arr: number[]){
    for(let i =0; i < arr.length; i ++ ){
        let j = i - 1;
        let current = arr[i]
        while((j > 0) && arr[j] > current){
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        arr[j + 1] = current
    }
    console.log(arr)
}

function bubbleSort(arr: number[]){
    let length = arr.length;
    let swapped = false;
    for(let i =0; i < length; i++ ){
       for(let j = 0; j < length - i; j ++ ) {
           if(arr[j] > arr[j + 1]) {
               let tmp = arr[j]
               arr[j] =  arr[j + 1]
               arr[j + 1] = tmp
               swapped = true
           }
       }
       if(!swapped){
           break
       }
    }
}

function merge(left:number[],right: number[]){
    let result = []
    while(left.length && right.length) {
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return result.concat(left,right) 
}
function mergeSort(arr:number[]){
   if(arr.length < 2) return arr ;
   let length = arr.length;
   let mid = Math.floor( length / 2) 
   let leftArr = arr.slice(0,mid)
   let rightArr = arr.slice(mid)
   let sortedLeftArr = mergeSort(leftArr) 
   let sortedRightArr = mergeSort(rightArr) 
   return merge(sortedLeftArr,sortedRightArr)
}

function quickSort(arr:number[]){
    if(arr.length < 2) return arr;
    let length = arr.length;
    let leftArr = []  
    let rightArr = []
    let pivot = arr[length - 1] 
    for(let i = 0 ; i < arr.length - 1; i ++ ){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }else {
            rightArr.push(arr[i])
        }
    }
    let sortedLeftArr = quickSort(leftArr)
    let sortedRightArr = quickSort(rightArr)
    return sortedLeftArr.concat(pivot,sortedRightArr)
}

class Node {
    value : number;
    left : Node | null;
    right : Node | null;
    constructor( value : number){
        this.value = value;
        this.left = null; 
        this.right = null;
    }
}

class WrongTree {
    root : Node | null;
    constructor(){
        this.root = null;
    }
    _traverse(node: Node,value:number){
        let newNode = new Node(value)
        if(value < node.value){
            if(node.left === null){
                node.left = newNode
                return newNode
            }
            return this._traverse(node.left, value)
        }else {
            if(node.right === null){
                node.right = newNode
                return newNode
            }
            return this._traverse(node.right, value)
        }

    }
    push(value : number){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode
        }
        else {
            let tmp = this.root
            return this._traverse(tmp, value)
        }    
    }
}

let tree = new WrongTree();
tree.push(1)
tree.push(3)
tree.push(6)
tree.push(4)
tree.push(12)
tree.push(2)
console.log(tree.root)

export {}
