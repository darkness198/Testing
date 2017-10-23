const chai = require('chai');

const funcs = require('../src/project-2');

const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = chai.assert;

describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      expect(getBiggest).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getBiggest(2, 3)).to.be.a('number');
    });
    it('should return the larger of the two passed in', () => {
      expect(getBiggest(2, 3)).to.equal(3);
    });
  });
  describe('greeting', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      expect(greeting).to.be.a('function');
    });
    it('should return a string', () => {
      expect(greeting('Spanish')).to.be.a('string');
    });
    it('should return the correct greeting for the language', () => {
      expect(greeting('Spanish')).to.equal('Hola!');
    });
  });
  describe('isTenOrFive', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      expect(isTenOrFive).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isTenOrFive(2)).to.be.a('boolean');
    });
    it('should return true if the number passed in is 10 or 5', () => {
      expect(isTenOrFive(2)).to.equal(false);
    });
  });
  describe('isInRange', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      expect(isInRange).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isInRange(4)).to.be.a('boolean');
    });
    it('should return true if the number is between 20 and 50', () => {
      expect(isInRange(4)).to.equal(false);
    });
  });
  describe('isInteger', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      expect(isInteger).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isInteger(2.5)).to.be.a('boolean');
    });
    it('should return true if the number is an integer', () => {
      expect(isInteger(2.5)).to.equal(false);
    });
  });
  describe('fizzBuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      expect(fizzBuzz).to.be.a('function');
    });
    it('should return a string', () => {
      expect(fizzBuzz(3)).to.be.a('string');
    });
    it('should return fizz if divisible by only 3, buzz if only 5, and fizzbuzz if both', () => {
      expect(fizzBuzz(3)).to.equal('fizz');
    });
  });
  describe('isPrime', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      expect(isPrime).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isPrime(4)).to.be.a('boolean');
    });
    it('should return true if the number is prime', () => {
      expect(isPrime(4)).to.equal(false);
    });
  });
  describe('returnFirst', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      expect(returnFirst).to.be.a('function');
    });
    it('should return the first element in the array', () => {
      expect(returnFirst([0, 1])).to.equal(0);
    });
  });
  describe('returnLast', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      expect(returnLast).to.be.a('function');
    });
    it('should return the last element in the array', () => {
      expect(returnLast([0, 1])).to.equal(1);
    });
  });
  describe('getArrayLength', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      expect(getArrayLength).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getArrayLength([0, 1, 2])).to.be.a('number');
    });
    it('should return the length of the array', () => {
      expect(getArrayLength([0, 1, 2])).to.equal(3);
    });
  });
  describe('incrementByOne', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      expect(incrementByOne).to.be.a('function');
    });
    it('should return an array', () => {
      expect(incrementByOne([0, 1, 2])).to.be.a('array');
    });
    it('should return the array with all elements incremented', () => {
      expect(incrementByOne([0, 1, 2])).to.deep.equal([1, 2, 3]);
    });
  });
  describe('addItemToArray', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      expect(addItemToArray).to.be.a('function');
    });
    it('should return an array', () => {
      expect(addItemToArray([0, 1, 2], 3)).to.be.a('array');
    });
    it('should return an array with the new item added', () => {
      expect(addItemToArray([0, 1, 2], 3)).to.deep.equal([0, 1, 2, 3]);
    });
  });
  describe('addItemToFront', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      expect(addItemToFront).to.be.a('function');
    });
    it('should return an array', () => {
      expect(addItemToFront([0, 1, 2], -1)).to.be.a('array');
    });
    it('should return an array with item added to front', () => {
      expect(addItemToFront([0, 1, 2], -1)).to.deep.equal([-1, 0, 1, 2]);
    });
  });
  describe('wordsToSentence', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      expect(wordsToSentence).to.be.a('function');
    });
    it('should return a string', () => {
      expect(wordsToSentence(['i', 'am', 'cool'])).to.be.a('string');
    });
    it('should return a string of the words in a sentence', () => {
      expect(wordsToSentence(['i', 'am', 'cool'])).to.equal('i am cool');
    });
  });
  describe('contains', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      expect(contains).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(contains([0, 1, 2], 2)).to.be.a('boolean');
    });
    it('should return true if the item is in the array', () => {
      expect(contains([0, 1, 2], 2)).to.equal(true);
    });
  });
  describe('addNumbers', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      expect(addNumbers).to.be.a('function');
    });
    it('should return a number', () => {
      expect(addNumbers([0, 1, 2])).to.be.a('number');
    });
    it('should return the sum of all the numbers in the array', () => {
      expect(addNumbers([0, 1, 2])).to.equal(3);
    });
  });
  describe('averageTestScore', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      expect(averageTestScore).to.be.a('function');
    });
    it('should return a number', () => {
      expect(averageTestScore([0, 50, 100])).to.be.a('number');
    });
    it('should return teh average of the test scores passed in', () => {
      expect(averageTestScore([0, 50, 100])).to.equal(50);
    });
  });
  describe('largestNumber', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      expect(largestNumber).to.be.a('function');
    });
    it('should return a number', () => {
      expect(largestNumber([0, 1, 2])).to.be.a('number');
    });
    it('should return the largest number in the array', () => {
      expect(largestNumber([0, 1, 2])).to.equal(2);
    });
  });
});

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
