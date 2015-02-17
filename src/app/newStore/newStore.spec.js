/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'new store section', function() {
  var NewStoreCtrl, $location, $scope;

  var storeParams = { 'keyword': 'input keyword', 'name': 'input name' };

  beforeEach( module( 'ngBoilerplate.newStore' ) );

  beforeEach(inject(function ($controller, _$httpBackend_, $rootScope, _Restangular_) {
    httpBackend = _$httpBackend_;
    httpBackend.expectPOST('/stores').respond(storeParams);
    Restangular = _Restangular_;
    scope = $rootScope.$new();
    NewStoreCtrl = $controller('NewStoreCtrl', {
        $httpBackend: httpBackend,
        $scope: scope,
        Restangular: Restangular
      });
  }));

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should create a new store ', function () {
    scope.store = storeParams;

    var store = scope.saveNewStore();
    var resolvedValue;
    store.then(function (response) {
      resolvedValue = response;
    });
    httpBackend.flush();
    expect(resolvedValue.name).toEqual('input name');
  });
});

