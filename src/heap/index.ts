export class MinHeap {
  public length: number;
  private data: number[];
  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }
  delete(): number {
    if (this.length === 0) return -1;
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

  private heapifyUp(idx: number) {
    if (idx == 0) return;
    const parent = this.parent(idx);
    const parentV = this.data[parent];
    const current = this.data[idx];
    if (parentV > current) {
      this.data[idx] = parentV;
      this.data[parent] = current;
      this.heapifyUp(parent);
    }
  }

  private heapifyDown(idx: number) {
    if (idx >= this.length) {
      return;
    }
    const leftIndex = this.leftChild(idx);
    const rightIndex = this.rightChild(idx);
    if (leftIndex >= this.length || rightIndex >= this.length) {
      return;
    }
    let leftValue = this.data[leftIndex];
    let rightValue = this.data[rightIndex];
    let value = this.data[idx];
    if (leftValue > rightValue && value > rightValue) {
      this.data[idx] = rightValue;
      this.data[rightIndex] = value;
      this.heapifyDown(rightIndex);
    } else if (rightValue > leftValue && value > leftValue) {
      this.data[idx] = leftValue;
      this.data[leftIndex] = value;
      this.heapifyDown(leftIndex);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }
  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }
  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }
}

let heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(69);
heap.insert(420);
heap.insert(4);
heap.insert(1);
heap.insert(8);
heap.insert(7);
console.log(heap);
