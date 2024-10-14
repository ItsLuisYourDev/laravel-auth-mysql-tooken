/**
 * Created by Santiago Alvarez on 11/15/2015.
 */
/**
 * Created by Santiago Alvarez on 11/14/2015.
 */
'use strict';
angular.module('app.fixedmenu', [])
    .controller('FixedMenuCtrl', function ($scope, $http) {
        $( '#dl-menu' ).dlmenu({
            animationClasses : { classin : 'dl-animate-in-4', classout : 'dl-animate-out-4' }
        });
    });