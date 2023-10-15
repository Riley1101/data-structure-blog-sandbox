class Database {
  private static instance: Database | null = null;

  // Private constructor to prevent external instantiation
  private constructor() {}

  // Method to get the Singleton instance
  public static getInstance(): Database {
    if (Database.instance === null) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  // Add your methods and properties here
  public sayHello(): void {
    console.log("Hello, I am the Singleton instance!");
  }
}

// Usage
const instance1 = Database.getInstance();
const instance2 = Database.getInstance();

console.log(instance1 === instance2); // Output: true

instance1.sayHello(); // Output: Hello, I am the Singleton instance!
instance2.sayHello(); // Output: Hello, I am the Singleton instance!
