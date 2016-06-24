(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config(ActionServiceProvider) {          
    ActionServiceProvider
        .addActions([{
          'name': 'DEMO_NAVBAR_POSITION',
          'category': 'DEMO_MENU',
          'label': 'Navbar position',
          'priority': 20,
          'description': 'Demonstrate custom action to change navbar positioning.'
        }]);
    
    var changeNavbarPosition = function(action) {
      var navbar = angular.element("nav");
      navbar.removeClass('navbar-static-top');
      navbar.removeClass('navbar-fixed-top');
      navbar.addClass(action.navbarClass);
    };
    
    ActionServiceProvider
        .addActions([{
          'name': 'DEFAULT_NAVBAR_POSITION',
          'category': 'SECONDARY_MENU',
          'label': 'Default',
          'priority': 10,
          'action': changeNavbarPosition,
          'navbarClass': ''
        }, {
          'name': 'STATICTOP_NAVBAR_POSITION',
          'category': 'SECONDARY_MENU',
          'label': 'Static top',
          'priority': 20,
          'action': changeNavbarPosition,
          'navbarClass': 'navbar-static-top'
        }, {
          'name': 'FIXEDTOP_NAVBAR_POSITION',
          'category': 'SECONDARY_MENU',
          'label': 'Fixed top',
          'priority': 30,
          'action': changeNavbarPosition,
          'navbarClass': 'navbar-fixed-top'
        }]);
  }
})();
