'use strict';
var app = angular.module("trackerApp");

//Setup our app's main controller (also takes care of our home view) -------------------------

//LOGIN CONTROLLER
app.controller('UserCtrl', function ($scope, $http, $window) {
  


  $scope.user = {username: 'john.doe', password: 'foobar'};
  $scope.message = '';
  
  


  $scope.submit = function () {
    $http
      .post('http://localhost:3000/api/auth/authenticate', $scope.user)
      .success(function (data, status, headers, config) {

        if(!config){
          config.headers = {};
        }

        $window.sessionStorage.token = data.token;
        $scope.message = 'Welcome';
      })
      .error(function (data, status, headers, config) {
        // Erase the token if the user fails to log in
        delete $window.sessionStorage.token;

        // Handle login errors here
        $scope.message = 'Error: Invalid user or password';
      });
  };

  // $scope.logout = function () {
  //   $scope.welcome = '';
  //   $scope.message = '';
  //   $scope.isAuthenticated = false;
  //   delete $window.sessionStorage.token;
  // };

  // $scope.callRestricted = function () {
  //   $http({url: 'http://localhost:3000/api/auth/restricted', method: 'GET'})
  //   .success(function (data, status, headers, config) {
  //     $scope.message = $scope.message + ' ' + data.name; // Should log 'foo'
  //   })
  //   .error(function (data, status, headers, config) {
  //     alert(data);
  //   });
  // };



});



app.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    }
  };
});


app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});




/* END OF FILE */