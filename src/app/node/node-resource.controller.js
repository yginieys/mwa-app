(function() {
  'use strict';

  angular
    .module('app')
    .controller('NodeResourceController', NodeResourceController)
    .factory('NodeResource', NodeResource);

  /** @ngInject */
  function NodeResourceController(NodeResource, $scope) {
    var vm = this;
    
    vm.title = "Node with $resource";
    vm.nodeID = null;
    vm.node = null;
    vm.hello = 'hello';
    vm.error = null;
    
    vm.reset = function() {
      vm.nodeID = null;
      vm.node = null;
      vm.hello = 'hello';
      vm.error = null;
    };
    
    vm.loadNode = function() {
      vm.error = null;
      vm.node = null;
      vm.hello = 'Hi!';
      NodeResource.get(vm.nodeID).$promise.then(
        function(node) {
          console.log(node);
          vm.hello = 'Ho!';
          vm.node = node;
        }, 
        function(error) {
          vm.error = error;
        }
      );
      //vm.node = NodeResource.get(vm.nodeID);
    };
    
  }
  
  /** @ngInject */
  function NodeResource($resource) {
    var itemListResource = $resource('/node/:id?_format=json',
      {id: '@id'},
      {
        'get': {
          method: 'GET',
        }
      });

    // Return public API
    return {
      get: function(nodeId) {
        return itemListResource.get({'id': nodeId});
      }
    };

  }
})();
