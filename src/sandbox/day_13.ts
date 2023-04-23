function insertionSort(arr: number[]){
    for(let i = 0; i < arr.length; i ++ ){
        let j = i -1;
        let current = arr[i]
        while((j >-1) &&  arr[j] > current){
            arr[j + 1] = arr[j]
            j = j - 1 
        }
        arr[j + 1] = current
    }
}

function bubbleSort(arr: number[]){
   let swapped = false;
   for(let i =0; i < arr.length; i ++) {
       for(let j = 0 ; j < arr.length - 1 - i ; j++){
           if(arr[j] > arr[j + 1]){
               let tmp = arr[j]
               arr[j] = arr[j + 1]
               arr[j + 1] = tmp
               swapped = true 
           }
       }
       if(!swapped){
           return arr
       }
   }
}

function merge(left : number[],right:number[]){
    let res = []
    while(left.length && right.length){
        if(left[0] < right[0]) {
            res.push(left.shift())
        }else{
            res.push(right.shift())
        }
    }
    return res.concat(left,right)
}

function mergeSort(arr:number[]){
    if(arr.length < 2) return arr
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    let sortedLeft = mergeSort(leftArr)
    let sortedRight = mergeSort(rightArr)
    return merge(sortedLeft,sortedRight)
}

function quickSort(arr:number[]){
    if(arr.length < 2) return arr
    let length = arr.length
    let pivot = arr[length - 1]
    let leftArr = []
    let rightArr = []
    for(let i = 0; i < length - 1; i ++ ){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }else {
            rightArr.push(arr[i])
        }
    }
    let sortedLeft = quickSort(leftArr)
    let sortedRight = quickSort(rightArr)
    return sortedLeft.concat(pivot,sortedRight)
}

class Node{
    value : number;
    next : Node | null
    prev : Node | null
    constructor( value : number){
        this.value = value;
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    head : Node | null
    constructor(){
        this.head = null
    }
    push( value : number){
        let newNode = new Node(value)
        if(this.head=== null){
            this.head = newNode
            return newNode
        }
        let tmp = this.head 
        let prev = null
        while(tmp){
            prev = tmp
            tmp = tmp.next
        }
        newNode.prev = prev
        prev.next = newNode
        return newNode
    }
    addfront( value : number){
        let newNode = new Node(value)
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
    }
}

let list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.addfront(0)

class Leaf {
    value : number 
    left : Leaf | null
    right : Leaf | null
    constructor(value : number){
        this.value = value
        this.left = null;
        this.right = null
    }
}

class Tree{
    root : Leaf
    constructor(){
        this.root = null
    }
    push(value : number){
        let newLeaf = new Leaf(value)
        if(this.root === null){
            this.root = newLeaf
            return newLeaf;
        }
        let tmp = this.root
        while(true){
           if(value < tmp.value) {
               // go left
               if(tmp.left === null) {
                   tmp.left = newLeaf 
                   return newLeaf
               }
               tmp = tmp.left
           }else{
               // go right
               if(tmp.right === null){
                   tmp.right = newLeaf
                   return newLeaf
               }
               tmp = tmp.right
           }
        }
    }
}

let tree = new Tree()
tree.push(1)
tree.push(6)
tree.push(2)
tree.push(3)
tree.push(4)
tree.push(8)
tree.push(7)

const preOrderTraversal = (node : Leaf,arr: number[]) =>{
    if(!node) return arr;
    arr.push(node.value)
    arr = preOrderTraversal(node.left,arr)
    arr = preOrderTraversal(node.right,arr)
    return arr
}
console.log(preOrderTraversal(tree.root,[]))

const inOrderTraversal= (node : Leaf,arr: number[]) =>{
    if(!node) return arr;
    arr = inOrderTraversal(node.left,arr)
    arr.push(node.value)
    arr = inOrderTraversal(node.right,arr)
    return arr
}
console.log(inOrderTraversal(tree.root,[]))

const postOrderTraversal= (node : Leaf,arr: number[]) =>{
    if(!node) return arr;
    arr = postOrderTraversal(node.left,arr)
    arr = postOrderTraversal(node.right,arr)
    arr.push(node.value)
    return arr
}
console.log(postOrderTraversal(tree.root,[]))

export {}

