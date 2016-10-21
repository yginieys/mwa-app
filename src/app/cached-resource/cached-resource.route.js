(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cached-resource', {
        url: '/cached-resource',
        templateUrl: 'app/cached-resource/cached-resource.html',
        controller: 'CachedResourceSampleController',
        controllerAs: 'main'
      });
  }

})();
