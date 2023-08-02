export interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

export class FileDataSource implements DataSource {
  writeData(data: string): void {
    console.log("Write data to file " + data);
  }
  setSource(source: string): void {
    console.log("Set source to " + source);
  }
  readData(): string {
    console.log("Read data from file");
    return "data";
  }
}

export class DataSourceDecorator implements DataSource {
  protected wrappee: DataSource;
  constructor(source: DataSource) {
    this.wrappee = source;
  }
  writeData(data: string): void {
    console.log("Gets called at the DataSource");
    this.wrappee.writeData(data);
  }
  readData(): string {
    console.log("Gets called at the DataSource");
    return this.wrappee.readData();
  }
}
export class CompressDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    // additional logic goes here
    console.log("Encrypt data");
    super.writeData(data);
  }
  readData(): string {
    console.log("Decrypt data");
    // decrypt data goes here
    return super.readData();
  }
}

export class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    // additional logic goes here
    console.log("Encrypt data");
    super.writeData(data);
  }
  readData(): string {
    console.log("Decrypt data");
    // decrypt data goes here
    return super.readData();
  }
}

export class Application {
  type: "encrypt" | "compress";
  source: FileDataSource;
  constructor(source: string, type: "encrypt" | "compress") {
    this.type = type;
    // source goes here
    this.source = new FileDataSource();
    this.source.setSource(source);
  }
  getDataSource(): DataSource {
    if (this.type === "encrypt") {
      return new EncryptionDecorator(this.source);
    } else {
      return new CompressDecorator(this.source);
    }
  }
}

let app = new Application("somefile.dat", "encrypt");
let source = app.getDataSource();
source.writeData("some data");
source.readData();
