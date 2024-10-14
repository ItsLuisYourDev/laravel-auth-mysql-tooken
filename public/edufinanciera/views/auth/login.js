var app = angular.module('app.login', []);

app.controller('LoginController', function ($scope, $http) {

    $scope.email = '';
    $scope.password = '';

    $scope.login = function () {
    alert('login');
        // $http.get('http://127.0.0.1:8000/api/ef', {
        // email: $scope.email,
        // password: $scope.password
        // }).then(function (response) {
        //     // const data = JSON.parse(response.data);
        //     // console.log(data);
        //     console.log('si funciona');
        //     alert('si funciona xd');
        //     // console.log(response.data.user);
        //     // Maneja la respuesta aquí (ej. redirigir, guardar token, etc.)
        // }, function (error) {
        //     console.log('no funciona');
        //     console.error('Error:', error);
        // });
        $http.post('http://127.0.0.1:8000/api/ef/login', {
        email: $scope.email,
        password: $scope.password
        }).then(function (response) {
            console.log(response.data);
            console.log('si funciona');
            alert('si funciona xd');
            // console.log(response.data.user);
            // Maneja la respuesta aquí (ej. redirigir, guardar token, etc.)
        }, function (error) {
            console.log('no funciona');
            console.error('Error:', error);
        });
    };

    // $http.post('http://127.0.0.1:8000/api/login', {
    //     email: $scope.email,
    //     password: $scope.password
    // }).then(function (response) {
    //     // Guarda el token en localStorage
    //     localStorage.setItem('token', response.data.token);
    // });
});
