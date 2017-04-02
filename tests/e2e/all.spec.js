describe('Boodschap interaction', function() {


    it('should add a list', function() {
        browser.get('http://inf-h.dev/');
        element(by.model('newList')).sendKeys("Test list").sendKeys(protractor.Key.ENTER);

        expect(element(by.className('listTitle')).getText()).toBe("Test list");
    });

    it('should add a store', function() {
        browser.get('http://inf-h.dev/#!/stores');
        element(by.model('newStore.name')).sendKeys("Test store");
        element(by.model('newStore.comment')).sendKeys("No comment");
        element(by.buttonText('Save')).click();

        expect(element(by.className('storeName')).getText()).toBe("Test store");
        expect(element(by.className('storeComment')).getText()).toBe("No comment");
    });
});