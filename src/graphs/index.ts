import { getUser } from "./data";

class Node {
  value: number;
  left: Node | null;
  right: Node | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  root: Node | null;
  constructor() {
    this.root = null;
  }
  push(value: number) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return newNode;
    }
    let tmp = this.root;
    while (true) {
      if (value < tmp.value) {
        if (tmp.left === null) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      } else {
        if (tmp.right === null) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      }
    }
  }
}

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  let queue = [myId];
  const seen = new Set(queue);
  const jobs = {};
  for (let i = 0; i <= degreesOfSeparation; i++) {
    const newQueue = [];
    while (queue.length) {
      const user = getUser(queue.shift());
      for (let j = 0; j < user.connections.length; j++) {
        const connections = user.connections[j];
        if (!seen.has(connections)) {
          newQueue.push(connections);
          seen.add(connections);
        }
      }
      jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
    }
    queue = newQueue;
  }
  const jobKeys = Object.keys(jobs);
  let biggestNumber = jobs[jobKeys[0]];
  let jobName = jobKeys[0];
  for (let i = 1; i < jobKeys.length; i++) {
    const currentjob = jobKeys[i];
    if (jobs[currentjob] > biggestNumber) {
      jobName = currentjob;
      biggestNumber = jobs[currentjob];
    }
  }
  return jobName;
};
console.log(findMostCommonTitle(306, 4));

export {};
