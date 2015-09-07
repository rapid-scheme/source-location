import SourceLocation from '../src/source-location';

const assert = require("assert");

describe('SourceLocation', () => {
  describe('#create()', () => {
    let sourceLocation;

    beforeEach(() => {
      sourceLocation = SourceLocation.create('name', {line: 10, column: 5}, {line: 12, column: 6});
    });
    
    it('should create a source location object with the properties specified', () => {
      assert.deepEqual(sourceLocation, {source: 'name', start: {line: 10, column: 5}, end: {line: 12, column: 6}});
    });
    
    it('should create an instance of SourceLocation', () => {
      assert(sourceLocation instanceof SourceLocation);
    });
  });
});