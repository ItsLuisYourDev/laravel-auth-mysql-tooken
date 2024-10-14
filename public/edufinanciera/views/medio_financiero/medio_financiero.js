/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
'use strict';
angular.module('app.medio_financiero', [])
    .controller('MedioFinancieroCtrl', function ($scope, $http, Provider) {


        $(".overlay-boxify").removeClass('open');
        $(".nav-toggle").removeClass("active");

        removeClassesMainMenu();
        $('#main-menu-4').addClass('main-menu-active');
    });