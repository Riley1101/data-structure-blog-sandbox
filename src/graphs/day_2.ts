import { faker } from "@faker-js/faker";
type RelationType = "friend" | "college" | "neighbour" | "family";

export class Relation {
  sourceId: string;
  targetId: string;
  type: RelationType;
  constructor(sourceId: string, targetId: string, type: RelationType) {
    this.sourceId = sourceId;
    this.targetId = targetId;
    this.type = type;
  }
}

export class Person {
  id: string;
  name: string;
  relation: Relation[];
  constructor(name: string) {
    this.id = faker.string.uuid();
    this.name = name;
    this.relation = [];
  }
  setRelation(targetId: string, type: RelationType) {
    let rel = new Relation(this.id, targetId, type);
    this.relation.push(rel);
  }
}
let alice = new Person("Alice");
let bob = new Person("Bob");
let charlie = new Person("Charlie");
let eve = new Person("Eve");
let david = new Person("David");

alice.setRelation(charlie.id, "friend");
alice.setRelation(bob.id, "friend");
bob.setRelation(charlie.id, "college");
bob.setRelation(david.id, "neighbour");
charlie.setRelation(eve.id, "family");
charlie.setRelation(david.id, "friend");

const graph: Person[] = [alice, bob, charlie, eve, david];
const getPerson = (id: string) => {
  return graph.find((item) => item.id === id);
};

const traverseEveryFriends = (id: string) => {
  let queue = [id];
  let seen = new Set(id);
  let result = [];
  while (queue.length) {
    let personId = queue.shift() as string;
    if (!seen.has(personId)) {
      let person = getPerson(personId);
      seen.add(personId);
      result.push(person?.name);
      let connections = person?.relation;
      if (connections) {
        for (let i = 0; i < connections?.length; i++) {
          queue.push(connections[i].targetId);
        }
      }
    }
  }
  return result;
};

console.log(traverseEveryFriends(graph[0].id));
