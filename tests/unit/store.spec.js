
describe('Test the storeStorage', function() {

    var storage;

    beforeEach(function() {
        module('Boodschap');

        inject(function (storeStorage) {
            storage = storeStorage;
        });
    });

    it('should be defined', function() {
        expect(storage).toBeTruthy();
    });

    it('should save a store without complaining', function () {
        var newStore = {
            name: 'Appie',
            comment: 'No comment'
        };

        expect(storage.stores.length).toBe(0);
        storage.insert(newStore);
        expect(storage.stores.length).toBe(1);
    });

    it('should update a store without complaining', function () {
        var newStore = {
            name: 'Appie',
            comment: 'No comment'
        };
        storage.insert(newStore);

        var updatedStore = {
            name: 'Jumbo',
            comment: 'No comment'
        };

        storage.update(updatedStore, 0);
        expect(storage.stores.length).toBe(1);
        expect(storage.stores[0].name).toBe('Jumbo');
    });

    it('should delete an list without complaining', function () {
        var newStore = {
            name: 'Jumbo',
            comment: 'No comment'
        };
        storage.insert(newStore);
        expect(storage.stores.length).toBe(1);

        storage.delete(newStore);
        expect(storage.stores.length).toBe(0);
    });

});