class Node{
    data : number;
    left : Node | null;
    right : Node | null;
    parent : Node | null;
    constructor(value : number){
        this.data = value
        this.left = null
        this.right = null
    }
}
class Tree{
    root : Node | null;
    constructor(){
        this.root = null;
    }
    push(value : number){
       let newNode = new Node(value) 
       if(this.root === null){
           this.root = newNode;
           return newNode
       }
       let tmp = this.root;
       while(true){
            if(value > tmp.data){
                // go right
                if(tmp.right === null){
                    newNode.parent = tmp
                    tmp.right = newNode
                    break
                }else {
                    tmp = tmp.right 
                }
            }else{
                // go left
                if(tmp.left === null){
                    newNode.parent = tmp
                    tmp.left = newNode
                    break
                }else {
                    tmp= tmp.left 
                }
            }
       }
    }
}

let t = new Tree()
t.push(2)
t.push(4)
t.push(1)
t.push(12)
t.push(0)
t.push(9)
console.log(t.root)
export {}
