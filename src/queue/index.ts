class Node {
  value: string;
  next: Node | null;
  prev: Node | null;
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class Queue {
  head: Node | null;
  tail : Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length += 1;
      this.tail = newNode
      return newNode;
    }else{
        this.tail = newNode
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length +=1;
    }
  }
  dequeue(){
      console.log(this.tail)
  }
  getValues(){
      let current = this.head;
      for(let i =0; i < this.length;i ++ ){
         current = current.next 
      }
  }
}

let q1 = new Queue()
q1.enqueue("Hello")
q1.enqueue("world")
q1.enqueue("I")
q1.enqueue("Live")
q1.enqueue("In")
q1.enqueue("World")
q1.dequeue()
q1.getValues()


export {};
