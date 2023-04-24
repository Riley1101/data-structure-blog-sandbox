class Node {
    value : number
    left : Node | null
    right: Node | null
    constructor(value : number) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class Tree{
    root : Node | null
    constructor(){
        this.root = null;
    }
    push(value:number){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return newNode
        }
        let tmp = this.root
        while(true){
           if(value < tmp.value) {
                if(tmp.left === null){
                    tmp.left = newNode
                    return newNode
                }
                tmp = tmp.left
           }else {
                if(tmp.right=== null){
                    tmp.right= newNode
                    return newNode
                }
                tmp = tmp.right
           }
        }
    }
}
let tree = new Tree()
tree.push(12)
tree.push(3)
tree.push(5)
tree.push(7)
tree.push(1)
tree.push(8)
tree.push(9)
tree.push(10)

const arr = [5, 3, 2, 10, 1, 9, 8, 6, 4, 7]

const heapSort = (array : number[])=>{
   array = createMaxHeap(array)
   for(let i = array.length - 1; i > 0 ; i --){
        swapPlace(0,i,array)       
        heapify(array,0,i)
   }
   return array  
}

const createMaxHeap = (array : number[])=>{
    for(let i = Math.floor(array.length / 2 ) - 1; i >=0; i --){
       heapify(array,i,array.length) 
    }
    return array
}

const swapPlace = (index1 : number,index2 : number,array:number[])=>{
    let tmp = array[index1]
    array[index1] = array[index2]
    array[index2] = tmp
    return array
}

const heapify = (array:number[],index:number,heapSize:number)=>{
   let left = 2 * index + 1 
   let right = 2 * index + 2
   let largestValueIndex = index 
   if(heapSize > left && array[largestValueIndex]< array[left]){
       largestValueIndex = left
   }
   if(heapSize > right&& array[largestValueIndex]< array[right]){
       largestValueIndex = right 
   }
   if(largestValueIndex !== index){
       swapPlace(index,largestValueIndex,array)
       heapify(array,largestValueIndex,heapSize)
   }
}
console.log(heapSort(arr))
export {}
