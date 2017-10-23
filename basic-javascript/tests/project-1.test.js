const chai = require('chai');

const funcs = require('../src/project-1');

const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = chai.assert;

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return a number', () => {
      expect(multiplyByTen(6)).to.be.a('number');
    });
    it('should multiply the number passed in by 10', () => {
      expect(multiplyByTen(6)).to.equal(60);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      expect(subtractFive(6)).to.be.a('number');
    });
    it('should subtract 5 from the number passed in', () => {
      expect(subtractFive(6)).to.equal(1);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a true or false value', () => {
      expect(areSameLength(3, 4)).to.be.a('boolean');
    });
    it('should return true if the strings passed in are of the same length', () => {
      expect(areSameLength('chicken', 'duckuck')).to.equal(true);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a true or false value', () => {
      expect(areEqual(3, 4)).to.be.a('boolean');
    });
    it('should return true if passed in are deep equal', () => {
      expect(areEqual(3, '3')).to.equal(false);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a true or false value', () => {
      expect(lessThanNinety(5)).to.be.a('boolean');
    });
    it('should return true if passed in num is less than 90', () => {
      expect(lessThanNinety(100)).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a true or false value', () => {
      expect(greaterThanFifty(5)).to.be.a('boolean');
    });
    it('should return true if passed in num is greater than 50', () => {
      expect(greaterThanFifty(100)).to.equal(true);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      expect(add(4, 5)).to.be.a('number');
    });
    it('should add two numbers passed in together', () => {
      expect(add(4, 5)).to.equal(9);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      expect(subtract(5, 4)).to.be.a('number');
    });
    it('should subtract two numbers passed in together', () => {
      expect(subtract(5, 3)).to.equal(2);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      expect(divide(25, 5)).to.be.a('number');
    });
    it('should divide two numbers passed in together', () => {
      expect(divide(25, 5)).to.equal(5);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      expect(multiply(4, 5)).to.be.a('number');
    });
    it('should multiply two numbers passed in together', () => {
      expect(multiply(4, 5)).to.equal(20);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      expect(getRemainder(10, 5)).to.be.a('number');
    });
    it('should return the remainder two numbers passed in together', () => {
      expect(getRemainder(10, 5)).to.equal(0);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a true or false value', () => {
      expect(isEven(6)).to.be.a('boolean');
    });
    it('should return true for an even number, else false', () => {
      expect(isEven(6)).to.equal(true);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a true or false value', () => {
      expect(isOdd(6)).to.be.a('boolean');
    });
    it('should return true for an odd number, else false', () => {
      expect(isOdd(6)).to.equal(false);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      expect(square(6)).to.be.a('number');
    });
    it('should return the number passed in squared', () => {
      expect(square(6)).to.equal(36);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      expect(cube(6)).to.be.a('number');
    });
    it('should return the number passed in cubed', () => {
      expect(cube(6)).to.equal(216);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      expect(raiseToPower(6, 2)).to.be.a('number');
    });
    it('should return the 1st argument to the 2nd argument power', () => {
      expect(raiseToPower(6, 2)).to.equal(36);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      expect(roundNumber(6.5)).to.be.a('number');
    });
    it('should return the number rounded to the nearest whole number', () => {
      expect(roundNumber(6.5)).to.equal(7);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      expect(roundUp(6.4)).to.be.a('number');
    });
    it('should return the number rounded up to the nearest whole number', () => {
      expect(roundUp(6.4)).to.equal(7);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      expect(addExclamationPoint('hello')).to.be.a('string');
    });
    it('should return a string with an exclamation point added', () => {
      expect(addExclamationPoint('hello')).to.equal('hello!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      expect(combineNames('jon', 'bob')).to.be.a('string');
    });
    it('should return a string with the first name and last nane split by a space', () => {
      expect(combineNames('jon', 'bob')).to.equal('jon bob');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      expect(getGreeting('dude')).to.be.a('string');
    });
    it('should return a string with Hello before it and exclamation after', () => {
      expect(getGreeting('dude')).to.equal('Hello dude!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      expect(getRectangleArea(3, 4)).to.be.a('number');
    });
    it('should return the length passed in times width', () => {
      expect(getRectangleArea(3, 4)).to.equal(12);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      expect(getTriangleArea(3, 4)).to.be.a('number');
    });
    it('should return half the base times height', () => {
      expect(getTriangleArea(3, 4)).to.equal(6);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      expect(getCircleArea(3)).to.be.a('number');
    });
    it('should return pi times the square of the radius', () => {
      expect(getCircleArea(3)).to.equal(Math.PI * 9);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      expect(getRectangularPrismVolume(3, 3, 3)).to.be.a('number');
    });
    it('should return the length width and height multiplied together', () => {
      expect(getRectangularPrismVolume(3, 3, 3)).to.equal(27);
    });
  });
});
