angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal) {

	// FUNCION CREA MODAL DE LOGIN
	$rootScope.login = function() {

		if ( typeof $rootScope.modalLogin == 'undefined' ) {

			$ionicModal.fromTemplateUrl('templates/login_modal.html', {
		    scope: $scope,
		  	animation: 'slide-in-up'
		  }).then(function(modal) {
		  	
		  	$rootScope.modalLogin = modal;
		  	modal.show();
		  });
		} else {

			$rootScope.modalLogin.show();
		}
	}

	// FUNCION ELIMINAR MODAL LOGIN
	$rootScope.closeModalLogin = function() {

		$rootScope.modalLogin.remove();
		$rootScope.modalLogin = undefined;
	}
})

.controller('MenuCtrl', function($scope, $rootScope, $state) {

	// FUNCION IR A UN ESTADO DE LA APP PASANDO EL NOMBRE DEL ESTADO POR PARAMENTRO
	$rootScope.goTo = function(state) {

    	$state.go(state);
  	}
})

.controller('UsuariosCtrl', function($scope) {
  
})

.controller('BeneficiosCtrl', function($scope) {
  
})

.controller('UsuarioCtrl', function($scope) {
  
})

.controller('GastosCtrl', function($scope) {
  
});
