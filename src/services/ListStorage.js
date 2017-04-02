export default ($q) => {

    var STORAGE_ID = 'lists';

    var store = {
        lists: [],

        _getFromLocalStorage: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        _saveToLocalStorage: function (lists) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(lists));
        },

        insert: function (list) {
            var deferred = $q.defer();

            store.lists.push(list);

            store._saveToLocalStorage(store.lists);
            deferred.resolve(store.lists);

            return deferred.promise;
        },


        get: function () {
            var deferred = $q.defer();

            store.lists = store._getFromLocalStorage();
            deferred.resolve(store.lists);

            return deferred.promise;
        },
        
        delete: function (list) {
            var deferred = $q.defer();

            store.lists.splice(store.lists.indexOf(list), 1);

            store._saveToLocalStorage(store.lists);
            deferred.resolve(store.lists);

            return deferred.promise;
        },

        update: function (list, index) {
            var deferred = $q.defer();

            store.lists[index] = list;

            store._saveToLocalStorage(store.lists);
            deferred.resolve(store.lists);

            return deferred.promise;
        },

        insertItem: function (item, listIndex) {
            var deferred = $q.defer();

            store.lists[listIndex].items.push(item);

            store._saveToLocalStorage(store.lists);
            deferred.resolve(store.lists);

            return deferred.promise;
        },

        updateItem: function (item, index, listIndex) {
            var deferred = $q.defer();

            store.lists[listIndex].items[index] = item;

            store._saveToLocalStorage(store.lists);
            deferred.resolve(store.lists);

            return deferred.promise;
        }

    };

    return store;
}