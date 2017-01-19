(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(drupal, $scope, $state) {
    var vm = this;

    vm.user = null;
    vm.loginForm = {
      username: "admin",
      password: "Th0rain1",
      error: null
    };      
    
    /*vm.currentUser = CurrentUser.getCurrentUser();
    console.log("vm.currentUser", vm.currentUser);
    */
    
    //
    // Utilisation directe de jdrupal
    //   - API de bas niveau, pas d'accès facile au propriété de l'user    
    //   - Retour d'erreur mal géré (logout => redirect. login => mauvais control d'erreur)
    //   - Pas de rafraichissement de la vue. ??
    //   
    // => Besoin d'encapsuler l'accès à drupal dans des services ad-hoc
    // 
    var connect = function() {
      drupal.connect().then(function() {
        vm.user = drupal.currentUser();
        console.log("vm.user", vm.user);
        $scope.$apply();  // Nedded to update the view
      });
    };
    
    vm.logout = function() {
      drupal.userLogout().then(
        function() {
          console.log('Logged out!');
        }, 
        function(error) {
          console.log('LOGOUT ERROR', error);
          $state.reload();
        });
    };
    
    vm.login = function() {
      vm.loginForm.error = null;
      console.log('Try to login', vm.loginForm.username, vm.loginForm.password);
      drupal.userLogin(
        vm.loginForm.username, 
        vm.loginForm.password
      ).then(
        function(data) {
          console.log('Logged in!', data);
          connect();
        },
        function(error) {
          console.log('LOGIN ERROR', error);
          vm.loginForm.error = error;
          $scope.$apply();  // Nedded to update the view
        });
    };
    
    connect();
  }
})();
