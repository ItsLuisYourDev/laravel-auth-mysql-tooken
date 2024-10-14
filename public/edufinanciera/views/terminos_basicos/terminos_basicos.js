/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
'use strict';
angular.module('app.terminos_basicos', [])
    .controller('TerminosBasicosCtrl', function ($scope, $http, Provider) {
    alert('hoola');
    $(".overlay-boxify").removeClass('open');
    $(".nav-toggle").removeClass("active");

    removeClassesMainMenu();
    $('#main-menu-5').addClass('main-menu-active');
});