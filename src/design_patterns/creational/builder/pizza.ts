export interface Builder {
  addSalt(num: number): Builder;
  addWater(num: number): Builder;
  addFlour(num: number): Builder;
  addOil(num: number): Builder;
  addYeast(num: number): Builder;
  bake(): Pizza;
}

export interface Pizza {
  salt: number;
  water: number;
  flour: number;
  oil: number;
  yeast: number;
}
export class PizzaMaker implements Builder {
  salt: number;
  water: number;
  flour: number;
  oil: number;
  yeast: number;
  constructor() {
    this.salt = 0;
    this.water = 0;
    this.flour = 0;
    this.oil = 0;
    this.yeast = 0;
  }
  addOil(num: number): Builder {
    this.oil = this.oil + num;
    return this;
  }
  addSalt(num: number): Builder {
    this.salt = this.salt + num;
    return this;
  }
  addFlour(num: number): Builder {
    this.flour = this.flour + num;
    return this;
  }
  addWater(num: number): Builder {
    this.water = this.water + num;
    return this;
  }
  addYeast(num: number): Builder {
    this.yeast = this.yeast + num;
    return this;
  }
  bake(): Pizza {
    return {
      salt: this.salt,
      water: this.water,
      flour: this.flour,
      oil: this.oil,
      yeast: this.yeast,
    };
  }
}

export interface Chef {
  makeSmallPizza(): Pizza;
  makeBigPizza(): Pizza;
  changeBuilder(builder: Builder): void;
}
export class Chef {
  private builder: Builder;
  constructor(builder: PizzaMaker) {
    this.builder = builder;
  }
  changeBuilder(builder: Builder): void {
    this.builder = builder;
  }
  makeSmallPizza(): Pizza {
    this.builder.addFlour(100);
    this.builder.addOil(10);
    this.builder.addSalt(5);
    this.builder.addWater(50);
    this.builder.addYeast(5);
    return this.builder.bake();
  }

  makeBigPizza(): Pizza {
    this.builder.addFlour(200);
    this.builder.addOil(20);
    this.builder.addSalt(10);
    this.builder.addWater(100);
    this.builder.addYeast(10);
    return this.builder.bake();
  }
}

let pizzaMaker = new PizzaMaker();
let chef = new Chef(pizzaMaker);
let smallPizza = chef.makeSmallPizza();
let bigPizza = chef.makeBigPizza();
console.log(smallPizza);
console.log(bigPizza);
