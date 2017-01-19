(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig)
    .config(menuConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('view', {
        url: '/view',
        templateUrl: 'app/view/view.html',
        controller: 'ViewDrupalController',
        controllerAs: 'main'
      })
      .state('view-resource', {
        url: '/view-resource',
        templateUrl: 'app/view/view.html',
        controller: 'ViewResourceController',
        controllerAs: 'main'
      });
  }
  
  /** @ngInject */
  function menuConfig(ActionServiceProvider) {
    ActionServiceProvider
     .addActions([{
          'name': 'VIEW_MENU',
          'category': 'MAIN_MENU',
          'subCategory': 'VIEW_MENU',
          'label': 'View',
          'priority': 30
        }])
        .addActions([{
          'name': 'VIEW',
          'category': 'VIEW_MENU',
          'label': 'With jDrupal',
          'priority': 10,
          'url':'/view'
        }])
        .addActions([{
          'name': 'VIEW_RES',
          'category': 'VIEW_MENU',
          'label': 'With $resource',
          'priority': 20,
          'url':'/view-resource'
        }]);
  }

})();
