import cities from "./data";

export class Node {
  string: string;
  children: Node[];
  terminus: boolean;
  constructor(string: string) {
    this.string = string;
    this.children = [];
    this.terminus = false;
    if (string.length > 1) {
      this.children.push(new Node(string.substr(1)));
    } else {
      this.terminus = true;
    }
  }
  add(string) {
    const value = string[0];
    const next = string.substr(1);
  }
  complete(string: string) {
    return [];
  }
}

function createTries(words) {
  const root = new Node("");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    root.add(word.toLowerCase());
  }
}
