/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
'use strict';
angular.module('app.simulador_credito', [])
    .controller('SimuladorCreditoCtrl', function ($scope, $http, Provider) {

    	$(".overlay-boxify").removeClass('open');
    	$(".nav-toggle").removeClass("active");
    	
        removeClassesMainMenu();
        $('#main-menu-6').addClass('main-menu-active');  
    });