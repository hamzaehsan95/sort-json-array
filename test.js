var mocha = require('mocha');
var should = require('should');
var sortJsonArray = require('./');

describe('error', function() {
  it('Error should be thrown because the passed value is not a valid array', function() {
    (function() {
      sortJsonArray({});
    }).should.throw('sort-json-array expects an array.');
  });

  it('Error should be thrown because the passed value is not a valid array', function() {
    (function() {
      sortJsonArray("");
    }).should.throw('sort-json-array expects an array.');
  });
});

describe('empty array', function() {
  it('An empty array should be returned as a null value is passed:', function() {
    sortJsonArray().should.eql([]);
    sortJsonArray(undefined).should.eql([]);
    sortJsonArray(null).should.eql([]);
  })
});

describe('sortJsonArray', function() {
  it('Array should be sorted by a proprty', function() {
    var arr = [{key: 'e'}, {key: 'a'}, {key: 'f'}];
    sortJsonArray(arr, 'key').should.eql([
      {key: 'a'},
      {key: 'e'},
      {key: 'f'}
    ])
  })
});