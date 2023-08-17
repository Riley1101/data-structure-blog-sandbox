export class EventManager {
  private listeners: Map<string, Function[]>;

  subscribe(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  unsubscribe(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      return;
    }
    const callbacks = this.listeners.get(event);
    const index = callbacks.indexOf(callback);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
    this.listeners.delete(event);
  }

  notify(event: string, data: any) {
    if (!this.listeners.has(event)) {
      return;
    }
    const callbacks = this.listeners.get(event);
    callbacks.forEach((callback) => {
      callback(data);
    });
  }
}

export class Editor {
  private eventManager: EventManager;
  private text: string;

  constructor() {
    this.eventManager = new EventManager();
    this.text = "";
  }

  setText(text: string) {
    this.text = text;
    this.eventManager.notify("textChanged", text);
  }

  getSelection(): string {
    return this.text;
  }

  getEventManager(): EventManager {
    return this.eventManager;
  }
}


