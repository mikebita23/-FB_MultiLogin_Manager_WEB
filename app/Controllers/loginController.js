var appLogin = angular.module('myApp', []);
appLogin.controller('LoginCRUDCtrl',['$scope','LoginService',
  function ($scope,LoginService) {

$scope.user.email = document.getElementById('')
$scope.user.psw= document.getElementById('')


//Login
$scope.login = function () {
    //if ($scope.user != null && $scope.user.email) {
        LoginService.login($scope.login.psw, $scope.login.email)
          .then (function success(response){
              $scope.message = 'User Connected!';
              $scope.errorMessage = '';
          },
          function error(response){
              $scope.errorMessage = 'Error adding user!';
              $scope.message = '';
        });
   
    //  } else {
    //     $scope.errorMessage = 'Please enter a name!';
    //     $scope.message = '';
    // }
}
}]);