(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('mongo-resource', {
        url: '/mongo-resource',
        templateUrl: 'app/mongo-resource/mongo-resource.html',
        controller: 'MongoResourceSampleController',
        controllerAs: 'main'
      });
  }

})();
