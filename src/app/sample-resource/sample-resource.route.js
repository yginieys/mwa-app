(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('sample-resource', {
        url: '/sample-resource',
        templateUrl: 'app/sample-resource/sample-resource.html',
        controller: 'SampleResourceSampleController',
        controllerAs: 'main'
      });
  }

})();
