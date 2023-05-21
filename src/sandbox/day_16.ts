class Stack {
  topIndex: number;
  size: number;
  data: number[];
  constructor() {
    this.topIndex = -1;
    this.size = 4;
    this.data = [];
  }
  private _resize() {
    if (this.topIndex === this.size) {
      this.size = this.size * 2;
    }
  }
  push(value: number) {
    this._resize();
    this.topIndex += 1;
    this.data[this.topIndex] = value;
  }
  peek() {
    return this.data[this.topIndex];
  }
  isEmpty() {
    return this.topIndex === -1;
  }
  pop() {
    if (this.isEmpty()) return null;
    let last = null;
    last = this.data[this.topIndex];
    this.data[this.topIndex] = null;
    this.topIndex -= 1;
    return last;
  }
}

let st = new Stack();
st.push(1);
st.push(3);
st.push(5);
st.push(7);
st.push(9);
st.push(10);
console.log(st.peek());
st.push(13);
st.push(20);
console.log(st);
st.pop();
console.log(st);
console.log(st.peek());
export {};
