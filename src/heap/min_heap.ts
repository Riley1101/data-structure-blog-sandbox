export class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length++);
  }

  print(): number[] {
    console.log(this.data.slice(0, this.length));
    return this.data.slice(0, this.length);
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }
    let out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }
    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(idx: number): void {
    let lIdx = this.leftChild(idx);
    let rIdx = this.rightChild(idx);
    if (idx >= this.length || lIdx >= this.length || rIdx >= this.length) {
      return;
    }
    let lValue = this.data[lIdx];
    let rValue = this.data[rIdx];
    let v = this.data[idx];
    if (lValue < rValue && v > lValue) {
      this.data[idx] = lValue;
      this.data[lIdx] = v;
      this.heapifyDown(lIdx);
    } else if (rValue < lValue && v > rValue) {
      this.data[idx] = rValue;
      this.data[rIdx] = v;
      this.heapifyDown(rIdx);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }
    const p = this.parent(idx);
    let pValue = this.data[p];
    const v = this.data[idx];
    if (pValue > v) {
      this.data[idx] = pValue;
      this.data[p] = v;
      this.heapifyUp(p);
    }
  }

  private leftChild(index: number): number {
    return index * 2 + 1;
  }

  private rightChild(index: number): number {
    return index * 2 + 2;
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }
}

let heap = new MinHeap()
heap.insert(5);
heap.insert(3);
heap.insert(69);
heap.insert(420);
heap.insert(4);
heap.insert(1);
heap.insert(8);
heap.insert(7);
console.log(heap.delete())
console.log(heap.delete())
