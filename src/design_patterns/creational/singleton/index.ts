export class Database {
  instance: Database;
  queries: string[];
  constructor() {
    this.queries = [];
    if (this.instance === null) {
      return new Database();
    }
    return this.instance;
  }
  query(sql: string): void {
    console.log(sql);
    this.queries.push(sql);
  }
  setQueries(queries: string[]): void {}
}

export class Application {
  constructor() {
    let db1 = new Database();
    db1.query("SELECT * FROM table1");
    let db2 = new Database();
  }
}
const app = new Application();
console.log(app);
