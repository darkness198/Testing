const chai = require('chai');

const funcs = require('../src/project-3');

const sinonChai = require('sinon-chai');

const sinon = require('sinon');

chai.use(sinonChai);

const expect = chai.expect;
const assert = chai.assert;

describe('Project-3 Functions', () => {
  describe('makeCat', () => {
    const makeCat = funcs.makeCat;
    it('should be a function', () => {
      expect(makeCat).to.be.a('function');
    });
    it('should return an object', () => {
      expect(makeCat('bob', 13)).to.be.an('object');
    });
    it('should return a cat with a name and age', () => {
      expect(makeCat('bob', 13).age).to.equal(13);
      expect(makeCat('bob', 13).name).to.equal('bob');
      expect(makeCat('bob', 13).meow()).to.equal('Meow!');
    });
  });
  describe('addProperty', () => {
    const addProperty = funcs.addProperty;
    it('should be a function', () => {
      expect(addProperty).to.be.a('function');
    });
    it('should return an object', () => {
      expect(addProperty({}, 3)).to.be.an('object');
    });
    it('should return an object with the new property added', () => {
      expect(addProperty({}, 3)).to.have.property('3');
    });
  });
  describe('invokeMethod', () => {
    const invokeMethod = funcs.invokeMethod;
    it('should be a function', () => {
      expect(invokeMethod).to.be.a('function');
    });
    it('should invoke the method on the object once', () => {
      const iSpy = sinon.spy();
      const obj = {
        add(x, y) {
          iSpy();
          return x + y;
        }
      };
      invokeMethod(obj, 'add');
      expect(iSpy).to.have.callCount(1);
    });
  });
  describe('multiplyMysteryNumberByFive', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    it('should be a function', () => {
      expect(multiplyMysteryNumberByFive).to.be.a('function');
    });
    it('should return an number', () => {
      expect(multiplyMysteryNumberByFive({ mysteryNumber: 5 })).to.be.a(
        'number'
      );
    });
    it('should return the number in the object multiplied by 5', () => {
      expect(multiplyMysteryNumberByFive({ mysteryNumber: 5 })).to.equal(25);
    });
  });
  describe('deleteProperty', () => {
    const deleteProperty = funcs.deleteProperty;
    it('should be a function', () => {
      expect(deleteProperty).to.be.a('function');
    });
    it('should return an object', () => {
      expect(deleteProperty({ prop: 1 }, 'prop')).to.be.an('object');
    });
    it('should return an object without the property anymore', () => {
      expect(deleteProperty({ prop: 1 }, 'prop')).to.not.have.property('prop');
    });
  });
  describe('newUser', () => {
    const newUser = funcs.newUser;
    it('should be a function', () => {
      expect(newUser).to.be.a('function');
    });
    it('should return an object', () => {
      expect(newUser('bob', 'bob@gmail.com', 'pass')).to.be.an('object');
    });
    it('should return an object with name, email, and password set', () => {
      expect(newUser('bob', 'bob@gmail.com', 'pass').name).to.equal('bob');
      expect(newUser('bob', 'bob@gmail.com', 'pass').email).to.equal(
        'bob@gmail.com'
      );
      expect(newUser('bob', 'bob@gmail.com', 'pass').password).to.equal('pass');
    });
  });
  describe('hasEmail', () => {
    const hasEmail = funcs.hasEmail;
    it('should be a function', () => {
      expect(hasEmail).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(hasEmail({ email: 'exists' })).to.be.an('boolean');
    });
    it('should return true if the user object has an email property', () => {
      expect(hasEmail({ email: 'exists' })).to.equal(true);
    });
  });
  describe('hasProperty', () => {
    const hasProperty = funcs.hasProperty;
    it('should be a function', () => {
      expect(hasProperty).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(hasProperty({ prop: 'exists' }, 'prop')).to.be.an('boolean');
    });
    it('should return true if the property exists on the object', () => {
      expect(hasProperty({ prop: 'exists' }, 'prop')).to.equal(true);
    });
  });
  describe('verifyPassword', () => {
    const verifyPassword = funcs.verifyPassword;
    it('should be a function', () => {
      expect(verifyPassword).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(verifyPassword({ password: 'pass' }, 'pass')).to.be.an('boolean');
    });
    it('should return true if the password matches the password on the user object', () => {
      expect(verifyPassword({ password: 'pass' }, 'pass')).to.equal(true);
    });
  });
  describe('updatePassword', () => {
    const updatePassword = funcs.updatePassword;
    it('should be a function', () => {
      expect(updatePassword).to.be.a('function');
    });
    it('should return an object', () => {
      expect(updatePassword({ password: 'pass' }, 'new')).to.be.an('object');
    });
    it('should return the user object with the password updated', () => {
      expect(updatePassword({ password: 'pass' }, 'new').password).to.equal(
        'new'
      );
    });
  });
  describe('addFriend', () => {
    const addFriend = funcs.addFriend;
    it('should be a function', () => {
      expect(addFriend).to.be.a('function');
    });
    it('should return an object', () => {
      expect(addFriend({ friends: ['bob', 'alice'] }, 'jen')).to.be.an(
        'object'
      );
    });
    it('should return a users object with the new friend on the friends array', () => {
      expect(
        addFriend({ friends: ['bob', 'alice'] }, 'jen').friends
      ).to.deep.equal(['bob', 'alice', 'jen']);
    });
  });
  describe('setUsersToPremium', () => {
    const setUsersToPremium = funcs.setUsersToPremium;
    it('should be a function', () => {
      expect(setUsersToPremium).to.be.a('function');
    });
    const users = [{ isPremium: false }, { isPremium: false }];
    it('should return an array', () => {
      expect(setUsersToPremium(users)).to.be.an('array');
    });
  });
  describe('sumUserPostLikes', () => {
    const sumUserPostLikes = funcs.sumUserPostLikes;
    it('should be a function', () => {
      expect(sumUserPostLikes).to.be.a('function');
    });
    it('should return a number', () => {
      expect(
        sumUserPostLikes({ posts: [{ likes: 1 }, { likes: 2 }] })
      ).to.be.an('number');
    });
  });
  describe('addCalculateDiscountPriceMethod', () => {
    const addCalculateDiscountPriceMethod =
      funcs.addCalculateDiscountPriceMethod;
    it('should be a function', () => {
      expect(addCalculateDiscountPriceMethod).to.be.a('function');
    });
    it('should return an object', () => {
      expect(addCalculateDiscountPriceMethod({})).to.be.an('object');
    });
    it('should return an object with the calculateDiscountPrice method on it', () => {
      expect(addCalculateDiscountPriceMethod({})).to.have.property(
        'calculateDiscountPrice'
      );
    });
  });
});

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
