(function() {
  /*global angular */
  'use strict';

  angular.module('drupalHelper')
    .factory('CurrentUser', CurrentUser);

  /** @ngInject */
  function CurrentUser(drupal, $log) {
    var currentUser = null;
    
    var getCurrentUser = function() {
      // TODO
    };
    
    // Return public API
    return {
      getCurrentUser: getCurrentUser
    };
  };
})();
