export default ($scope, storeStorage) => {

    var stores = $scope.stores = storeStorage.stores;

    $scope.newStore = {
        name: '',
        comment: ''
    }

    $scope.addStore = function () {
        if($scope.newStore.name !== ''){
            storeStorage.insert($scope.newStore)
                .then(function () {
                    $scope.newStore = {
                        name: '',
                        comment: ''
                    };
                });
        }
    }
};