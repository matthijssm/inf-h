export default ($q) => {
    var STORAGE_ID = 'stores';

    var store = {
        stores: [],

        _getFromLocalStorage: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        _saveToLocalStorage: function (stores) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(stores));
        },

        get: function () {
            var deferred = $q.defer();

            store.stores = store._getFromLocalStorage();
            deferred.resolve(store.stores);

            return deferred.promise;
        },

        insert: function (shop) {
            var deferred = $q.defer();

            store.stores.push(shop);
            store._saveToLocalStorage(store.stores);
            deferred.resolve(store.stores);

            return deferred.promise;
        },

        delete: function (shop) {
            var deferred = $q.defer();

            store.stores.splice(store.stores.indexOf(shop), 1);

            store._saveToLocalStorage(store.stores);
            deferred.resolve(store.stores);

            return deferred.promise;
        },

        update: function (shop, index) {
            var deferred = $q.defer();

            store.stores[index] = shop;

            store._saveToLocalStorage(store.stores);
            deferred.resolve(store.stores);

            return deferred.promise;
        }
    }

    return store;
}