(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, ActionServiceProvider) {
    ActionServiceProvider
      .addActions([{
          'name': 'MONGO_RESOURCE',
          'category': 'MAIN_MENU',
          'label': 'Mongo Resource',
          'priority': 40,
          'url': '/mongo-resource'
        }]);
  }

})();
