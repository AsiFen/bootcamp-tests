//var assert = require('assert');

describe('Greet function', function () {
  describe('This function greets a user with hello and their name', function () {
    it('should send a Hello and your name', function () {
      assert.equal(greet("Asiphe"), "Hello, Asiphe");

    });
    it('should return false if there is no name greeted', function () {
      assert.equal(greet(""),false );

    });
    it('should return Hello, 123 when integer number greeted', function () {
      assert.equal(greet(123), "Hello, 123");

    });

  });
});