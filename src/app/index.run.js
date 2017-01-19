(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, drupal) {
    /*drupal.nodeLoad(11).then(function(node) {
      alert(node.label());
    });*/
    $log.debug('runBlock end');
  }

})();
