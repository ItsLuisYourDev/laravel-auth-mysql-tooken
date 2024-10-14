/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
 'use strict';
 angular.module('app.home', [])
 .controller('HomeCtrl', function ($scope, $http, Provider) {

    $(".overlay-boxify").removeClass('open');
    $(".nav-toggle").removeClass("active");
    /***************** Waypoints ******************/

    // $('.wp1').waypoint(function() {
    //     $('.wp1').addClass('animated fadeInLeft');
    // }, {
    //     offset: '75%'
    // });
    // $('.wp2').waypoint(function() {
    //     $('.wp2').addClass('animated fadeInRight');
    // }, {
    //     offset: '75%'
    // });
    // $('.wp3').waypoint(function() {
    //     $('.wp3').addClass('animated bounceInLeft');
    // }, {
    //     offset: '75%'
    // });
    // $('.wp4').waypoint(function() {
    //     $('.wp4').addClass('animated fadeInDown');
    // }, {
    //     offset: '75%'
    // });
    // $('.wp5').waypoint(function() {
    //     $('.wp5').addClass('animated bounceInLeft');
    // }, {
    //     offset: '75%'
    // });




    $scope.data;
    var provider = Provider.getData("data/home/data_home.js");
    provider.then(function(result){
        $scope.data = result.data;
    });

    removeClassesMainMenu();
    $('#main-menu-1').addClass('main-menu-active');

    // reziseSection();
    // $(window).resize(function () {
    //     reziseSection();
    // });    

      /*  $( '#dl-menu' ).dlmenu({
            animationClasses : { classin : 'dl-animate-in-4', classout : 'dl-animate-out-4' }
        });*/

$('#btnSection0').addClass('waypoint-nav');
var waypointSection1 = new Waypoint({
    element: document.getElementById('section1'),
    handler: function(direction) {
        console.log('Home 1');
        removeClasses();
        $('#btnSection1').addClass('currentSection');
    }
});
var waypointSection2 = new Waypoint({
    element: document.getElementById('section2'),
    handler: function(direction) {
        console.log('Home 2');
        removeClasses();
        $('#btnSection2').addClass('currentSection');
    }
});
var waypointSection3 = new Waypoint({
    element: document.getElementById('section3'),
    handler: function(direction) {
        console.log('Home 3');
        removeClasses();
        $('#btnSection3').addClass('currentSection');
    }
});
var waypointSection4 = new Waypoint({
    element: document.getElementById('section4'),
    handler: function(direction) {
        console.log('Home 4');
        removeClasses();
        $('#btnSection4').addClass('currentSection');
    }
});
var waypointSection5 = new Waypoint({
    element: document.getElementById('section5'),
    handler: function(direction) {
        console.log('Home 5');
        removeClasses();
        $('#btnSection4').addClass('currentSection');
    }
});
});