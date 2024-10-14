'use strict';
angular.module('app', ['app.login','app.admin','app.header','app.home', 'app.bancos', 'app.productos_servicios', 'app.medio_financiero', 'app.terminos_basicos','app.simulador_credito', 'app.presupuesto_familiar', 'app.preguntas_frecuentes', 'app.fixedmenu', 'app.services', 'ui.router']);
angular.module('app').config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('index',{
            url: '/',
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl'
        })
        .state('bancos',{
            url: '/bancos',
            templateUrl: 'views/bancos/bancos.html',
            controller: 'BancosCtrl'
        })
        .state('productos_servicios',{
            url: '/productos_servicios',
            templateUrl: 'views/productos_servicios/productos_servicios.html',
            controller: 'ProductosServiciosCtrl' 
        })
        .state('medio_financiero',{
            url: '/medio_financiero',
            templateUrl: 'views/medio_financiero/medio_financiero.html',
            controller: 'MedioFinancieroCtrl' 
        })
        .state('terminos_basicos',{
            url: '/terminos_basicos',
            templateUrl: 'views/terminos_basicos/terminos_basicos.html',
            controller: 'TerminosBasicosCtrl' 
        })
        .state('simulador_credito',{
            url: '/simulador_credito',
            templateUrl: 'views/simulador/simulador_credito.html',
            controller: 'SimuladorCreditoCtrl' 
        })
	    .state('presupuesto_familiar',{
            url: '/presupuesto_familiar',
            templateUrl: 'views/presupuesto_familiar/presupuesto_familiar.html',
            controller: 'PresupuestoFamiliarCtrl'
        })
        .state('preguntas_frecuentes',{
            url: '/preguntas_frecuentes',
            templateUrl: 'views/preguntas_frecuentes/preguntas_frecuentes.html',
            controller: 'PreguntasFrecuentesCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin/admin.html', // Ruta para tu panel de administración
            controller: 'AdminCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/auth/login.html', // Ruta para tu panel de administración
            controller: 'LoginController'
        })
        .state('404',{
            url: '/404',
            templateUrl: 'views/404/404.html'
        });
        
    $urlRouterProvider.otherwise('/');
});

angular.module('app').controller('mainController', function($scope, $location) {
    // Función para determinar si es la ruta de admin
    $scope.isAdminRoute = function() {
        // Comprobamos si la ruta actual contiene '/admin'
        return $location.path().startsWith('/admin');
    };
});