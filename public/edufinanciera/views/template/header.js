/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
 'use strict';
 angular.module('app.header', [])
 .controller('HeaderCtrl', function ($scope, $http, Provider) {
 	/***************** Nav Transformicon ******************/

 	/* When user clicks the Icon */
 	$(".nav-toggle").click(function() {
 		$(this).toggleClass("active");
 		$(".overlay-boxify").toggleClass("open");
 	});

 	/* When user clicks a link */
 	$(".overlay ul li a").click(function() {
 		$(".nav-toggle").toggleClass("active");
 		$(".overlay-boxify").toggleClass("open");
 		
 	});

 	/* When user clicks outside */
 	$(".overlay").click(function() {
 		$(".nav-toggle").toggleClass("active");
 		$(".overlay-boxify").toggleClass("open");
 	});
 });