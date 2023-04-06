class Stack {
    data: number[];
    size : number;
    length : number;
    constructor(){
        this.data = [] 
        this.size = 0 ;
        this.length = -1;
    }
    private _resize(){
        if(this.length === this.size){
            this.size = (this.size  + 1 ) * 2  
        }
    }
    push(value : number){
       this._resize() 
       this.length += 1
       this.data[this.length] = value
    }
    pop (){
        this.data[this.length] = null;
        this.length -=1
    }
}

class Node {
    value : string;
    next : Node | null
    prev : Node | null;
    constructor(value){
        this.value = value
        this.next = null;
        this.prev = null
    }
}

class Queue{
    head : Node | null
    length : number
    constructor(){
        this.length = 0;
        this.head = null
    }
    queue( value :string){
        let newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            this.length+=1;
        }
        else {
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
            newNode.prev = current
            this.length +=1
        }
    }
    dequeue(){
        if(this.length === 0){
            return null;
        }
        this.head = this.head.next
        this.length -=1;
    }
}

let q1 = new Queue()
q1.queue("hello")
q1.queue("hi")
q1.queue("bad")
q1.queue("arkar")
q1.dequeue()
console.log(q1)

export {}
