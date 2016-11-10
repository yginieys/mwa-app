(function() {
  'use strict';

  angular
    .module('app')
    .directive('refreshApp', refreshApp);

  /** @ngInject */
  function refreshApp() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/refresh-app/refresh-app.html',      
      controller: RefreshAppController,
      controllerAs: 'ra',
      link: link
    };        
    
    function link(scope, element, attrs, controller) {
      scope.$watch(controller.hidden, function(newvalue) {
        if(newvalue) {
          element.slideUp();
        } else {
          element.slideDown();
        }
        
      });
    };
    
    /** @ngInject */
    function RefreshAppController($window, $timeout) {
      var vm = this;
      var appCache = $window.applicationCache;
      
      vm.appCache = appCache;
      vm.hidden = true;
      
      vm.refresh = function() {
        vm.hidden = true;
        $window.location.reload();   
      };
      
      if(appCache && appCache.status !== (appCache.UNCACHED && appCache.OBSOLETE)) {
        vm.hidden = appCache.status !== appCache.UPDATEREADY;
        
        var checkForUpdates = function () {
          appCache.update();
          // Chech every minute if a new version is available 
          $timeout(checkForUpdates, 6 * 1000);
        };
        
        appCache.addEventListener('updateready',  
          function() {
            vm.hidden = appCache.status !== appCache.UPDATEREADY;
          });
          
        checkForUpdates();
      }            
    }
    
    return directive;
  }
    
})();
