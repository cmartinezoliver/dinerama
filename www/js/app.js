// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.config'])

.run(function($ionicPlatform, $state, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.balanceTotal = 30; // BALANCE TOTAL GLOBAL
  $rootScope.moneda = '€'; // MONEDA GLOBAL

  // DECIDIR SI ES UN BALANCE POSITIVO O NEGATIVO
  $rootScope.tipoBalance = function() {

    if ( $rootScope.balanceTotal >= 0 ) {

      $rootScope.positivo = true;
    } else {

      $rootScope.positivo = false;
    }
  }();

  $rootScope.logedIn = false; // VARIABLE MOMENTANEAMENTE TRUE PARA LOGUEO
});
