
type State = "draft" | "published" | "moderate";

export class Document {
  state: State;
  constructor() {
    this.state = "draft";
  }

  publish() {
    switch (this.state) {
      case "draft":
        this.state = "published";
      case "published":
        this.state = "moderate";
      case "moderate":
        this.state = "moderate";
    }
  }
}
