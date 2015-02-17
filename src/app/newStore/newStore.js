
angular.module( 'ngBoilerplate.newStore', [
  'restangular',
  'ngSanitize',
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'newStore', {
    url: '/new-store',
    views: {
      "main": {
        controller: 'NewStoreCtrl',
        templateUrl: 'newStore/newStore.tpl.html'
      }
    },
    data:{ pageTitle: 'New store' }
  });
})

.controller( 'NewStoreCtrl', function NewStoreCtrl( $scope, Restangular ) {
  $scope.stores = Restangular.all('stores');

  $scope.store = {};

  $scope.saveNewStore = function () {
    var promise = $scope.stores.post({ data: $scope.store });

    $scope.isProcessing = true;
    $scope.isSuccessful = false;
    delete $scope.error;

    promise.then(function (response) {
      $scope.store = {};
      $scope.isSuccessful = true;
    }, function (error) {
      $scope.error = error.data;
    })
    .finally(function () {
      $scope.isProcessing = false;
    });

    return promise;
  };
})

;

