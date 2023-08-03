export class AudioMixer {
  fix(file: VideoFile) {
    console.log("fixed ");
    return file;
  }
}
export class BitrateReader {
  read(file: VideoFile) {
    console.log("read");
    return file;
  }
  convert(buffer: VideoFile) {
    return buffer;
  }
}
export class CodecFactory {
  extract(file: VideoFile) {
    console.log("extract");
    return file;
  }
}
export class VideoFile {
  fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName;
  }
}
export class VideoConvector {
  file: VideoFile;
  format: string;
  constructor(file: VideoFile, format: string) {
    this.file = file;
    this.format = format;
  }
  convert() {
    let audioMixer = new AudioMixer();
    this.file = audioMixer.fix(this.file);
    let bitRateReader = new BitrateReader();
    this.file = bitRateReader.read(this.file);
    let codecFactory = new CodecFactory();
    this.file = codecFactory.extract(this.file);
    this.file = bitRateReader.convert(this.file);
    return this.file;
  }
  save() {
    console.log("saved");
  }
}
export class VideoConversionFacade {
  exec() {
    let file = new VideoFile("file");
    let converter = new VideoConvector(file, "mp4");
    converter.convert();
    converter.save();
  }
}

let app = new VideoConversionFacade();
app.exec();
