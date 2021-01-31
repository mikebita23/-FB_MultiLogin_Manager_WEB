var application = angular.module('app', ['ngRoute']);
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdmlkQGdtYWlsLmNvbSIsInVzZXJJZCI6OSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjEyMTAwNzAyLCJleHAiOjE2MTIxMDQzMDJ9.lDxZ6LwFSZV7vZ7T2Uxh9s35WkgpuHHVn59Rn2xyKno'
 
//CREATION DE SERVICE UserCRUDService
application.service('UserCRUDService',['$http', function($http) {

    
        this.getUser = function getUser() {
            return $http({
                method : 'GET',
                url: `${API_URL_D}/users/get/:id`,
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
            url: `${API_URL_D}/users/all`,
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
            url: `${API_URL_D}/users/add`,
           
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
            url: `${API_URL_D}/users/edit`,
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
    this.deleteUser = function deleteUser(){
        return $http({
            method : 'GET',
            url: `${API_URL_D}/users/remove`,
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
application.service('forfaitCRUDService',['$http', function($http) {

    
    this.getForfait = function getForfait(idForfait) {
        return $http({
            method : 'GET',
            url: `${API_URL_D}/forf/${idForfait}`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };

    //service GET USER
this.getAllForfait = function getAllForfait() {
    return $http({
        method : 'GET',
        url: `${API_URL_D}/forf/all`,
        headers: {
            //'Authorization': `Bearer ${token_D}`  ,
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};
// service Add User-add

this.addForfait = function addForfait( Nom,description,prix) {
    return $http({
        method : 'POST',
        url: `${API_URL_D}/forf/add`,
        headers: {
            //'Authorization': `Bearer ${token_D}`  ,
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data : {
            nom:Nom,
            description:description,
            prix:prix    
          } 
    });
};
//service UPDATE
this.updateForfait = function updateForfait(idForfait) {
    return $http({
        method : 'patch',
        url: `${API_URL_D}/forf/${idForfait}/edit`,
        headers: {
            //'Authorization': `Bearer ${token_D}`  ,
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        // ,
        // data : {
        //     Nom:Nom,description:description, prix:prix
        //   }
    });
};
//service DELETE
    this.deleteForfait = function deleteForfait(id) {
                 return $http({
                     method : 'GET',
                     url: `${API_URL_D}/forf/del/${id}`,
                        headers: {
                       //'Authorization': `Bearer ${token_D}`  ,
                         'Authorization': `Bearer ${token}` ,
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                        }
                     })
    };    
}]);

///Creation de controller MsgReadCtrl

    // Creation de controller UserCRUDCtrl
    //USER

    application.controller('UserCRUDCtrl',['$scope','UserCRUDService','$routeParams',
    function ($scope,UserCRUDService) {
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
        UserCRUDService.deleteUser()
          .then (function success(response) {
              $scope.message = 'User deleted!';
              $scope.User = null;
              $scope.errorMessage='';
              console.log( $scope.message)
          },
          function error(response) {
              $scope.errorMessage = 'Error deleting user!';
              $scope.message='';
              console.log( $scope.errorMessage)
          });
    }
    }]);
    application.controller('userGetAllController', function getDataUsers($scope, UserCRUDService,$http) {
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
    });
    
    
    
    application.controller('userGetController', function getDataUsers($scope, UserCRUDService,$http,$routeParams) {
        UserCRUDService.getUser($routeParams.id)
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
                
    }) 
    

///Creation de controller MsgReadCtrl

    // Creation de controller ForfaitCRUDCtrl
    //Forfait

    application.controller('ForfaitCRUDCtrl',['$scope','forfaitCRUDService','$routeParams',
    function ($scope,forfaitCRUDService,$routeParams) {
    
    
    //Mes Variables globales
    
        //get-Forfait
          $scope.getForfait = function () {
            forfaitCRUDService.getForfait($routeParams.id)
                .then(function success(response) {
                    $scope.forfaits = response.data;
                    $scope.id=response.data.id
                    $scope.Nom= response.data.nom;
                    $scope.description=response.data.description;
                    $scope.prix=response.data.prix
                    $scope.message='Forfait get';
                    $scope.errorMessage = '';
                    console.log( $scope.message);
                    
                },
                function error (response) {
                    $scope.message = '';
                    if (response.status === 404){
                        $scope.errorMessage = 'Forfait not found!';
                        console.log( $scope.errorMessage);
                    }
                    else {
                        $scope.errorMessage = "Error getting user!";
                        console.log( $scope.errorMessage);
                    }
                });
          };
        
          
    //Add Forfait 
//Add user 
$scope.addForfait = function () {
    //if ($scope.user != null && $scope.user.email) {
        forfaitCRUDService.addForfait($scope.forfait.nom,
            $scope.forfait.description,
            $scope.forfait.prix)
          .then (function success(response){
             
              $scope.message = 'Forfait added!';
              $scope.errorMessage = '';
              console.log( $scope.message);
          },
          function error(response){
              $scope.errorMessage = 'Error adding Forfait!';
              $scope.message = '';
              console.log( $scope.errorMessage);
        });
    }
            // $scope.forfait.Nom,
            // $scope.forfait.decription,
            // $scope.forfait.prix
    $scope.updateForfait = function () {
        forfaitCRUDService.updateForfait($routeParams.id)
          .then(function success(response) {
              $scope.message = 'Forfait data updated!';
              console.log( $scope.message)
              $scope.errorMessage = '';
          },
          function error(response) {
              $scope.errorMessage = 'Error updating Forfait!';
              $scope.message = '';
              console.log( $scope.errorMessage)
          });
    }
    
    $scope.deleteForfait = function () {
        forfaitCRUDService.deleteForfait($routeParams.id)
          .then (function success(response) {
              $scope.message = 'Forfait deleted!';
              $scope.User = null;
              $scope.errorMessage='';
              console.log( $scope.message)
          },
          function error(response) {
              $scope.errorMessage = 'Error deleting Forfait!';
              $scope.message='';
              console.log( $scope.errorMessage)
          });
    }
     
    }]);
    application.controller('forfaitGetAllController', function getDataUsers($scope, forfaitCRUDService,$http) {
        forfaitCRUDService.getAllForfait()
              .then(function success(response) {
                  $scope.forfaits = response.data;
                  $scope.message='get All';
                  $scope.errorMessage = '';
                  console.log($scope.message)
                  console.log(response.data);
              },
              function error (response) {
                  $scope.message='';
                  $scope.errorMessage = 'Error getting Forfait!';
                  console.log( $scope.errorMessage)
              });
    });
    //CREATION DE SERVICE Message

application.service('MsgReadService',['$http', function($http) {

    //USER GET
        this.getMessage= function getMessage(id) {
            return $http({
                method : 'GET',
                url: `${API_URL_D}/Msg/${id}`,
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
            url: `${API_URL_D}/Msg/all`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    };

    //service GET message by  USER and Forfait
    this.getAllUserMsgForf = function getAllUserMsgForf() {
        return $http({
            method : 'GET',
            url: `${API_URL_D}/users/userMsgForf`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };

}]);

  
application.service('prospectService',['$http', function($http) {

    ///add a new prospect 
    this.addProspect = function add(numProspect) {
        return $http({
            method : 'POST',
            url: `${API_URL}/prospect/add`,
           
            data : {
    
                // nom_Prospect: nomProspect,
                // prenom_Prospect: prenomProspect,
                numero_tel: numProspect
           
            } 
        });
    };
    //récupertion d'un forfait particulier 
    this.getProspect = function getOneProspect(id) {
        return $http({
            method : 'get',
            url: `${API_URL}/prospect/${id}`,
        });
    };
    this.getAllProspects = function getProspects() {
        return $http({
            method : 'get',
            url: `${API_URL}/prospect/all`,
        });
    };
       
}]);

//CREATION DE SERVICE UserCRUDService
application.service('loginService',['$http', function($http) {

    this.login = function login(email,passWord ) {
        return $http({
            method : 'POST',
            url: `${API_URL_D}/auth/login`,
        
            data : {

                email: email,
                passWord: passWord,
        
            } 
        });
    };
//service UPDATE    
}]);


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
        //var message={};
        MsgReadService.getMessage($routeParams.id)
          .then(function success(response) {
            //  $scope.message = response.data;
             console.log(response.data)
             $scope.messages=response.data;
              $scope.Object=response.data.Object;
              $scope.Content=response.data.Content;
            
              $scope.message='get Message';
              $scope.errorMessage = '';
              console.log($scope.message)
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
              console.log( $scope.errorMessage)
          });
    };


}]);

application.controller('getMessagesController', function getDataUsers($scope, MsgReadService,$http) {
    MsgReadService.getMessages()
    .then(function success(response) {
        $scope.messages = response.data;
        $scope.message='get All';
        $scope.errorMessage = '';
        console.log($scope.messages)         
    },
    function error (response) {
        $scope.message='';
        $scope.errorMessage = 'Error getting users!';
        console.log( $scope.errorMessage)
    });
}) 

application.controller('MsgForfController', function getDataUsers($scope, MsgReadService,$http) {
    MsgReadService.getAllUserMsgForf()
      .then(function success(response) {
          $scope.userMsgForf = response.data;
          console.log(response.data);
          $scope.message='get Message by user and forfait';
          $scope.errorMessage = '';
          console.log( $scope.message)
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
          console.log( $scope.errorMessage)
      });
}) 

application.controller('loginController',['$scope','loginService',
function ($scope,loginService) {
     
//login user 
$scope.login = function () {
    
        loginService.login($scope.login.email,
            $scope.login.passWord)
          .then (function success(response){
             
              $scope.message = 'User connected';
              $scope.errorMessage = '';
              console.log( $scope.message);
              console.log(response.data)
          },
          function error(response){
              $scope.errorMessage = 'login error not connected';
              $scope.message = '';
              console.log( $scope.errorMessage);
        });
    }

}]);



    application.service('prospectService',['$http', function($http) {
        ///add a new prospect 
        this.addProspect = function add(numProspect) {
            return $http({
                method : 'POST',
                url: `${API_URL_D}/prospect/add`,
               
                data : {
                  numero_tel: numProspect
               
                } 
            });
        };
        ///get all prospect 
        this.getAllProspect = function add(numProspect) {
            return $http({
                method : 'Get',
                url: `${API_URL_D}/prospect/all`,
            });
        };
    
        ///add a new prospect 
        this.downloadGet = function download() {
            return $http({
                method : 'GET',
                url: `${API_URL_D}/file/get`,          
            });
        };
        
        ///add a new prospect 
        this.downloadName = function download(name) {
            return $http({
                method : 'GET',
                url: `${API_URL_D}/file/getLink/${name}`,          
            });
        };
    
        
        ///add a new prospect 
        this.downloadToken = function download(token) {
            return $http({
                method : 'GET',
                url: `${API_URL_D}/file/getFile/${token}`,          
            });
        };
    
    
    }]);

    application.controller('prospectgetAllController',['$scope','prospectService','$routeParams',
    function ($scope,prospectService, $routeParams) {   
        $scope.getAllProspect = function () {         
            prospectService.addProspect($scope.prospect.prospectNum)
                .then (function success(response){     
                    $scope.message = 'prospect has be added succes!';
                    $scope.errorMessage = '';
                    console.log( $scope.message);
                    console.log(response.data)
                },
                function error(response){
                    $scope.errorMessage = 'error prospect can\'t be added';
                    $scope.message = '';
                    console.log( $scope.errorMessage);
                });
        }

}]);


   var fileName=[]
   var fileToken;
    application.controller('prospectController',['$scope','prospectService','$routeParams',
        function ($scope,prospectService, $routeParams) {   
            $scope.addProspect = function () {         
                prospectService.addProspect($scope.prospect.prospectNum)
                    .then (function success(response){     
                        $scope.message = 'prospect has be added succes!';
                        $scope.errorMessage = '';
                        console.log( $scope.message);
                        console.log(response.data)
                    },
                    function error(response){
                        $scope.errorMessage = 'error prospect can\'t be added';
                        $scope.message = '';
                        console.log( $scope.errorMessage);
                    });
            }
            $scope.downloadget= function () {               
                prospectService.downloadGet()
                    .then (function success(response){               
                        $scope.message = 'logiciel charged!';
                        file=response.data.split[-1]
                        $scope.errorMessage = '';
                        console.log( $scope.message);
                        console.log(response.data)
                    },
                    function error(response){
                        $scope.errorMessage = 'error logiciel can\'t be added';
                        $scope.message = '';
                        console.log( $scope.errorMessage);
                    });
            }


            $scope.downloadName= function () {               
                prospectService.downloadName(file)
                    .then (function success(response){               
                        $scope.message = 'logiciel charged!';
                        fileToken=response.data
                        $scope.errorMessage = '';
                        console.log( $scope.message);
                        console.log(response.data)
                    },
                    function error(response){
                        $scope.errorMessage = 'error logiciel can\'t be added';
                        $scope.message = '';
                        console.log( $scope.errorMessage);
                    });
            }
            $scope.downloadToken= function () {               
                prospectService.downloadToken(fileToken)
                    .then (function success(response){               
                        $scope.message = 'logiciel charged!';
                        $scope.file=response.data
                        $scope.errorMessage = '';
                        console.log( $scope.message);
                        console.log(response.data)
                    },
                    function error(response){
                        $scope.errorMessage = 'error logiciel can\'t be added';
                        $scope.message = '';
                        console.log( $scope.errorMessage);
                    });
            }


    
    }]);
  