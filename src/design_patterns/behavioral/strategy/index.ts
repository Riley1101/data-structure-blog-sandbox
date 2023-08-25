export interface Strategy {
  execute(a: number, b: number): number;
}

export class ConcreteStrategySub implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

export class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}

export class App {
  static main(): void {
    const context = new Context(new ConcreteStrategyAdd());
    console.log(context.executeStrategy(1, 2));
    context.setStrategy(new ConcreteStrategySub());
    console.log(context.executeStrategy(1, 2));
  }
}
