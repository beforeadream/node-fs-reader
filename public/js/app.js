define(['angularAMD', 'angular-route'], function (angularAMD) {

    var app = angular.module("nodefsreader", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/landing", angularAMD.route({
                templateUrl: 'views/landing.html',
                controller: 'landingCtrl',
                controllerUrl: 'controllers/landing'
            }))
            .when('/file/:id', angularAMD.route({
                templateUrl: 'views/file.html',
                controller:  'fileCtrl',
                controllerUrl: 'controllers/file'
            }))
            .otherwise({redirectTo: "/landing"});
    });

    angularAMD.bootstrap(app);

    return app;
});