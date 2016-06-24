(function() {
  'use strict';

  angular
    .module('app')
    .controller('DemoController', Controller);   // "DemoController" name must be unique within mwaApp

  /** @ngInject */
  function Controller(ActionService) {
    var vm = this;

    vm.title = "Demo";
    vm.actions = ActionService.getActions('DEMO_MENU');
  }
})();
