angular.module('app.services', [])

    .factory('Provider', function ($http) {
        // Might use a resource here that returns a JSON array
        return {
            getData: function(ruta){
                return $http({
                    method: 'GET',
                    url: ruta
                }).success(function (response) {
                    return response;
                }).error(function (response, status, headers, config) {
                    //throw new Error("Fallo obtener los datos:" + status + "\n" + response);
                    return null;
                });
            }
        };

    });