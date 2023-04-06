function insertionSort(arr:number[]){
   for(let i = 0; i < arr.length; i ++  ){
       let j = i - 1;
       let current = arr[i]
       while((j > -1) && arr[j] > current) {
           arr[j + 1] = arr[j]
           j = j - 1
       }
       arr[j + 1] = current
   }
   console.log(arr)
}

function bubbleSort(arr:number[]){
    let swapped = false
    for(let i =0; i < arr.length; i ++ ){
        for(let j = 0; j < arr.length - i ; j++ ){
            if(arr[j] > arr[j + 1]){
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = arr[j]
                swapped = true
            }
        }
        if(!swapped){
            break;
        }
    }
}
function merge(left,right){
    let result = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            result.push(right.shift())
        }else{
            result.push(left.shift())
        }
    }
    return result.concat(left,right)
}

function mergeSort(arr:number[]){
    if(arr.length < 2) return arr;
    let length = arr.length;
    let mid = Math.floor(length / 2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    let sortedLeft = mergeSort(leftArr)
    let sortedRight= mergeSort(rightArr)

    return merge(sortedLeft,sortedRight)
}

function quickSort(arr : number[]){
    if(arr.length < 2) return arr
    let length = arr.length;
    let pivot = arr[length - 1]
    console.log(pivot)
    let leftArr =[]
    let rightArr =[]
    for(let i = 0; i < length - 1; i ++ ){
        if(arr[i] <  pivot) {
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    let sortedLeft = quickSort(leftArr)
    let sortedRight= quickSort(rightArr)
    return sortedLeft.concat(pivot, sortedRight)
}

class Node {
    value : number;
    next : Node | null;
    constructor(value : number){
        this.value = value
        this.next = null;
    }
}
class LinkedList{
    head : Node | null
    length : number
    constructor(){
        this.head = null
        this.length = 0;
    }
    push(value : number){
        let newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            this.length += 1;
            return newNode
        }
        let current = this.head   
        while(current.next){
            current = current.next
        }
        current.next = newNode
        this.length +=1
        return newNode
    }
    pushFront(value : number){
        let newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            this.length += 1;
            return newNode
        }
        newNode.next = this.head
        this.head = newNode
        return newNode;
    }
}

let list1 = new LinkedList()
list1.push(1)
list1.push(2)
list1.push(3)
list1.push(4)
list1.pushFront(5)
export {}
