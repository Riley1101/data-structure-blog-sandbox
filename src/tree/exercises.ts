class Node {
  value?: number;
  left?: Node;

  right?: Node;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root?: Node;
  constructor() {
    this.root = null;
  }
  push(value: number) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    let tmp = this.root;
    while (true) {
      if (value < tmp.value) {
        if (!tmp.left) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      } else {
        if (!tmp.right) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      }
    }
  }
}

let t2= new Tree()
t2.push(6)
t2.push(3)
t2.push(4)
t2.push(5)
t2.push(12)
t2.push(9)

let t1 = new Tree()
t1.push(6)
t1.push(3)
t1.push(4)
t1.push(5)
t1.push(10)
t1.push(9)

function compare(a : Node, b : Node) : boolean{
    if(a === null && b === null){
        return true
    }
    if(a === null || b === null){
        return false
    }
    if(a.value !== b.value){
        return false
    }
    return compare(a.left,b.left) && compare(a.right,b.right)
}


function compareBinaryTree (a : Node, b : Node) {
    if(a === null && b === null){
        return true  
    }
    if(a === null || b === null){
        return false
    }
    if(a.value !== b.value){
        return false
    }
    return compare(a.left, b.left) && compare(a.right,b.right)
}

export {};
