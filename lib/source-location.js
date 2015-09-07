"use strict";
var Position = function() {
  function Position($__4) {
    var $__5 = $__4,
        line = $__5.line,
        column = $__5.column;
    this.line = line;
    this.column = column;
  }
  return ($traceurRuntime.createClass)(Position, {}, {});
}();
var SourceLocation = function() {
  function SourceLocation(source, start, end) {
    this.source = source;
    this.start = new Position(start);
    this.end = new Position(end);
  }
  return ($traceurRuntime.createClass)(SourceLocation, {}, {create: function(source, start, end) {
      return new SourceLocation(source, start, end);
    }});
}();
var $__default = SourceLocation;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
