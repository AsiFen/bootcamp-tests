describe("findItemsOver20 function", function () {
    describe("From a list of items it checks which quantity of an item is greater than 20", function () {

        it("should return 'You have entered an empty list.' when list is empty", function () {
            assert.equal(findItemsOver20(""),'You have entered an empty list.')
        });
        // it("should return ", function () {
        //     assert.equal(findItemsOver20("insert list with qty over20"),'will insert all the items over 20')
        // });
        // it("should return that no items with quantity over 20 found", function () {
        //     assert.equal(findItemsOver20("insert list with qty less than 20"),'No items with quantity over 20.')
        // });

    });

});