/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
'use strict';
angular.module('app.presupuesto_familiar', [])
    .controller('PresupuestoFamiliarCtrl', function ($scope, $http, Provider) {
    	$(".overlay-boxify").removeClass('open');
    	$(".nav-toggle").removeClass("active");
    	
    	
        removeClassesMainMenu();
        $('#main-menu-7').addClass('main-menu-active');  
    });
