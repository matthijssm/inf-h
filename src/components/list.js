var ctrl = function ($scope, listStorage, storeStorage) {

    var list, index, stores;
    this.$onInit = function() {
        list = $scope.list = this.list;
        index = this.index;
        storeStorage.get().then(function () {
            stores = $scope.stores = storeStorage.stores;
        });
    }

    $scope.editable = false;

    $scope.deleteList = function (list) {
        listStorage.delete(list);
    }

    $scope.editList = function (keyEvent) {
        if (keyEvent.which === 13){
            if(list.title !== ''){
                listStorage.update(list, index)
                    .then(function () {
                        $scope.editable = false;
                    });

            }
        }
    }

    $scope.newItem = {
        name: '',
        done: false,
    };

    $scope.selectedStore = '-1';

    $scope.storeItem = function (keyEvent) {
        if (keyEvent.which === 13){
            if($scope.newItem.name !== '' && $scope.selectedStore != -1){
                var newItem = {
                    name: $scope.newItem.name,
                    done: false,
                    store: storeStorage.stores[$scope.selectedStore],
                }

                listStorage.insertItem(newItem, index).then(function () {
                    $scope.newItem.name = '';
                });
            }
        }
    }
    
    $scope.updateItem = function (item, i) {
        listStorage.updateItem(item, i, index);
    }

    $scope.deleteDone = function () {
        var toDelete = [];
        for (var i = 0; i < list.items.length; i++) {
            if(list.items[i].done){
                toDelete.push(list.items[i]);
            }
        }

        for (var i = 0; i < toDelete.length; i++) {
            list.items.splice(list.items.indexOf(toDelete[i]),1);
        }

        listStorage.update(list, index);
    }

}

export default {
    templateUrl: '/views/components/list.html',
    bindings: {
        list: '<',
        index: '<',
    },
    controller: ctrl,
}