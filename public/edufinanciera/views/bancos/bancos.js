/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
'use strict';
angular.module('app.bancos', [])
    .controller('BancosCtrl', function ($scope, $http, Provider) {

    	$(".overlay-boxify").removeClass('open');
    	$(".nav-toggle").removeClass("active");
    	
        removeClassesMainMenu();
        $('#main-menu-2').addClass('main-menu-active');  
    });