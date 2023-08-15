interface Mediator {
  notify(dialog: Component, event: string): string;
}

class Component {
  dialog: Mediator;
  constructor(dialog: Mediator) {
    this.dialog = dialog;
  }

  click(): void {
    this.dialog.notify(this, "click");
  }
}

class Authentication implements Mediator {
  notify(component: Component, event: string): string {
    if (component instanceof Button) {
      console.log("Button authenticated");
    } else if (component instanceof CheckBox) {
      console.log("Responsibilities aggreed");
    }
    return `Authentication: ${event}`;
  }
}

class CheckBox extends Component {
  constructor(dialog: Mediator) {
    super(dialog);
  }
  notify(event: string): string {
    console.log("CheckBox: ", event);
    return this.dialog.notify(this, event);
  }
}

class Button extends Component {
  constructor(dialog: Mediator) {
    super(dialog);
  }
  notify(event: string): string {
    return this.dialog.notify(this, event);
  }
}

let authentication = new Authentication();
let button = new Button(authentication);
let checkbox = new CheckBox(authentication);
authentication.notify(button, "click");
authentication.notify(checkbox, "click");
