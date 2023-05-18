class ArrayList {
  length: number;
  data: any;
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const item = this.data[index];
    this._collapseTo(index);
    return item;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

let al = new ArrayList();
al.push(1);
al.push(2);
al.push(3);
al.push(4);
al.push(7);

console.log(al);
al.pop();

console.log(al);

