define(['js/app'], function (app) {

    app.register.controller('fileCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

        $scope.getFile = (function(){
            $http.get('/uploads/'+ $routeParams.id ).success(function(metadata){
                $scope.metadata = metadata;
            });
        })();

    }]);

});
