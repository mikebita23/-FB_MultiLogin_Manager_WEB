//Contoller Login



application.controller('loginController',['$scope','LoginService',
function ($scope,LoginService) {
   
$scope.addLogin = function () {
    
    LoginService.addLogin($scope.login.email,
            $scope.login.passWord)
          .then (function success(response){
             
              $scope.message = 'User connected';
              $scope.errorMessage = '';
              console.log( $scope.message);
              console.log(response.data)
              token= response.data.token
              console.log(token)
              response.sendFile('../views/admin.html')
          },
          function error(response){
              $scope.errorMessage = 'login error not connected';
              $scope.message = '';
              console.log( $scope.errorMessage);
        });
    }

}]);
  