'use strict';
angular.module('app.admin', [])
    .controller('AdminCtrl', function ($scope, $http, Provider) {
        // alert('hola mundo');
        let token = sessionStorage.getItem('token');
        console.log(token);
        $http.post('http://127.0.0.1:8000/api/ef/panel', {}, {
            headers: {
                'Authorization': 'Bearer ' + token,  // Puedes cambiar esta cabecera
                'Content-Type': 'application/json'  // Cabecera para el tipo de contenido
            }
        }).then(function (response) {
            console.log(response.data);
            // Redirigir al panel dependiendo del rol
        }, function (error) {
            console.error('Error:', error);
        });
        // URL de la API en Laravel
        // var apiUrl = 'http://127.0.0.1:8000/p';

        // // Hacer la petición GET para obtener los usuarios
        // $http.get(apiUrl).then(function(response) {
        //     const data = JSON.parse(response.data);
        //     console.log(data);
        //     let token = sessionStorage.getItem('token');
        //     // Asignar la lista de usuarios al scope
        //     // $scope.usuarios = response.data;
        //     // console.log(response.data);
        // }, function(error) {
        //     // Manejo de errores
        //     console.error('Error al obtener los usuarios:', error);
        // });
    });