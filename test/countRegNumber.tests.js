describe("countRegNumber function", function () {
    describe("Count how many registration numbers are in the string", function () {

        it("should return the number 2", function () {
            assert.equal(countRegNumber('CA 42665, AA 12 RT GP'),2)
        });
        it("should return the number 1 when no registration list is entered.", function () {
            assert.equal(countRegNumber(''),1)
        });
        it("should return 1 when registration list is separated by a comma and not expected comma.", function () {
            assert.equal(countRegNumber("CA 42665. AA 12 RT GP"),1)
        });

    });

});