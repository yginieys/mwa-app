(function() {
  'use strict';

  angular
    .module('app')
    .controller('MongoResourceSampleController', MongoResourceSampleController);

  /** @ngInject */
  function MongoResourceSampleController(ItemService, $log) {
    var vm = this,
      emptyItem = { 
        'first_name': null, 
        'last_name': null,       
        'birthdate': new Date("1998-12-14T23:00:00.000Z"), 
        'selection': []
      };
      
    /**
     * Item selected for edition.
     */
    vm.selectedItem = angular.copy(emptyItem);
    
    /**
     * List of items to be displayed.
     */
    vm.itemList = ItemService.get();
      
    /**
     * Item selection from table callback.
     * @param {type} item
     * @returns {undefined}
     */
    vm.selectItem = function(item) {
      $log.debug('selectItem()', item);
      vm.selectedItem = item;
    };
    
    vm.save = function() {
      $log.debug('save()', vm.selectedItem);
      ItemService.save(vm.selectedItem).$promise.then(function() {
        $log.debug(' >>> saved sucessfull');
        vm.reset();
        vm.itemList = ItemService.get();
      });      
    };
    
    vm.update = function() {
      $log.debug('update()', vm.selectedItem);
      vm.selectedItem.$update();
      vm.reset();
    };
    
    vm.delete = function() {
      $log.debug('delete()', vm.selectedItem);
      vm.selectedItem.$delete().then(function() {
        $log.debug(' >>> deleted sucessfull');
        vm.reset();
        vm.itemList = ItemService.get();
      });      
    };
    
    vm.isUpdate = function() {
      return vm.selectedItem._id;
    };
    
    vm.reset = function() {
      vm.selectedItem = angular.copy(emptyItem);;
    };
  }
})();
