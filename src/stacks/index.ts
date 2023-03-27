class Stack {
  size: number;
  topIndex: number;
  data: string[];
  constructor() {
    this.size = 0;
    this.topIndex = -1;
    this.data = [];
  }
  private _resize() {
    if (this.topIndex === this.size - 1) {
      this.size = (this.size + 1) * 2;
    }
  }
  push(value: string) {
    this._resize();
    this.topIndex = this.topIndex + 1;
    this.data[this.topIndex] = value;
  }
  pop() {
    let last = null;
    if (this.topIndex > -1) {
      last = this.data[this.topIndex];
      this.data[this.topIndex] = null;
      this.topIndex -= 1;
      return last;
    } else {
      console.warn("Stack is empty");
      return null;
    }
  }
}

let animalStacks = new Stack();
animalStacks.push("Elephant");
animalStacks.push("Cow");
animalStacks.push("Pig");
animalStacks.push("Dog");
animalStacks.push("Cat");
animalStacks.push("Mouse");
animalStacks.push("Ant");
animalStacks.pop();

animalStacks.push("Ant");
console.log(animalStacks);
