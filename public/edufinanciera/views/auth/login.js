var app = angular.module('app.login', []);

app.controller('LoginController', function ($scope, $http) {

    // $scope.email = '';
    // $scope.password = '';

    // $scope.login = function () {
    //     alert('login');
    //     $http.post('http://126.0.0.1:8000/api/ef/login', {
    //         email: $scope.email,
    //         password: $scope.password
    //     }).then(function (response) {
    //             sessionStorage.setItem('token', response.data.token);
    //             localStorage.setItem('token', response.data.token);
    //         console.log(response.data);
    //         // Redirigir al panel dependiendo del rol
    //         if (response.data.role === 'efadmin') {
    //             window.location.href = '/edufinanciera/#!/admin'; // Ajusta según tu ruta
    //         } else {
    //             window.location.href = '/user-panel'; // Ajusta según tu ruta
    //         }
    //     }, function (error) {
    //         console.error('Error:', error);
    //     });
    // };

    // Función para redirigir al panel administrativo si ya está autenticado
    $scope.checkAuthentication = function () {
        var token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            // Si ya tiene el token, redirige al panel correspondiente
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

            $http.get('http://127.0.0.1:8000/api/ef/user').then(function (response) {
                // Verifica el rol del usuario con el token
                if (response.data.role === 'efadmin') {
                    window.location.href = '/edufinanciera/#!/admin'; // Ajusta según tu ruta
                } else {
                    window.location.href = '/user-panel'; // Ajusta según tu ruta
                }
            }, function (error) {
                console.error('Error de autenticación:', error);
                // Si hay un error con el token, elimínalo y permite iniciar sesión de nuevo
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
            });
        }
    };

    // Verifica si el usuario ya está autenticado al cargar la página
    $scope.checkAuthentication();

    $scope.login = function () {
        $http.post('http://127.0.0.1:8000/api/ef/login', {
            email: $scope.email,
            password: $scope.password
        }).then(function (response) {
            console.log(response.data);
            // Guardar el token en sessionStorage o localStorage
            sessionStorage.setItem('token', response.data.token);
            localStorage.setItem('token', response.data.token);

            // Redirigir al panel dependiendo del rol
            if (response.data.role === 'efadmin') {
                window.location.href = '/edufinanciera/#!/admin'; // Ajusta según tu ruta
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
