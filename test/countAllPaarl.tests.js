
describe('countAllPaarl function', function () {
    describe('This function has two parameters, one that is a list separated by commas with registration numbers and the second the locator of any Town it return how many registration numbers are from that town.', function () {
        it('should return an integer number 2', function () {
            assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);

        });
        it('should return a 0 number when no data entered.', function () {
            assert.equal(countAllPaarl(""), 0);

        });
        it('should return a 0 when locator is at end of string.', function () {
            assert.equal(countAllPaarl("1234 CJ"), 0);

        });
    });
});