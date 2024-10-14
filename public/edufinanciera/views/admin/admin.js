'use strict';
angular.module('app.admin', [])
    .controller('AdminCtrl', function ($scope, $http, Provider) {
        // alert('hola mundo');
            // URL de la API en Laravel
    var apiUrl = 'http://127.0.0.1:8000/p';

    // Hacer la petición GET para obtener los usuarios
    $http.get(apiUrl).then(function(response) {
        const data = JSON.parse(response.data);
        console.log(data);
        // Asignar la lista de usuarios al scope
        // $scope.usuarios = response.data;
        // console.log(response.data);
    }, function(error) {
        // Manejo de errores
        console.error('Error al obtener los usuarios:', error);
    });
    });