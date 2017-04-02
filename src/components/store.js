var ctrl = function ($scope, storeStorage) {
    var store, index;
    this.$onInit = function() {
        store = $scope.store = this.store;
        index = this.index;
    }

    $scope.editable = false;

    $scope.deleteStore = function (store) {
        storeStorage.delete(store);
    }

    $scope.updateStore = function (store) {
        if(store.name !== ''){
            storeStorage.update(store, index).then(function () {
                $scope.editable = false;
            });

        }
    }
}

export default {
    template: '<div class="well well-lg">' +
    '<div class="row">' +
        '<div class="col-sm-5">' +
            '<strong ng-show="!editable" class="storeName">{{ store.name }}</strong>' +
            '<input type="text" ng-model="store.name"  class="form-control" ng-show="editable">' +
        '</div>' +
        '<div class="col-sm-5">' +
            '<span ng-show="!editable" class="storeComment">{{ store.comment }}</span>' +
            '<input type="text" ng-model="store.comment" class="form-control"  ng-show="editable">' +
        '</div>' +
        '<div class="col-sm-2 col-xs-12">' +
            '<button class="btn  btn-info btn-sm" ng-click="editable = true" ng-show="!editable">Edit</button> ' +
            '<button class="btn btn-block btn-success btn-sm" ng-show="editable" ng-click="updateStore(store)">Save</button>' +
            '<span ng-show="!editable">&nbsp;<button class="btn btn-danger btn-sm" ng-click="deleteStore(store)">Delete</button></span>' +
        '</div>' +
    '</div>' +
    '</div>',
    controller: ctrl,
    bindings: {
        store: '<',
        index: '@',
    }
}