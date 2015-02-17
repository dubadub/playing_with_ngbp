
angular.module( 'ngBoilerplate.newStore', [
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

.controller( 'NewStoreCtrl', function NewStoreCtrl( $scope ) {
})

;

