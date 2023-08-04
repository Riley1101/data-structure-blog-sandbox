export interface ComponentWithContextualHelp {
  showHelp(): void;
}

export class Component implements ComponentWithContextualHelp {
  container: Container | null;
  constructor() {
    this.container = null;
  }
  showHelp(): void {
    console.log("Component help");
  }
}

export class Container extends Component {
  private children: ComponentWithContextualHelp[];
  constructor() {
    super();
    this.children = [];
  }
  add(child: Component): Component {
    this.children.push(child);
    child.container = this;
    return child;
  }
}

export class Button extends Component {
  showHelp(): void {
    if (this.container) {
      this.container.showHelp();
    } else {
      console.log("Button help");
    }
  }
}

export class Panal extends Container {
  helpMessage: string;
  showHelp(): void {
    if (this.helpMessage) {
      console.log(this.helpMessage);
    } else {
      super.showHelp();
    }
  }
}

export class Dialog extends Container {
  wikiPageURL: string;
  showHelp(): void {
    if (this.wikiPageURL) {
      console.log(this.wikiPageURL);
    } else {
      super.showHelp();
    }
  }
}

export class Application {
  dialog: Dialog;
  constructor() {
    this.dialog = new Dialog();
  }
  createUI() {
    const dialog = new Dialog();
    dialog.wikiPageURL = "https://www.wikipedia.com";
    const panal = new Panal();
    panal.helpMessage = "Panal help";
    const button = new Button();
    button.showHelp();
    panal.add(button);
    dialog.add(panal);
    this.dialog = dialog;
  }
  showHelp() {
    this.dialog.showHelp();
  }
}

const app = new Application();
app.createUI();
app.showHelp();
