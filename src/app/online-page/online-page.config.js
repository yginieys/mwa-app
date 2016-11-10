(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  var goToOnline = function(action) {
    location.pathname = "/online-only.html";
  };
    
  /** @ngInject */
  function config($logProvider, ActionServiceProvider) {    
    
    ActionServiceProvider
      .addActions([{
          'name': 'ONLINE_MENU',
          'category': 'MAIN_MENU',
          'label': 'Online page',
          'priority': 30,
          'action': goToOnline
        }]);
  }

})();
