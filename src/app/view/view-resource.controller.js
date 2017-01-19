(function() {
  'use strict';

  angular
    .module('app')
    .controller('ViewResourceController', ViewResourceController)
    .factory('ListeSupport', ListeSupport);

  /** @ngInject */
  function ViewResourceController(ListeSupport) {
    var vm = this;
    
    vm.title = "View with $resource";
    vm.viewURL = ListeSupport.getPath();
    vm.results = null;
    vm.error = null;
    
    vm.loadView = function () {
      vm.error = null;
      vm.results = null;
      ListeSupport.viewsLoad().$promise.then(
        function (view) {
          vm.results = view;
        },
        function(error) {
          vm.error = error;          
        });
    };    
  };
  
  /** @ngInject */
  function ListeSupport($resource) {
    var path = 'rest/liste-support';
    var viewResource = $resource(path,
      {},
      {
        'get': {
          method: 'GET',
          isArray: true
        }
      });

    // Return public API
    return {
      getPath : function() {
        return path;
      },
      viewsLoad: function() {
        return viewResource.get();
      }
    };
  };
})();
