class Node {
    value : number;
    left : Node | null;
    right : Node |  null;
    constructor(value: number){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class Tree{
    root : Node
    constructor(){
        this.root = null;
    }

    push(value : number){
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return newNode; 
        }
        let tmp = this.root
        while(true) {
            if(value < tmp.value){
                if(tmp.left === null){
                    tmp.left = newNode 
                    return newNode 
                }
                tmp = tmp.left
            }else{
                if(tmp.right=== null){
                    tmp.right= newNode 
                    return newNode 
                }
                tmp = tmp.right
            }
        }
    }
}

let tr = new Tree()
tr.push(1)
tr.push(3)
tr.push(2)
tr.push(4)
tr.push(6)
tr.push(5)

const preOrderTraveral = (node : Node, arr : number[])=>{
    if(!node) return arr;
    arr.push(node.value)
    arr = preOrderTraveral(node.left,arr)
    arr = preOrderTraveral(node.right,arr)
    return arr
}

const inOrderTraversal= (node : Node, arr : number[])=>{
    if(!node) return arr;
    arr = inOrderTraversal(node.left,arr)
    arr = inOrderTraversal(node.right,arr)
    arr.push(node.value)
    return arr
}

const postOrder= (node : Node, arr : number[])=>{
    if(!node) return arr;
    arr = postOrder(node.left,arr)
    arr = postOrder(node.right,arr)
    arr.push(node.value)
    return arr
}

export {}
