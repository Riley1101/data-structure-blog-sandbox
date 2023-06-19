import { getUser, list } from "./data";

export class Node {
  value: number;
  connections: Node[];
  constructor(value: number) {
    this.value = value;
    this.connections = [];
  }
}

export function getMostPopularJob(personId: number, degrees: number) {
  let queue = [personId];
  let seen = new Set(queue);
  const jobs = {};
  for (let i = 0; i < degrees; i++) {
    let new_queue = [];
    while (queue.length) {
      const user = getUser(queue.shift());
      for (let j = 0; i < user.connections.length; j++) {
        const conn = user.connections[j];
        if (!seen.has(conn)) {
          new_queue.push(conn);
          seen.add(conn);
        }
      }
      jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
    }
    queue = new_queue;
  }
  console.log(jobs);
}

console.log(getMostPopularJob(996, 3));
