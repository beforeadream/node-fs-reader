define(['js/app'], function (app) {

    app.register.controller('landingCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.getFiles = (function(){
            $http.get('/uploads').success(function(files){
                $scope.files = files;
            });
        })();

    }]);

});
