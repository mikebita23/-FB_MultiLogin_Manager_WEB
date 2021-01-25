
var myApp = angular.module('myApp', []);
myApp.controller('UserCRUDCtrl',['$scope','UserCRUDService',
  function ($scope,UserCRUDService) {

    // Appel des urls
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";

//Mes Variables globales

const nom = document.getElementById('')
const prenom = document.getElementById('')
const email = document.getElementById('')
const phone = document.getElementById('')
const psw = document.getElementById('')
$scope.dataUser={
    fisrtName:prenom,
    lastName:nom,
    phoneNumber:nom,
    email:email,
    passWord:psw,
}

    //get-User
      $scope.getUser = function () {
          //var id = $scope.user.id;
          UserCRUDService.getUser()
            .then(function success(response) {
                $scope.user = response.data;
                // $scope.user.id = id;
                $scope.message='';
                $scope.errorMessage = '';
            },
            function error (response) {
                $scope.message = '';
                if (response.status === 404){
                    $scope.errorMessage = 'User not found!';
                }
                else {
                    $scope.errorMessage = "Error getting user!";
                }
            });
      };
}]);

//Add user 
$scope.addUser = function () {
    
        UserCRUDService.addUser($scope.user.firstName,
            $scope.user.lastName,
            $scope.user.email,$scope.user.phoneNumber,
            $scope.user.passWord)
          .then (function success(response){
              $scope.message = 'User added!';
              $scope.errorMessage = '';
          },
          function error(response){
              $scope.errorMessage = 'Error adding user!';
              $scope.message = '';
        });
}

$scope.updateUser = function () {
    UserCRUDService.updateUser($scope.user.firstName,
        $scope.user.lastName,
        $scope.user.email,$scope.user.phoneNumber,
        $scope.user.passWord)
      .then(function success(response) {
          $scope.message = 'User data updated!';
          $scope.errorMessage = '';
      },
      function error(response) {
          $scope.errorMessage = 'Error updating user!';
          $scope.message = '';
      });
}

$scope.deleteUser = function () {
    UserCRUDService.deleteUser($scope.user.id)
      .then (function success(response) {
          $scope.message = 'User deleted!';
          $scope.User = null;
          $scope.errorMessage='';
      },
      function error(response) {
          $scope.errorMessage = 'Error deleting user!';
          $scope.message='';
      });
}
$scope.getAllUsers = function () {
    UserCRUDService.getAllUsers()
      .then(function success(response) {
          $scope.users = response.data;
          $scope.message='';
          $scope.errorMessage = '';
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
      });
}
//With FORFAIT AND Message
$scope.getAllUsers = function () {
    UserCRUDService.getAllUserMsgForf()
      .then(function success(response) {
          $scope.users = response.data;
          $scope.message='';
          $scope.errorMessage = '';
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
      });
}









