var assert = require('assert');
describe('Test Simple', function () {
    it('1 is 1', function () {
        assert.equal(1, 1);
    });

    it('1 + 2 is not 4', function () {
        assert.notEqual(1 + 2, 4);
    });
});