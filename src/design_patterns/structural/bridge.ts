export class RemoteControl {
  protected device: Device;
  constructor(device: Device) {
    this.device = device;
  }
  public togglePower(): boolean {
    console.log("toggle power");
    return !this.device.isEnable();
  }
  public volumeUp(): void {
    console.log("volume up");
    this.device.volumeUp();
  }
  public volumeDown(): void {
    console.log("volume down");
    this.device.volumeDown();
  }
  public getChannel(): number {
    return this.device.getChannel();
  }
}

export class AdvancedRemoteControl extends RemoteControl {
  public mute(): void {
    console.log("mute");
    this.device.volume = 0;
  }
}

export interface Device {
  isEnable(): boolean;
  volumeUp(): void;
  volumeDown(): void;
  getChannel(): number;
}

export class Device {
  volume: number;
  constructor() {
    this.volume = 0;
  }
  isEnable(): boolean {
    return Math.random() < 0.5;
  }

  volumeUp(): void {
    this.volume += 10;
  }
  volumeDown(): void {
    this.volume -= 10;
  }
  getChannel(): number {
    return Math.floor(Math.random() * 100);
  }
}

let remote = new RemoteControl(new Device());
let advancedRemote = new AdvancedRemoteControl(new Device());
remote.togglePower();
remote.volumeDown();
remote.volumeUp();

advancedRemote.togglePower();
advancedRemote.mute();

export class TV extends Device {
  constructor() {
    console.log("TV");
    super();
  }
}

let tv = new TV();
let tvRemote = new RemoteControl(tv);

tvRemote.togglePower();
tvRemote.volumeDown();
tvRemote.volumeUp();

export class Radio implements Device {
  isEnable(): boolean {
    console.log("turn on radio");
    return Math.random() < 0.5;
  }
  volumeUp(): void {
    console.log("volume up radio");
  }
  volumeDown(): void {
    console.log("volume down radio");
  }
  getChannel(): number {
    console.log("get channel radio");
    return Math.floor(Math.random() * 100);
  }
  volume: number;
}

type A = number;
let radio = new Radio();
let advancedRadioRemote = new AdvancedRemoteControl(radio);
advancedRadioRemote.volumeDown();
