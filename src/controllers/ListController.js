export default ($scope, listStorage) => {

    var lists = $scope.lists = listStorage.lists;

    $scope.newList = '';

    $scope.addList = function (keyEvent) {
        if (keyEvent.which === 13){
            if($scope.newList !== ''){

                var newList = {
                    title: $scope.newList.trim(),
                    items: [],
                }

                listStorage.insert(newList)
                    .then(function () {
                        $scope.newList = '';
                    });

            }
        }
    }


}