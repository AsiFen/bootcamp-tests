describe("findItemsOver function", function () {
    describe("Returns all items from a list whose quantityis greater than the given threshold.", function () {

        // it("should return a 'No items had quantities over the threshold.' when threshold of a 100 is entered", function () {
        //     assert.equal(findItemsOver("", "100"),'No items had quantities over the threshold.')
        // });
        // it("should return a   when a threshold of 20 is entered.", function () {
        //     assert.equal(findItemsOver("", "20"),'')
        // });
        it("should return 'You have entered an empty list.' when list entered is empty", function () {
            assert.equal(findItemsOver("", ""),'You have entered an empty list.')
        });

    });

});