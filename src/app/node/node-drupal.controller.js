(function() {
  'use strict';

  angular
    .module('app')
    .controller('NodeDrupalController', NodeDrupalController);

  /** @ngInject */
  function NodeDrupalController(drupal, $scope) {
    var vm = this;
    
    vm.title = "Node with jDrupal";
    vm.nodeID = null;
    vm.scopeApply = false;
    vm.node = null;
    vm.hello = 'hello';
    vm.error = null;
    
    vm.reset = function() {
      vm.nodeID = null;
      vm.scopeApply = false;
      vm.node = null;
      vm.hello = 'hello';
      vm.error = null;
    };
    
    vm.loadNode = function() {
      vm.error = null;
      vm.node = null;
      vm.hello = 'Hi!';
      drupal.nodeLoad(vm.nodeID).then(
        function(node) {
          console.log(node.entity.nid);
          vm.hello = 'Ho!';
          vm.node = node;
          if(vm.scopeApply) {
            $scope.$apply();  // Needed to update the view
          }
        }, 
        function(error) {
          console.log('ERROR', error);
          vm.error = error;
          if(vm.scopeApply) {
            $scope.$apply();  // Needed to update the view
          }
        }
      );
    };
    
  }
})();
