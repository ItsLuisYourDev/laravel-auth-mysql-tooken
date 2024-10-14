/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
'use strict';
angular.module('app.productos_servicios', [])
    .controller('ProductosServiciosCtrl', function ($scope, $http, Provider) {
    	$(".overlay-boxify").removeClass('open');
    	$(".nav-toggle").removeClass("active");
    	
    	
        removeClassesMainMenu();
        $('#main-menu-3').addClass('main-menu-active');  
    });