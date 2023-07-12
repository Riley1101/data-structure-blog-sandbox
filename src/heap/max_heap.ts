export class MaxHeap {
  public length: number;
  data: number[];

  constructor() {
    this.data = [];
    this.length = 0
  }

  delete() {
    if (this.length === 0) {
      return -1
    }
    let out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }
    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
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
    if (lValue > rValue && v < lValue) {
      this.data[idx] = lValue;
      this.data[lIdx] = v;
      this.heapifyDown(lIdx);
    } else if (rValue > lValue && v < rValue) {
      this.data[idx] = rValue;
      this.data[rIdx] = v;
      this.heapifyDown(rIdx);
    }
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length++);
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }
    const pIdx = this.parent(idx)
    let pValue = this.data[pIdx];
    let v = this.data[idx];
    if (pValue < v) {
      this.data[idx] = pValue;
      this.data[pIdx] = v;
      this.heapifyUp(pIdx);
    }
  }

  private parent(idx: number) { return Math.floor((idx - 1) / 2) }
  private leftChild(idx: number) { return 2 * idx + 1 }
  private rightChild(idx: number) { return 2 * idx + 2 }
}

let heap = new MaxHeap();
heap.insert(1);
heap.insert(2);
heap.insert(6);
heap.insert(12);
heap.insert(11);
heap.delete()
console.log(heap.data);
