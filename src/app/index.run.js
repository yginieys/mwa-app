(function () {
  'use strict';

  angular
    .module('app')
    .run(onlineFlag);

  /** @ngInject */
  function onlineFlag($window, $rootScope) {

    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
      $rootScope.$apply(function () {
        $rootScope.online = false;
      });
    }, false);

    $window.addEventListener("online", function () {
      $rootScope.$apply(function () {
        $rootScope.online = true;
      });
    }, false);
  }

})();
