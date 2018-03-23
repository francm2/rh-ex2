'use strict';

describe('User', function() {
  var $httpBackend;
  var User;
  var userData = [
    {name: 'User X'},
    {name: 'User Y'},
    {name: 'User Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `User` service before each test
  beforeEach(module('core.user'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _userService_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(userData);

    User = _userService_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the user data from `http://jsonplaceholder.typicode.com/users`', function() {
    var users = User.query();

    expect(users).toEqual([]);

    $httpBackend.flush();
    expect(users).toEqual(userData);
  });

});
