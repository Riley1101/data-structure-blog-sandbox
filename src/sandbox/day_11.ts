
class Node {
    value : number;
    left : Node | null;
    right : Node | null;
    constructor( value : number ){
        this.value = value
        this.left = null
        this.right= null
    }
}

class Tree {
    root : Node | null;
    constructor(){
        this.root = null         
    }

    push(value : number){
        let newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
            return newNode
        }
        let tmp = this.root
        while(true){
            if(value < tmp.value){
                if(tmp.left === null){
                    tmp.left = newNode
                    return newNode 
                }
                tmp = tmp.left
            }
            else {
                if(tmp.right=== null){
                    tmp.right = newNode
                    return newNode
                }
                tmp = tmp.right
            }
        }
    }
}

let t1 = new Tree()
t1.push(3)
t1.push(1)
t1.push(2)
t1.push(12)
t1.push(10)
t1.push(9)
console.log(t1.root)

const preOrderTraversal = (node : Node, array : number[])=>{
    if(!node) return array;
    array.push(node.value)
    array = preOrderTraversal(node.left, array)
    array = preOrderTraversal(node.right, array)
    return array
}
console.log(preOrderTraversal(t1.root, []))

const inOrderTraversal = (node : Node, array : number[]) =>{
    if(!node) return array
    array = preOrderTraversal(node.left, array)
    array.push(node.value)
    array = preOrderTraversal(node.right, array)
    return array
}
console.log(inOrderTraversal(t1.root, []))

const postOrderTraversal= (node : Node, array : number[]) =>{
    if(!node) return array
    array = preOrderTraversal(node.left, array)
    array.push(node.value)
    array = preOrderTraversal(node.right, array)
    return array
}
console.log(postOrderTraversal(t1.root, []))
export {}
