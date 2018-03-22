'use strict';

angular.
module('core.phone').
factory('Phone', ['$resource',
  function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/:userId', {}, {
      query: {
        method: 'GET',
        params: {userId: 'users'},
        isArray: true
      }
    });
  }
]);


// MF original code
// 'use strict';
//
// angular.
//   module('core.phone').
//   factory('Phone', ['$resource',
//     function($resource) {
//       return $resource('phones/:phoneId.json', {}, {
//         query: {
//           method: 'GET',
//           params: {phoneId: 'phones'},
//           isArray: true
//         }
//       });
//     }
//   ]);
