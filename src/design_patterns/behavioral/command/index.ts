export class Editor {
  text: string;

  getSelection(): string {
    return this.text;
  }

  deleteSelection(): void {
    this.text = "";
  }
}

export abstract class Command {
  application: Application;
  editor: Editor;
  backup: string;
  constructor(app: Application, editor: Editor) {
    this.application = app;
    this.editor = editor;
    this.backup = null;
  }

  saveBackUp() {
    this.backup = this.editor.text;
  }
  undo() {
    this.editor.text = this.backup;
  }
  abstract execute(): void;
}

export class CopyCommand extends Command {
  execute(): void {
    console.log("method copied");
    this.application.clipboard = this.editor.text;
  }
}

export class BackUpCommand extends Command {
  execute(): void {
    this.saveBackUp();
    this.application.clipboard = this.editor.text;
    this.editor.deleteSelection();
  }
}

export class UndoCommand extends Command {
  execute(): void {
    this.undo();
  }
}

export class CommandHistory {
  history: Command[];
  constructor() {
    this.history = [];
  }

  push(command: Command) {
    this.history.push(command);
    return command;
  }
  pop(): Command {
    return this.history.pop();
  }
}

export class Application {
  clipboard: string;
  editors: Editor[];
  active_editor: Editor;
  history: CommandHistory;

  constructor() {
    this.clipboard = null;
    this.editors = [];
    this.active_editor = null;
    this.history = new CommandHistory();
  }

  createUI() {
    let copy = function () {
      let copyButton = new CopyCommand(this, this.active_editor);
      this.executeCommand(copyButton);
    };
    let cut = function () {
      let backupCommand = new BackUpCommand(this, this.active_editor);
      this.executeCommand(backupCommand);
    };
    return {
      copy,
      cut,
    };
  }
  executeCommand(command: Command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

let app = new Application();
let editor = new Editor();
app.active_editor = editor;
app.editors.push(editor);
let ui = app.createUI();
ui.copy();
