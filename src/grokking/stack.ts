export class Stack {
  top: number;
  size: number;
  data: number[];
  constructor() {
    this.size = 4;
    this.top = 0;
    this.data = [];
  }

  private check_size() {
    if (this.top >= this.size) {
      this.size = this.size + this.top * 2;
    }
  }
  push(ele: number) {
    this.check_size();
    this.data[this.top++] = ele;
    return ele;
  }
  pop() {
    console.log(this.top);
    let cp = this.data[this.top - 1];
    this.data[this.top -1 ] = null;
    this.top--;
    return cp;
  }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(5);

console.log(s.pop());
s.push(9);
console.log(s.data);
