
describe('countAllFromTown function', function () {
    describe('This function has two parameters, one that is a list separated by commas with registration numbers and the second the locator of any Town it return how many registration numbers are from that town.', function () {
        it('should return an integer number 2', function () {
            assert.equal(countAllFromTown("CA 123456, CY789101, CJ112131, CA 101111", "CA"), 2);

        });
        it('should return a 1 number when no data entered.', function () {
            assert.equal(countAllFromTown("", ""), 1);

        });
        it('should return a 0 when registration number list not entered.', function () {
            assert.equal(countAllFromTown('CA654123', ""), 1);

        });
        it('should return a 0 when locator not entered.', function () {
            assert.equal(countAllFromTown("","CA"), 0);

        });
    });
});