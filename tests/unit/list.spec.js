
describe('Test the listStorage', function() {

    var storage;

    beforeEach(function() {
        module('Boodschap');

        inject(function (listStorage) {
            storage = listStorage;
        });
    });

    it('should be defined', function() {
        expect(storage).toBeTruthy();
    });

    it('should save an list without complaining', function () {
        var newList = {
            title: 'Test list',
            items: []
        };

        expect(storage.lists.length).toBe(0);
        storage.insert(newList);
        expect(storage.lists.length).toBe(1);
    });

    it('should update an list without complaining', function () {
        var newList = {
            title: 'Test list',
            items: []
        };
        storage.insert(newList);

        var updatedList = {
            title: 'Updated title',
            items: []
        };

        storage.update(updatedList, 0);
        expect(storage.lists.length).toBe(1);

        expect(storage.lists[0].title).toBe('Updated title');
    });

    it('should delete an list without complaining', function () {
        var newList = {
            title: 'Test list',
            items: []
        };
        storage.insert(newList);
        expect(storage.lists.length).toBe(1);

        storage.delete(newList);
        expect(storage.lists.length).toBe(0);
    });

    it('should store an item in a list without complaining', function () {
        var newList = {
            title: 'Test list',
            items: []
        };
        storage.insert(newList);
        expect(storage.lists.length).toBe(1);

        var newItem = {
            name: 'Test item',
            store: {
                name: 'Appie',
                comment: 'Jwz'
            }
        }

        storage.insertItem(newItem, 0);
        expect(storage.lists[0].items.length).toBe(1);
    });

    it('should update an item in a list without complaining', function () {
        var newList = {
            title: 'Test list',
            items: []
        };
        storage.insert(newList);
        expect(storage.lists.length).toBe(1);

        var newItem = {
            name: 'Test item',
            done: false,
            store: {
                name: 'Appie',
                comment: 'Jwz'
            }
        }

        storage.insertItem(newItem, 0);
        expect(storage.lists[0].items.length).toBe(1);

        var updatedItem = {
            name: 'Test item',
            done: true,
            store: {
                name: 'Appie',
                comment: 'Jwz'
            }
        }

        storage.updateItem(updatedItem, 0, 0);

        expect(storage.lists[0].items[0].done).toBeTruthy();

    });

});