interface Prototype {
  message: string;
  greet(): void;
  clone(): Prototype;
}

class Prototype {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
  greet() {
    console.log(this.message);
  }
  clone(): Prototype {
    return Object.create(this);
  }
}

const prototype = new Prototype("Hello");
prototype.greet();

interface Prototype {
  goodBye(): void;
}

let clone: Prototype = prototype.clone();

clone.goodBye = function() {
    console.log("Goodbye");
}
clone.goodBye();
