
class Node {
    value : number;
    left : Node | null;
    right : Node | null;
    constructor(value:number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    root : Node;
    constructor(){
        this.root = null;
    }
    push(value : number) {
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode 
            return newNode
        }
        let tmp = this.root
        while(true){
            if(value <  tmp.value){
                if(!tmp.left)  {
                    tmp.left = newNode
                    return newNode
                }else{
                    tmp = tmp.left
                }
            }else{
                if(!tmp.right)  {
                    tmp.right= newNode
                    return newNode
                }else{
                    tmp = tmp.right
                }
            }
        }
    }
}

const t1 = new Tree()
t1.push(8)
t1.push(3)
t1.push(10)
t1.push(1)
t1.push(6)
t1.push(15)

console.log(t1.root)

function breadthFirstTraversals( queue: Node[], arr: number[]){
    if(!queue.length) return arr;
    let node = queue.shift()
    arr.push(node.value)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
    return breadthFirstTraversals(queue,arr)
}
console.log(breadthFirstTraversals([t1.root], []))

function breadthFirstTraversals2( queue: Node[], arr: number[]){
    while(queue.length){
        const node = queue.shift()
        arr.push(node.value)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return arr
}
console.log(breadthFirstTraversals2([t1.root], []))

export {}
