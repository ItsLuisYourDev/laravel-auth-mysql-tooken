var app = angular.module('app.login', []);

app.controller('LoginController', function ($scope, $http) {

    $scope.email = '';
    $scope.password = '';

    $scope.login = function () {
    alert('login');
        $http.post('http://127.0.0.1:8000/api/ef/login', {
        email: $scope.email,
        password: $scope.password
        }).then(function (response) {
            console.log(response.data);
        // Redirigir al panel dependiendo del rol
        if (response.data.role === 'efadmin') {
            window.location.href = '/edufinanciera/#!/admin'; // Ajusta según tu ruta
            sessionStorage.setItem('token', response.data.token);
            localStorage.setItem('token', response.data.token);
        } else {
            window.location.href = '/user-panel'; // Ajusta según tu ruta
        }
        }, function (error) {
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
