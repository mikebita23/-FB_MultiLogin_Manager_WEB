//Contoller Login
var  token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInVzZXJJZCI6MjAsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMjk5OTQxMCwiZXhwIjoxNjEzMDAzMDEwfQ.LXaTl0ovKLqfyZZd4XQP-ZD0htX8NKHQIRJCde8G0RE'


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
          },
          function error(response){
              $scope.errorMessage = 'login error not connected';
              $scope.message = '';
              console.log( $scope.errorMessage);
        });
    }

}]);
  