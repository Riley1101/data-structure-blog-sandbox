/**
 * social graph
 */
import { getMe, getUser, list } from "./data";

export const findMostCommonJobTitle = (
  myId: number,
  degreeOfSeperation: number
) => {
  let queue = [myId];
  const seen = new Set(queue);
  const jobs: { [string: string]: number } = {};

  for (let i = 0; i <= degreeOfSeperation; i++) {
    let newQueue = [];
    while (queue.length) {
      const currentUser = getUser(queue.shift() as number) as {
        connections: number[];
        title: string;
      };
      for (let j = 0; j < currentUser.connections.length; j++) {
        const connection = currentUser.connections[j];
        if (!seen.has(connection)) {
          newQueue.push(connection);
          seen.add(connection);
        }
      }
      jobs[currentUser.title] = jobs[currentUser.title]
        ? jobs[currentUser.title] + 1
        : 1;
    }
    queue = newQueue;
  }
  console.log(jobs);
};
