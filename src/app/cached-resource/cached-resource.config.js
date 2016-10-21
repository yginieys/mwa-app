(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, ActionServiceProvider) {
    ActionServiceProvider
        .addActions([{
          'name': 'RESOURCE_MENU',
          'category': 'MAIN_MENU',
          'subCategory': 'RESOURCE_MENU',
          'label': 'Sample Resources',
          'priority': 20
        }])
        .addActions([{
          'name': 'CACHED_RESOURCE_SAMPLE',
          'category': 'RESOURCE_MENU',
          'label': 'Cached resource',
          'priority': 20,
          'url':'/cached-resource'
        }]);
  }

})();
