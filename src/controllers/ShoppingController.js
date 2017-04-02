export default (listStorage, $scope) => {

    var lists = $scope.lists = listStorage.lists;

    $scope.showDone = false;
    
    $scope.updateItem = function (item, index, list) {
        listStorage.updateItem(item, index, lists.indexOf(list));
    }

}