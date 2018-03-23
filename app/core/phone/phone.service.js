'use strict';

angular
  .module('core.phone')
  .factory('Phone', ['$resource',
  function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:userId', {userId: '@id'}, {
      query: {
        method: 'GET',
        //params: {userId: 'users'},
        isArray: true
      }
    });
  }
]);
