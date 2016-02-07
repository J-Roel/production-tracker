var app = angular.module('trackerApp');

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: "UserCtrl as UserCtrl"
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: "Main as M"
      })
      .when('/wells', {
      	templateUrl: 'views/wells.html',
      	controller: "Main as M",
      })
      .when('/main/newwell', {
      	templateUrl: 'views/newWell.html',
      	controller: "NewWell as NW",
      })
});