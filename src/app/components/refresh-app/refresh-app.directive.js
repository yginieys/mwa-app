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
      console.log('link', controller.hidden);
      scope.$watch(controller.hidden, function(newvalue) {
        console.log('link.watch', controller.hidden);
        console.log('link.watch2', newvalue);
        if(newvalue) {
          element.slideUp();
        } else {
          element.slideDown();
        }
        
      });
    };
    
    /** @ngInject */
    function RefreshAppController($window, $timeout, $log) {
      var vm = this;
      var appCache = $window.applicationCache;
      
      vm.appCache = appCache;
      vm.hidden = false;
      
      vm.refresh = function() {
        vm.hidden = true;
        $window.location.reload();   
      };
      
      $log.debug("appCache", appCache);
      if(appCache && appCache.status !== (appCache.UNCACHED || appCache.OBSOLETE)) {
        vm.hidden = appCache.status !== appCache.UPDATEREADY;
        
        var checkForUpdates = function () {
          $log.debug('checkForUpdates()');
          appCache.update();
          // Chech every minute if a new version is available 
          $timeout(checkForUpdates, 6 * 1000);
        };
        
        appCache.addEventListener('updateready',  
          function() {
            $log.debug("updateready");
            vm.hidden = appCache.status !== appCache.UPDATEREADY;
            $log.debug( vm.hidden);                        
          });
          
        checkForUpdates();
      }            
    }
    
    return directive;
  }
    
})();
