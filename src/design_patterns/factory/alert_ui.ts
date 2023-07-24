export interface Dialog {
  getShape(): string;
  createButton(): void;
  render(): void;
}

export class WindowDialog implements Dialog {
  alert: string;
  shape: string;
  constructor(alert: string, shape: string) {
    this.alert = alert;
    this.shape = shape;
  }
  getShape(): string {
    return this.shape;
  }
  createButton(): void {
    console.log("WindowDialog created");
  }
  render(): void {
    console.log("WindowDialog rendered");
  }
}

export class LinuxDialog implements Dialog {
  alert: string;
  shape: string;
  constructor(alert: string, shape: string) {
    this.alert = alert;
    this.shape = shape;
  }
  getShape(): string {
    return "square";
  }
  createButton(): void {
    console.log("LinuxDialog created");
  }
  render(): void {
    console.log("LinuxDialog rendered");
  }
}

export class AndroidDialog implements Dialog {
  alert: string;
  shape: string;
  constructor(alert: string, shape: string) {
    this.alert = alert;
    this.shape = shape;
  }
  createButton(): void {
    console.log("AndroidDialog created");
  }
  render(): void {
    console.log("AndroidDialog rendered");
  }
  getShape(): string {
    return this.shape;
  }
}

type OS = "window" | "linux" | "mac" | "android";
export class Application {
  dialog: Dialog;
  os: OS;
  shape: string;
  constructor(alert: string, os: OS) {
    this.os = os;
    this.dialog = this.createDialog(alert);
    this.shape = "square";
  }
  getShape(): string {
    return this.shape;
  }

  createDialog(alert: string): Dialog {
    switch (this.os) {
      case "window":
        return new WindowDialog(alert, this.getShape());
      case "linux":
        return new LinuxDialog(alert, this.getShape());
      case "android":
        return new AndroidDialog(alert, this.getShape());
      default:
        throw new Error("OS not supported");
    }
  }
}

export class RoundedThemedApplication extends Application {
  constructor(alert: string, os: OS) {
    super(alert, os);
  }
  getShape(): string {
    return "rounded";
  }
  createDialog(alert: string): Dialog {
    switch (this.os) {
      case "window":
        return new WindowDialog(alert, this.getShape());
      case "linux":
        return new LinuxDialog(alert, this.getShape());
      case "android":
        return new AndroidDialog(alert, this.getShape());
      default:
        throw new Error("OS not supported");
    }
  }
}

let rounded_app = new RoundedThemedApplication("Welcome to android", "android");

rounded_app.dialog.createButton();
rounded_app.dialog.render();
console.log(rounded_app.dialog.getShape());
