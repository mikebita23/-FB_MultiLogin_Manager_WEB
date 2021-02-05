var routesApp = angular.module('routesApp', [
    'ngRoute',
    'jsonProjects'
  ]);
   
  routesApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: '../templates/pages/index.html',
        }).
        when('/list', {
          templateUrl: '../templates/pages/list.html',
          controller: 'ProjectListCtrl'
        }).
        otherwise({
          redirectTo: '/error'
        });
    }]);