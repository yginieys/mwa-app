(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config(ActionServiceProvider) {
    // Defines demo module action.
    ActionServiceProvider
        .addActions([{
          'name': 'DEMO',          
          'category': 'MAIN_MENU',
          'subCategory': 'DEMO_MENU',
          'label': 'Demo',
          'priority': 20,
          'url':'/demo'
        },  {
          'name': 'CONTACT',
          'category': 'MAIN_MENU',
          'label': 'Contact',
          'priority': 30,
          'url':'/contact'
        }]);
      
    ActionServiceProvider
        .addActions([{
          'name': 'DEMO_INDEX',
          'category': 'DEMO_MENU',
          'label': 'Index',
          'priority': 10,
          'url':'/demo',
          'description': 'This sample desmontrates the use of ActionService.getActions().' 
        }, {
          'name': 'DEMO 2',
          'category': 'DEMO_MENU',
          'label': 'Demo 2',
          'priority': 20
        }]);
  }
})();
