export abstract class GameAI {
  turn() {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.attack();
  }

  collectResources() {
    console.log("Collecting resources");
  }

  attack() {
    console.log("Attacking ");
  }

  abstract buildStructures(): void;
  abstract buildUnits(): void;
}

export class OrcsAI extends GameAI {
  buildStructures(): void {
    console.log("Orcs build structures");
  }
  buildUnits(): void {
    console.log("Orcs build units");
  }
}
