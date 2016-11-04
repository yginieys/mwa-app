(function() {
  /*global angular */
  'use strict';
  
  angular.module('app')
    .factory('ItemService', ItemService);
  
  /** @ngInject */
  function ItemService($resource) {
    var itemListResource = $resource('http://192.168.50.31/test/items/:id', 
      { id: '@id'}, 
      { 
        'get':    {
          method:'GET',
          isArray: true
        },
        'update':    {
          method:'PUT'
        }
      });          
     
    // Return public API
    return {
      get: itemListResource.get,
      save: itemListResource.save
    };
  };
})();