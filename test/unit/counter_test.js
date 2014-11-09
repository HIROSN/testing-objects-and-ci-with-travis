'use strict';

var expect = require('chai').expect;
var Counter = require('../../lib/counter')('encapsulation');

describe('Counter object tests', function() {
  var counter;

  beforeEach(function() {
    var MyCounter = function() {};
    MyCounter.prototype = new Counter();
    counter = new MyCounter();
  });

  describe('constructor', function() {

    it('should be an object', function() {
      expect(counter).to.be.a('object');
    });

    it('has a function, increment', function() {
      expect(counter).to.have.property('increment');
      expect(counter.increment).to.be.a('function');
    });

    it('has a function, getValue', function() {
      expect(counter).to.have.property('getValue');
      expect(counter.getValue).to.be.a('function');
    });

    it('should not have a number property exposed', function() {
      for (var property in counter) {
        expect(counter[property]).to.be.a('function');
      }
    });

  });

  describe('getValue', function() {

    it('should return counter value zero when created', function() {
      expect(counter.getValue()).to.be.a('number');
      expect(counter.getValue()).to.equal(0);
    });

  });

  describe('increment', function() {

    it('should increment the counter value', function() {
      expect(counter.increment().getValue()).to.be.a('number');
      expect(counter.getValue()).to.equal(1);
      expect(counter.increment().getValue()).to.be.a('number');
      expect(counter.getValue()).to.equal(2);
    });

    it('should hold distinct value in each instance', function() {
      expect(counter.increment().getValue()).to.equal(1);
      expect(counter.increment().getValue()).to.equal(2);
      expect(new Counter().increment().getValue()).to.equal(1);
      expect(counter.getValue()).to.equal(2);
    });

  });
});
