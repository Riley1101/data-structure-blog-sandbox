export abstract class Logger {
  INFO: number = 1;
  DEBUG: number = 2;
  ERROR: number = 3;
  protected level: number;
  nextLogger: Logger | null;
  constructor() {
    this.level = this.INFO;
    this.nextLogger = null;
  }

  write(message: string): void {
    console.log(message);
  }

  logMessage(level: number, message: string): void {
    if (this.level <= level) {
      this.write(message);
    }
    if (this.nextLogger) {
      this.nextLogger.logMessage(level, message);
    }
  }
}

export class ConsoleLogger extends Logger {
  constructor() {
    super();
    this.level = this.DEBUG;
  }
  write(message: string): void {
    console.log(`Console Logger: ${message}`);
  }
}

export class ErrorLogger extends Logger {
  constructor() {
    super();
    this.level = this.ERROR;
  }
  write(message: string): void {
    console.log(`Error Logger: ${message}`);
  }
}

export class FileLogger extends Logger {
  constructor() {
    super();
    this.level = this.INFO;
  }
  write(message: string): void {
    console.log(`File Logger: ${message}`);
  }
}

export class Application {
  loggerChain: Logger;
  constructor() {
    this.loggerChain = new ConsoleLogger();
    const errorLogger = new ErrorLogger();
    const fileLogger = new FileLogger();
    this.loggerChain.nextLogger = errorLogger;
    errorLogger.nextLogger = fileLogger;
  }

  logMessage(level: number, message: string): void {
    this.loggerChain.logMessage(level, message);
  }
}

let app = new Application();
app.logMessage(app.loggerChain.ERROR, "This is a error message.");
