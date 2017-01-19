(function() {
  'use strict';

  angular
    .module('app')
    .controller('ViewDrupalController', ViewDrupalController);

  /** @ngInject */
  function ViewDrupalController(drupal, $scope) {
    var vm = this;
    
    vm.title = "View with jDrupal";
    vm.viewURL = "rest/liste-support";
    vm.results = null;
    vm.error = null;
    
    vm.loadView = function () {
      vm.error = null;
      vm.results = null;
      drupal.viewsLoad(vm.viewURL).then(
        function (view) {
          vm.results = view.getResults();
          if (vm.scopeApply) {
            $scope.$apply();  // Nedded to update the view
          }
        },
        function(error) {
          console.log('ERROR', error);
          vm.error = error;
          if(vm.scopeApply) {
            $scope.$apply();  // Nedded to update the view
          }
        });
    };
    
  }
})();
