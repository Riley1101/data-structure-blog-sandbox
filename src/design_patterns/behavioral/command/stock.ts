export abstract class Order {
  execute: () => void;
}
export abstract class Stork implements Order {
  execute: () => void;
}

export class StockBroker {
  stocks: Stork[] = [];
  constructor() {
    this.stocks = [];
  }
  execute() {
    this.stocks.forEach((stock) => {
      stock.buy();
    });
  }
}
