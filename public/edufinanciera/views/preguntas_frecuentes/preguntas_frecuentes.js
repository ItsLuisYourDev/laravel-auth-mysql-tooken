/**
 * 
 */
'use strict';
angular.module('app.preguntas_frecuentes', [])
    .controller('PreguntasFrecuentesCtrl', function ($scope, $http, Provider) {
    	$(".overlay-boxify").removeClass('open');
    	$(".nav-toggle").removeClass("active");
    	
    	
        removeClassesMainMenu();
        $('#main-menu-3').addClass('main-menu-active');  
    });