var app = angular.module('app.login', []);

app.controller('LoginController', function ($scope, $http) {
    $scope.email = '';
    $scope.password = '';
    $scope.login = function () {
        $http.post('http://127.0.0.1:8000/api/login', {
            email: $scope.email,
            password: $scope.password
        }).then(function (response) {
            alert('si funciona xd');
            console.log(response.data);
            // Maneja la respuesta aquí (ej. redirigir, guardar token, etc.)
        }, function (error) {
            console.error('Error:', error);
        });
    };
    $http.post('http://127.0.0.1:8000/api/login', {
        email: $scope.email,
        password: $scope.password
    }).then(function (response) {
        // Guarda el token en localStorage
        localStorage.setItem('token', response.data.token);
    });
});
