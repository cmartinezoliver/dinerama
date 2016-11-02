angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $ionicPopup) {

	// CREAR MODAL DE LOGIN
	$rootScope.createModalLogin = function() {

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

	// ELIMINAR MODAL LOGIN
	$rootScope.closeModalLogin = function() {

		$rootScope.modalLogin.remove();
		$rootScope.modalLogin = undefined;
	}

	// LOGUEO DE LA APP
	$rootScope.login = function() {

		$rootScope.logedIn = true;
		$rootScope.closeModalLogin();
	}

	// DESLOGUEO DE LA APP
	$rootScope.logout = function() {

		setTimeout(function(){ // NECESARIO PARA QUE CIERRE EL MENU LATERAL CORRECTAMENTE

			$rootScope.logedIn = false;
			$ionicPopup.alert({
		     	title: 'Correcto',
		    	template: 'Has salido correctamente, ¡vuelve pronto!'
		   	});
		}, 300)
	}
})

.controller('MenuCtrl', function($scope, $rootScope, $state) {

	// IR A UN ESTADO DE LA APP PASANDO EL NOMBRE DEL ESTADO POR PARAMETRO
	$rootScope.goTo = function(state) {

    	$state.go(state);
  	}
})

.controller('UsuariosCtrl', function($scope) {
  	
  	// AÑADIR NUEVO USUARIO
  	$scope.addUser = function() {

  		console.log('ADD USER');
  		$scope.users.push({'name': 'Roberto', 'cash': 300})
  	}

  	// USUARIOS TEMP
  	$scope.users = [];

  	$scope.users.push({'name': 'Antonio', 'cash': 65})
})

.controller('BeneficiosCtrl', function($scope) {
  
})

.controller('UsuarioCtrl', function($scope) {
  
})

.controller('GastosCtrl', function($scope) {
  
});
