export abstract class State {
  protected audioPlayer: AudioPlayer;
  constructor(audioPlayer: AudioPlayer) {
    this.audioPlayer = audioPlayer;
  }
  abstract clickLock(): void;
  abstract clickPlay(): void;
  abstract clickNext(): void;
  abstract clickPrevious(): void;
}
export class AudioPlayer {
  private state: State;
  constructor() {
    this.state = new ReadyState(this);
  }
  public setState(state: State): void {
    this.state = state;
  }
  public clickLock(): void {
    this.state.clickLock();
  }
  public clickPlay(): void {
    this.state.clickPlay();
  }
  public clickNext(): void {
    this.state.clickNext();
  }
  public clickPrevious(): void {
    this.state.clickPrevious();
  }

  changeState(state: State) {
    this.state = state;
  }
}

export class ReadyState extends State {
  clickLock(): void {
    console.log("Locking in Ready...");
  }
  clickPlay(): void {
    console.log("Playing while ready...");
  }
  clickNext(): void {
    console.log("Play Next while ready...");
  }
  clickPrevious(): void {
    console.log("Play Prev while ready...");
  }
}

export class PlayingState extends State {
  clickLock(): void {
    console.log("Locking while playing...");
  }
  clickPlay(): void {
    console.log("Playing while playing...");
  }
  clickNext(): void {
    console.log("Play Next while playing...");
  }
  clickPrevious(): void {
    console.log("Play Prev while playing...");
  }
}

let player = new AudioPlayer();
player.clickLock();
player.clickPlay();
player.clickNext();
player.clickPrevious();

player.changeState(new PlayingState(player));

player.clickLock();
player.clickPlay();
player.clickNext();
player.clickPrevious();
