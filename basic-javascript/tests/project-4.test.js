const chai = require('chai');

const funcs = require('../src/project-4');

const sinonChai = require('sinon-chai');

const sinon = require('sinon');

chai.use(sinonChai);

const expect = chai.expect;
const assert = chai.assert;

describe('Project-3 Functions', () => {
  describe('multiplyArguments', () => {
    const multiplyArguments = funcs.multiplyArguments;
    it('should be a function', () => {
      expect(multiplyArguments).to.be.a('function');
    });
    it('should return a number', () => {
      expect(multiplyArguments([1, 2, 3])).to.be.a('number');
    });
  });
  describe('invokeCallback', () => {
    const invokeCallback = funcs.invokeCallback;
    it('should be a function', () => {
      expect(invokeCallback).to.be.a('function');
    });
  });
  describe('sumArray', () => {
    const sumArray = funcs.sumArray;
    it('should be a function', () => {
      expect(sumArray).to.be.a('function');
    });
    it('should call the callback on the sum of the arrays values', () => {
      const iSpy = sinon.spy();
      sumArray([1, 2, 3], iSpy);
      expect(iSpy).to.be.calledWith(6);
    });
  });
  describe('forEach', () => {
    const forEach = funcs.forEach;
    it('should be a function', () => {
      expect(forEach).to.be.a('function');
    });
    it('should call the callback on each element in the array', () => {
      const iSpy = sinon.spy();
      forEach([1, 2, 3], iSpy);
      expect(
        iSpy.calledWith(1) && iSpy.calledWith(2) && iSpy.calledWith(3)
      ).to.equal(true);
    });
  });
  describe('map', () => {
    const map = funcs.map;
    it('should be a function', () => {
      expect(map).to.be.a('function');
    });
    it('should return an array', () => {
      const cb = function cb() {};
      expect(map([1, 2, 3], cb)).to.be.a('array');
    });
    it('should return a new array with the callback called on each in the original', () => {
      const add2 = function cb(x) {
        return x + 2;
      };
      const newArr = map([1, 2, 3], add2);
      expect(newArr).to.deep.equal([3, 4, 5]);
    });
  });
  describe('getUserConstructor', () => {
    const getUserConstructor = funcs.getUserConstructor;
    it('should be a function', () => {
      expect(getUserConstructor).to.be.a('function');
    });
    it('should return an function', () => {
      expect(getUserConstructor()).to.be.a('function');
    });
  });
  describe('addPrototypeMethod', () => {
    const addPrototypeMethod = funcs.addPrototypeMethod;
    it('should be a function', () => {
      expect(addPrototypeMethod).to.be.a('function');
    });
    it('should return add the sayHi function to the Constructors prototype', () => {
      const iSpy = sinon.spy();
      addPrototypeMethod(iSpy);
      expect(iSpy.prototype.sayHi()).to.equal('Hello World!');
    });
  });
  describe('addReverseString', () => {
    const addReverseString = funcs.addReverseString;
    it('should be a function', () => {
      expect(addReverseString).to.be.a('function');
    });
    it('should return add the reverse function to the String prototype', () => {
      addReverseString();
      expect(String.prototype.reverse).to.be.a('function');
    });
  });
  describe('nFactorial', () => {
    const nFactorial = funcs.nFactorial;
    it('should be a function', () => {
      expect(nFactorial).to.be.a('function');
    });
    it('should return a number', () => {
      expect(nFactorial(3)).to.be.a('number');
    });
  });
  describe('cacheFunction', () => {
    const cacheFunction = funcs.cacheFunction;
    it('should be a function', () => {
      expect(cacheFunction).to.be.a('function');
    });
    it('should return a function', () => {
      expect(cacheFunction([1, 2, 3])).to.be.a('function');
    });
  });
});
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
