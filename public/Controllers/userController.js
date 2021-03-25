
 // Creation de controller UserCRUDCtrl
    //USER
    

    application.controller('UserCRUDCtrl',['$scope','UserCRUDService','$timeout','$log', '$http',
    function ($scope,UserCRUDService, $timeout) {
        var tokenUser;
       
        //Add user 
        $scope.addUser = function () {
                UserCRUDService.addUser($scope.user.name,
                    $scope.user.lastName,
                   $scope.user.email,$scope.user.phoneNumber,
                    $scope.user.pwd, $scope.forfait.id)
                .then (function success(response){      
                    $scope.message = 'User added!';
                    tokenUser=response.data.token
                    console.log( "Token", tokenUser)
                    $scope.errorMessage = '';
                    console.log( $scope.message, response.data);  
                    UserCRUDService.sendEmail($scope.user.email,tokenUser);
                    
                },
                function error(response){
                    $scope.errorMessage = 'Error adding user!';
                    $scope.message = '';
                    console.log( $scope.errorMessage);
                });
        }
        $scope.sendEmail = function () {
            UserCRUDService.sendEmail($scope.user.email, tokenUser)
            .then (function success(response){      
                $scope.message = 'Email envoyé!';
                $scope.errorMessage = '';
                console.log( $scope.message, response.data);  
               
            },
            function error(response){
                $scope.errorMessage = 'Error email user!';
                $scope.message = '';
                console.log( $scope.errorMessage);
            });
    }
        $scope.addUserToken = function () {
            UserCRUDService.addUserToken(tokenUser)
            .then (function success(response){      
                $scope.message = 'User added with token!';
                console.log( "Token +TOKEN ", response.data.token)
                $scope.errorMessage = '';
                console.log( $scope.message, response.data);
            },
            function error(response){
                $scope.errorMessage = 'Error adding user!';
                $scope.message = '';
                console.log( $scope.errorMessage);
            });
    }
        
        $scope.updateUser = function () {
            UserCRUDService.updateUser($scope.user.id,$scope.user.firstName,
                $scope.user.lastName,
                $scope.user.email,$scope.user.phoneNumber,
                 $scope.user.role,$scope.user.forfaitId)
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
                console.log( $scope.message)
            },
            function error(response) {
                $scope.errorMessage = 'Error deleting user!';
                $scope.message='';
                console.log( $scope.errorMessage)
            });
        }

          //pagination 
        $scope.initDatatable = function() {
            $timeout(function() {
                var rowCount = $("#myTableUsers tr").length;
                if (rowCount >= 0) {
                    $("#myTableUsers").dataTable({
                        pagingType : "full_numbers",
                        paging: "full-reset",
                        retrieve: true,
                        
                    });
                }
            }, 2000)
        }
    }]);
    application.controller('userGetAllController', function getDataUsers($scope, UserCRUDService,$http) {
        UserCRUDService.getAllUsers()
              .then(function success(response) {
                  $scope.users = response.data;
                  $scope.message='get All';
                  $scope.errorMessage = '';
                  console.log($scope.message, response.data)
              },
              function error (response) {
                  $scope.message='';
                  $scope.errorMessage = 'Error getting users!';
                  console.log( $scope.errorMessage)
              });
    });
    
    application.directive('repeatDoneTable', function() {
        return function(scope, element, attrs) {
            
            if (scope.$last) {
                // window.alert("je suis au dernier element du tableau");
                scope.$eval(attrs.repeatDoneTable);
            }
            scope.initDatatable()
        }
         
    })
    
   