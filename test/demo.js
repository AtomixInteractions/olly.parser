
var olly = require('../lib/olly');
var should = require('should');
should.config.checkProtoEql = true;

describe('Olly', function(){
  it('Demo', function(){
    should(olly).be.Object;
    should(olly.parse).be.Function;
  });
});