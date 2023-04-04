// eslint-disable-next-line
interface Node {
  value: number;
  left: Node;
  right: Node;
}
class Node {
  value: number;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  data: Node | null;
  constructor() {
    this.data = null;
  }
  push(value: number) {
    let newNode = new Node(value);
    if (this.data === null) {
      this.data = newNode;
    } else {
      let current = this.data;
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return current;
        }
        let tmp = current.right;
        while (tmp.right) {
          tmp = current.right;
        }
        if (tmp.value > value) {
          tmp.right = newNode;
        } else {
          tmp.left = newNode;
        }
      } else if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return current;
        }
        let tmp = current.left;
        while (tmp.left) {
          tmp = tmp.left;
        }
        if (tmp.value > value) {
          tmp.left = newNode;
        } else {
          tmp.right = newNode;
        }
      }
    }
    console.log(value);
  }
  pushAt(value: number) {
    let newNode = new Node(value);
    if (this.data === null) {
      this.data = newNode;
      return newNode;
    }
    if (value > this.data.value) {
      let tmp = this.data.right;
      let prev = null;
      if (!tmp) {
        this.data.right = newNode;
        return newNode;
      }
      while (tmp) {
        prev = tmp;
        if (value > tmp.value) {
          tmp = tmp.right;
        } else {
          tmp = tmp.left;
        }
      }
      if (value > prev.value) {
        prev.right = newNode;
        return newNode;
      } else {
        prev.left = newNode;
        return newNode;
      }
    } else {
      let tmp = this.data.left;
      let prev = null;
      if (!tmp) {
        this.data.left = newNode;
        return newNode;
      }
      while (tmp) {
        prev = tmp;
        if (value > tmp.value) {
          tmp = tmp.right;
        } else {
          tmp = tmp.left;
        }
      }
      if (value > prev) {
        prev.right = newNode;
      } else {
        prev.left = newNode;
      }
    }
  }
}

let t = new Tree();
t.pushAt(1);
t.pushAt(5);
t.pushAt(2);
t.pushAt(7);
t.pushAt(3);
t.pushAt(12);
export {};
