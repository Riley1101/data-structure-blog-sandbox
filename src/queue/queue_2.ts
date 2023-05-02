class Node {
    value : number;
    next : Node | null;
    constructor(value:number){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    head:Node | null;
    tail : Node | null;
    constructor(){
        this.head = null;
        this.tail = null;
    }
    queue(value:number){
        let newNode = new Node(value); 
        if(this.head=== null){
           this.head = newNode 
           this.tail = newNode
           return newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        return newNode
    }
    dequeue(){
        let tmp = this.head;
        this.head = this.head.next
        tmp.next = null
        return tmp
    }
}

const q1 = new Queue()
q1.queue(1)
q1.queue(2)
q1.queue(3)
q1.queue(4)
q1.queue(5)
q1.queue(6)
console.log(q1.dequeue())
console.log(q1)

export {}
