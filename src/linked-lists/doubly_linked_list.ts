class Node {
  next: Node | null;
  prev: Node | null;
  value: string;
  constructor(value: string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublelyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getValues(){
      let current = this.head;
      for(let i =0; i < this.length; i ++ ){
          console.log(current.value)
          current = current.next
      }
  }
  getValues_Rev(){
      let current = this.tail;
      for(let i = 0; i < this.length; i ++ ){
          console.log(current.value)
          current = current.prev
      }
  }
  push(value){
    let newNode = new Node(value);
    if(this.length ===0){
        this.head = newNode 
        this.tail = newNode
    }else {
        newNode.prev = this.tail
        this.tail.next = newNode 
        this.tail = newNode 
    }
    this.length +=1;
  }
}

let node = new DoublelyLinkedList();
node.push("I")
node.push("Live")
node.push("In")
node.push("The")
node.push("World")
node.getValues();
node.getValues_Rev();
console.log(node.tail)
export { Node };
