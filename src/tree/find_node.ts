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

const findNode = (node:Node,value:number) =>{
    if(node.value === value) return node;
    if(value < node.value){
        if(node.left) {
            return findNode(node.left,value)
        }
    }else {
        if(node.right) {
            return findNode(node.right,value)
        }
    }
}
console.log(findNode(tree.root,1))
export {}
