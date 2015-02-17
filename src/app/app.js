angular.module( 'ngBoilerplate', [
  'restangular',
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.newStore',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, RestangularProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  RestangularProvider.setBaseUrl('http://api.cashcreators.honeycombits.com/');
  RestangularProvider.setDefaultHeaders({ 'Authorization': 'Basic TWF0dDpOYWdnYXI=' });
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;

