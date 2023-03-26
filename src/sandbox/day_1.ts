function insertionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  return arr;
}
insertionSort([1, 5, 2, 4, 3, 7, 8]);

function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
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
  return arr
}

bubbleSort([1, 5, 2, 4, 3, 7, 8]);

function binarySearch(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === target){
        console.log(arr[mid])
        return arr[mid]
    }
    if(target  > arr[mid]) {
        start = mid + 1
    }
    else {
        end = mid - 1
    }
  }
}
binarySearch(bubbleSort([12,3,7,1,2,7,3,2,8]),8)

class Node {
    value : string
    next : Node;
    constructor(value :string){
       this.value = value; 
       this.next = null;
    }
}

class LinkedList{
    head : Node;
    length : number
    constructor(){
        this.head = null
        this.length =0
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.length++;
        }
        else {
           let current = this.head 
           while(current.next){
               current = current.next
           }
           current.next = newNode
           this.length++
        }
    }
    find(value){
        let current = this.head;
        while(current.next ){
            if(current.value === value){
                return current
            }
            current = current.next
        }
    }

}

let list = new LinkedList()
list.push("Hello")
list.push("World")
list.push("I")
list.push("Live")
list.push("In")
list.push("World")
list.find("Live")


export {};
