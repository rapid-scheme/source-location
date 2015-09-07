class Position {
  constructor({line, column}) {
    this.line = line;
    this.column = column;
  }
}

export default class SourceLocation {
  constructor(source, start, end) {
    this.source = source;
    this.start = new Position(start);
    this.end = new Position(end);
  }
  
  static create(source, start, end) {
    return new SourceLocation(source, start, end);
  }
}