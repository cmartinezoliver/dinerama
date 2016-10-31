angular.module('starter.config', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.usuarios', {
    url: '/usuarios',
    views: {
      'menuContent': {
        templateUrl: 'templates/usuarios.html',
        controller: 'UsuariosCtrl'
      }
    }
  })

  .state('app.usuarioActivo', {
    url: '/usuario',
    views: {
      'menuContent': {
        templateUrl: 'templates/usuario.html',
        controller: 'UsuarioCtrl'
      }
    }
  })

  .state('app.beneficios', {
      url: '/beneficios',
      views: {
        'menuContent': {
          templateUrl: 'templates/beneficios.html',
          controller: 'BeneficiosCtrl'
        }
      }
    })
    
  .state('app.gastos', {
    url: '/gastos',
    views: {
      'menuContent': {
        templateUrl: 'templates/gastos.html',
        controller: 'GastosCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/usuarios');
});