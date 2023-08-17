export class Snapshot {
  private editor: Editor;
  private text: string;
  private curX: number;
  private curY: number;
  private selectionWidth: number;

  constructor(editor: Editor) {
    this.editor = editor;
    this.text = editor.text;
    this.curX = editor.curX;
    this.curY = editor.curY;
    this.selectionWidth = editor.selectionWidth;
  }

  restore() {
    this.editor.setText(this.text);
    this.editor.setCursor(this.curX, this.curY);
    this.editor.setSelectionWidth(this.selectionWidth);
  }
}

export class Editor {
  text: string;
  curX: number;
  curY: number;
  selectionWidth: number;

  constructor() {
    this.text = "";
    this.curX = 0;
    this.curY = 0;
    this.selectionWidth = 0;
  }

  setText(text: string) {
    this.text = text;
  }

  setCursor(x: number, y: number) {
    this.curX = x;
    this.curY = y;
  }

  setSelectionWidth(width: number) {
    this.selectionWidth = width;
  }
}

export class Command {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  private backup: Snapshot;

  makeBackup(editor: Editor) {
    this.backup = new Snapshot(editor);
  }

  undo() {
    this.backup.restore();
  }
}

export class Application {
  private editor: Editor;
  private history: Command[];

  constructor() {
    this.editor = new Editor();
    this.history = [];
  }

  executeCommand(command: Command) {
    command.makeBackup(this.editor);
    this.history.push(command);
  }

  printAll() {
    this.history.forEach((command) => {
      console.log(command.name);
    });
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

const app = new Application();
app.executeCommand(new Command("type"));
app.printAll();
app.executeCommand(new Command("edit"));
app.printAll();
app.executeCommand(new Command("delete"));
app.printAll();
app.undo();
app.printAll();
app.undo();
app.printAll();
