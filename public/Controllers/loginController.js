//Contoller Login
application.controller('loginController',['$scope','loginService',
function ($scope,loginService) {
   
$scope.addlogin = function () {
    
        loginService.addlogin($scope.login.email,
            $scope.login.passWord)
          .then (function success(response){
             
              $scope.message = 'User connected';
              $scope.errorMessage = '';
              console.log( $scope.message);
              console.log(response.data)
              //token= response.data.token
          },
          function error(response){
              $scope.errorMessage = 'login error not connected';
              $scope.message = '';
              console.log( $scope.errorMessage);
        });
    }

}]);
  