class Node {
    
    value: number;
    left : Node | null;
    right : Node | null;
    height : number; 
    constructor(value:number){
        this.value = value 
        this.left = null
        this.right = null
        this.height = 1
    }
    add(value: number){
        // decide to go left or right 
        // go left
        if(value < this.value){
            if(this.left){
                this.left.add(value)
            }
            else {
                this.left = new Node(value)
            }
            if(!this.right || this.right.height < this.left.height){
                this.height = this.left.height + 1
            }
        }else {
            // go right 
            if(this.right){
                this.right.add(value)
            }
            else{
                this.right = new Node(value)
            }
            if(!this.left || this.left.height < this.right.height){
                this.height = this.right.height + 1
            }
        }

        // find the correct place to add
        this.balance()
    }
    balance(){
        // check if node out of balance
        const righHeight = this.right ? this.right.height : 0
        const leftHeight = this.left ? this.left.height : 0
        if(leftHeight > righHeight  + 1){
            const leftRightHeight = this.left.right ? this.left.right.height : 0
            const leftLeftHeight = this.left.left ? this.left.left.height : 0
            // single rotation
            if(leftRightHeight > leftLeftHeight){
                this.left.rotateRR()
            }
            this.rotateLL()
        }  
        else if(righHeight  > leftHeight + 1){
            const rightRightHeight = this.right.right ? this.right.right.height : 0
            const rightLeftHeight = this.right.left ? this.right.left.height : 0;
            // double rotation
            if(rightLeftHeight > rightRightHeight){
                this.right.rotateLL()
            }
            this.rotateRR()
        }
        // if not do nothing

        // if do something
        
        // check if single or double

        // if single rotate on self

        // if double rotate on child then self
    }

    rotateRR(){
        const valueBefore = this.value;
        const leftBefore = this.left
        this.value = this.right.value
        this.left = this.right;
        this.right = this.right.right
        this.left.right = this.left.left
        this.left.left = leftBefore
        this.left.value = valueBefore;
        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }

    rotateLL(){
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore
        this.right.value = valueBefore; 
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }

    updateInNewLocation(){
        // calculate new height
        if(!this.right && !this.left) {
            this.height = 1;
        }
        else if(
            !this.right || 
            (this.left && this.right.height < this.left.height)){
                this.height = this.left.height + 1
            }
            else{
                this.height = this.right.height + 1
            }
    }
}

class AVLTree {
    root : Node | null
    constructor(){
        this.root = null
    }
    push(value : number){
        if(!this.root){
            this.root = new Node(value)
        }else {
            this.root.add(value)
        }
    }
    toObject(){
        return this.root
    }
}

let t1 = new AVLTree();
t1.push(1)
t1.push(2)
t1.push(3)
t1.push(4)
t1.push(5)
console.log(t1.root)
export {}
