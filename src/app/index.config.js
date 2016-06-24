(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, ActionServiceProvider) {
    ActionServiceProvider
        .addActions([{
          'name': 'HOME',
          'category': 'MAIN_MENU',
          'label': 'Home',
          'priority': 10,
          'url':'/'
        }]);
  }

})();
