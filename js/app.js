var webApp = angular.module('webApp', [
    'ngRoute',
    'ngAnimate',
    'ui.router',
    'toastr',
    'bw.paging',
    'chieffancypants.loadingBar'
]);

webApp.config(function ($routeProvider) {
    $routeProvider.when('/test', {
        templateUrl: 'test.html',
        controller:'testController'
    }).otherwise({
            redirectTo: '/statisticsList'
        }
    );
}).config(function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});