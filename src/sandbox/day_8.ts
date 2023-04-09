class Node  {
    value : number;
    left : Node | null;
    right : Node | null;
    constructor(value : number){
        this.value = value;
        this.right = null
        this.left = null
    }
}

class Tree {
    root : Node | null;
    constructor(){
        this.root = null;
    }
    push (value : number) {
        let newNode = new Node(value)
        if(this.root == null ){
            this.root = newNode;
            return newNode;
        }
        let tmp = this.root 
        while(true){
            if(value > this.root.value){
                if(tmp.right === null){
                   tmp.right = newNode 
                   return newNode
                }
                tmp = tmp.right
            }else{
                if(tmp.left === null){
                   tmp.left= newNode 
                   return newNode
                }
                tmp = tmp.left
            }
        }
    }
}
let t1 = new Tree()
t1.push(3)
t1.push(1)
t1.push(4)
t1.push(2)
t1.push(5)
t1.push(11)
export {}
