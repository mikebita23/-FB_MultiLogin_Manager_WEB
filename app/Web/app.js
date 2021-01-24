//Creation de module
var application = angular.module('app', ['ngRoute']);

 //Variable globale
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmEyQGdtYWlsLmNvbSIsInVzZXJJZCI6MTAwNiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjExNTAwNjM2LCJleHAiOjE2MTE1MDQyMzZ9.SSMBc8fmIsq9K61purXqXLDpm95kjiJ7WlHAdnY8sTM'
   

//CREATION DE SERVICE Message

application.service('MsgReadService',['$http', function($http) {

    //USER GET
        this.getMessage= function getMessage(id) {
            return $http({
                method : 'GET',
                url: `${API_URL}/Msg/:${id}`,
                headers: {
                    //'Authorization': `Bearer ${token_D}`  ,
                    'Authorization': `Bearer ${token}` ,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
        };
    
        //service GET USER
    this.getMessages = function getMessages() {
        var message
        return $http({
            method : 'GET',
            url: `${API_URL}/Msg/all`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    };

}]);


//CREATION DE SERVICE UserCRUDService
application.service('UserCRUDService',['$http', function($http) {

    
        this.getUser = function getUser() {
            return $http({
                method : 'GET',
                url: `${API_URL}/users/get`,
                headers: {
                    //'Authorization': `Bearer ${token_D}`  ,
                    'Authorization': `Bearer ${token}` ,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        };
    
        //service GET USER
    this.getAllUsers = function getAllUsers() {
        return $http({
            method : 'GET',
            url: `${API_URL}/users/all`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };
     //service GET message by  USER and Forfait
     this.getAllUserMsgForf = function getAllUserMsgForf() {
        return $http({
            method : 'GET',
            url: `${API_URL}/users/userMsgForf`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };
        // service Add User-add
    
    this.addUser = function addUser(firstName,lastName,
        email,phoneNumber,passWord ) {
        return $http({
            method : 'POST',
            url: `${API_URL}/users/add`,
           
            data : {
                firstName:firstName,
                lastName:  lastName,
                 email: email,
                phoneNumber: phoneNumber,
                passWord: passWord,
                role: "ADMIN",
                forfaitId: null
              } 
        });
    };
    //service UPDATE
    this.updateUser = function updateUser(firstName,lastName,
        email,phoneNumber,passWord) {
        return $http({
            method : 'POST',
            url: `${API_URL}/users/edit`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data : {
                firstName:firstName,
                lastName:  lastName,
                 email: email,
                phoneNumber: phoneNumber,
                passWord: passWord,
                role: "ADMIN",
                forfaitId: null
              }
        });
    };
    //service DELETE
    this.deleteUser = function deleteUser(id) {
        return $http({
            method : 'DELETE',
            url: `${API_URL}/users/${id}`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    };
    
    
    
        
    }]);
    

    // Creaition des routes 

application.config(function($routeProvider){

    $routeProvider
    .when('/',{templateUrl:'partiels/messages.html ', controller:'MsgReadCtrl'}) //index
    .when('/messages/:id',{templateUrl:'partiels/message.html', controller: 'MsgReadCtrl'})//Message
    .when('/users',{templateUrl:'partiels/user.html', controller: 'UserCRUDCtrl'})
    .otherwise({redirectTo:'/'});

});


///Creation de controller MsgReadCtrl
///MESSAGES 
application.controller('MsgReadCtrl',['$scope','MsgReadService','$routeParams',
 function($scope,MsgReadService,$routeParams){
     console.log($routeParams);


    //Get message All
    $scope.messages=[]

    $scope.getMessages= function () {
       
        MsgReadService.getMessages()
          .then(function success(response) {
              $scope.messages = response.data;
              $scope.message='get All';
              $scope.errorMessage = '';
              console.log($scope.message)
            
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
              console.log( $scope.errorMessage)
          });
    };

    //Get Message 
    $scope.getMessage= function () {
        var message;
        MsgReadService.getMessage($routeParams.id)
        .then(function(message){
            angular.forEach(post,function(value, key) {
                if(value.id==id){
                    message=value
                } 
            })                       
            })
          .then(function success(response) {
             $scope.message = response.data;
             $scope.id=message.id;
              $scope.Objet=message.Objet;
              $scope.Content=message.Content;
              scope.senderId=message.senderId
              $scope.message='get Message';
              $scope.errorMessage = '';
              console.log( message)
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
              console.log( $scope.errorMessage)
          });
    };


}]);

    // Creation de controller UserCRUDCtrl
    //USER

application.controller('UserCRUDCtrl',['$scope','UserCRUDService',
function ($scope,UserCRUDService) {



//Mes Variables globales

    //get-User
      $scope.getUser = function () {
          UserCRUDService.getUser()
            .then(function success(response) {
                $scope.user = response.data;
                $scope.message='User get';
                $scope.errorMessage = '';
                console.log( $scope.message);
                
            },
            function error (response) {
                $scope.message = '';
                if (response.status === 404){
                    $scope.errorMessage = 'User not found!';
                    console.log( $scope.errorMessage);
                }
                else {
                    $scope.errorMessage = "Error getting user!";
                    console.log( $scope.errorMessage);
                }
            });
      };
      $scope.getAllUsers = function () {
        UserCRUDService.getAllUsers()
          .then(function success(response) {
              $scope.users = response.data;
              $scope.message='get All';
              $scope.errorMessage = '';
              console.log($scope.message)
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
              console.log( $scope.errorMessage)
          });
    }
      
//Add user 
$scope.addUser = function () {
    //if ($scope.user != null && $scope.user.email) {
        UserCRUDService.addUser($scope.user.firstName,
            $scope.user.lastName,
            $scope.user.email,$scope.user.phoneNumber,
            $scope.user.passWord)
          .then (function success(response){
             
              $scope.message = 'User added!';
              $scope.errorMessage = '';
              console.log( $scope.message);
          },
          function error(response){
              $scope.errorMessage = 'Error adding user!';
              $scope.message = '';
              console.log( $scope.errorMessage);
        });
    }

$scope.updateUser = function () {
    UserCRUDService.updateUser($scope.user.firstName,
        $scope.user.lastName,
        $scope.user.email,$scope.user.phoneNumber,
        $scope.user.passWord)
      .then(function success(response) {
          $scope.message = 'User data updated!';
          console.log( $scope.message)
          $scope.errorMessage = '';
      },
      function error(response) {
          $scope.errorMessage = 'Error updating user!';
          $scope.message = '';
          console.log( $scope.errorMessage)
      });
}

$scope.deleteUser = function () {
    UserCRUDService.deleteUser($scope.user.id)
      .then (function success(response) {
          $scope.message = 'User deleted!';
          $scope.User = null;
          $scope.errorMessage='';
          console.log( $scope.Message)
      },
      function error(response) {
          $scope.errorMessage = 'Error deleting user!';
          $scope.message='';
          console.log( $scope.errorMessage)
      });
}

//With FORFAIT AND Message
$scope.getAllUserForf = function () {
    UserCRUDService.getAllUserMsgForf()
      .then(function success(response) {
          $scope.users = response.data;
          console.log(response);
          $scope.message='get Message by user and forfait';
          $scope.errorMessage = '';
          console.log( $scope.Message)
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
          console.log( $scope.errorMessage)
      });
}

}]);














