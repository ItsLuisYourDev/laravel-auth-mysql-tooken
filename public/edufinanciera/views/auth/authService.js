angular.module('app')
    .factory('AuthService', function($http, $q) {
        var service = {};

        // Función para verificar si el usuario está autenticado
        service.isAuthenticated = function() {
            var deferred = $q.defer();

            // Aquí consultamos al backend si hay sesión activa
            $http.get('check_session.php')  // Reemplaza con tu ruta de backend
                .then(function(response) {
                    if (response.data.authenticated) {
                        deferred.resolve(true);
                    } else {
                        deferred.resolve(false);
                    }
                }, function(error) {
                    deferred.resolve(false);
                });

            return deferred.promise;
        };

        return service;
    });
