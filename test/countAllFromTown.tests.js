
describe('countAllFromTown function', function () {
    describe('This function has two parameters, one that is a list separated by commas with registration numbers and the second the locator of any Town it return how many registration numbers are from that town.', function () {
        it('should return an integer number 2', function () {
            assert.equal(countAllFromTown("CA 123456, CY789101, CJ112131, CA 101111", "CA"), 2);

        });
    
        // it('should return a 0 when registration number list not entered.', function () {
        //     assert.equal(countAllFromTown("","CJ"),'Registration string is mising.');

        // });
        // it('should return a  "locator is mising." when locator not entered.', function () {
        //     assert.equal(countAllFromTown("CA12345",""), 'locator is mising.');

        // });
    });
});