(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

// The angular-drupal configuration settings for my simple app.
angular.module('angular-drupal').config(function($provide) {

  $provide.value('drupalSettings', {
    sitePath: 'http://drupal8.loc:3000'
  });

});

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
