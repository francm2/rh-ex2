'use strict';

describe('userList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('userList'));

  // Test the controller
  describe('UserListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users')
                  .respond([{username: 'Bret'}, {username: 'Kamren'}]);

      ctrl = $componentController('userList');
    }));

    it('should create a users property with 2 users fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.users).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.users).toEqual([{username: 'Bret'}, {username: 'Kamren'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('name');
    });

  });

});
