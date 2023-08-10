export class WordCollection {
  items: string[];
  constructor() {
    this.items = [];
  }

  getItems(): string[] {
    return this.items;
  }
  addItems(item: string): void {
    this.items.push(item);
  }
}

export interface Iterator<T> {
  current(): T;
  next(): T;
  key(): number;
  hasMore(): boolean;
  rewind(): void;
}

export class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordCollection;
  private position: number = 0;
  private reverse: boolean = false;
  constructor(collection: WordCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;
    if (reverse) {
      this.position = collection.getItems().length - 1;
    }
  }

  public isReverse(): number {
    return this.reverse ? -1 : 1;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.isReverse();
    return item;
  }

  public key(): number {
    return this.position;
  }

  public hasMore(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }
    return this.position < this.collection.getItems().length;
  }
  public rewind(): void {
    this.position = this.reverse ? this.collection.getItems().length - 1 : 0;
  }
}

let collection = new WordCollection();
collection.addItems("First");
collection.addItems("Second");
collection.addItems("Third");
let collectionIterator = new AlphabeticalOrderIterator(collection);
console.log(collectionIterator.current());
collectionIterator.next();
console.log(collectionIterator.current());
collectionIterator.next();
console.log(collectionIterator.current());
