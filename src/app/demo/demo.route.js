(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('demo', {
        url: '/demo',
        templateUrl: 'app/demo/demo.html',
        controller: 'DemoController',
        controllerAs: 'demo'
      });
  }

})();
