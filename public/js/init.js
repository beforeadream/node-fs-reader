require.config({
    baseUrl: '/',
    paths: {
        'dpd': 'dpd',
        'angular': 'js/vendors/angular/angular.min',
        'angular-route': 'js/vendors/angular-route/angular-route.min',
        'angularAMD': 'js/vendors/angularAMD/angularAMD.min',
        'adapt': 'js/vendors/adapt/assets/js/adapt.min',
        'jquery': 'js/vendors/jquery/jquery.min'
    },
    'dpd': {
        deps: ['jquery']
    },
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },
    deps: ['js/app']
});