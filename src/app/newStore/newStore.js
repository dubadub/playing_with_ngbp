
angular.module( 'ngBoilerplate.newStore', [
  'restangular',
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
    return $scope.stores.post($scope.store);
  };
})

;

