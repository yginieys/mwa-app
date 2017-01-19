(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig)
    .config(menuConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('node', {
        url: '/node',
        templateUrl: 'app/node/node.html',
        controller: 'NodeDrupalController',
        controllerAs: 'main'
      })
      .state('node-resource', {
        url: '/node-resource',
        templateUrl: 'app/node/node.html',
        controller: 'NodeResourceController',
        controllerAs: 'main'
      });
  }
  
  /** @ngInject */
  function menuConfig(ActionServiceProvider) {
    ActionServiceProvider
     .addActions([{
          'name': 'NODE_MENU',
          'category': 'MAIN_MENU',
          'subCategory': 'DRUPAL_MENU',
          'label': 'Node',
          'priority': 20
        }])
        .addActions([{
          'name': 'NODE',
          'category': 'DRUPAL_MENU',
          'label': 'With jDrupal',
          'priority': 10,
          'url':'/node'
        }])
        .addActions([{
          'name': 'NODE_RES',
          'category': 'DRUPAL_MENU',
          'label': 'With $resource',
          'priority': 20,
          'url':'/node-resource'
        }]);
  }

})();
