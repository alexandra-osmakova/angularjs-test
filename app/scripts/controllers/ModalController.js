app.controller("ModalController", function ModalController(
  $uibModalInstance,
  items,
  $scope
) {
  $scope.item = items.data;
  $scope.mode = items.mode;
  $scope.addedItem = {
    title: undefined,
    Description: undefined
  };

  $scope.close = function() {
    $uibModalInstance.dismiss("cancel");
  };

  $scope.save = function() {
    $uibModalInstance.close($scope.addedItem);
  };
});
