export default ($locationProvider, $stateProvider, $urlRouterProvider) => {

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/lists');

    const listState = {
        url: '/lists',
        name: 'lists',
        templateUrl: '/views/lists.html',
        controller: 'ListController',
        resolve: {
            store: function (listStorage) {
                    listStorage.get();
                    return listStorage;
            }
        }
    }

    const storeState = {
        url: '/stores',
        name: 'stores',
        templateUrl: '/views/stores.html',
        controller: 'StoreController',
        resolve: {
            store: function (storeStorage) {
                storeStorage.get();
                return storeStorage;
            }
        }
    }

    const shoppingState = {
        url: '/shopping',
        name: 'shopping',
        templateUrl: '/views/shopping.html',
        controller: 'ShoppingController',
        resolve: {
            store: function (listStorage) {
                listStorage.get();
                return listStorage;
            }
        }
    }

    $stateProvider.state(listState);
    $stateProvider.state(storeState);
    $stateProvider.state(shoppingState);
}