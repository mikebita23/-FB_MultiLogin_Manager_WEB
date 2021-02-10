
 // Creation de controller UserCRUDCtrl
    //USER

    application.controller('sessionCRUDCtrl',['$scope','sessionCRUDService',
    function ($scope,sessionCRUDService) {
    //Add user 
    $scope.addSession = function () {
        sessionCRUDService.addSession($scope.session.name,$scope.session.credentials,$scope.session.status)
              .then (function success(response){      
                  $scope.message = 'Session added!';
                  $scope.errorMessage = '';
                  console.log( $scope.message);
                  $scope.sessions = response.data
              },
              function error(response){
                  $scope.errorMessage = 'Error adding Session!';
                  $scope.message = '';
                  console.log( $scope.errorMessage);
            });
        }
    
    $scope.updateSession = function () {
        sessionCRUDService.updateSession($scope.session.name,$scope.session.credentials,
            $scope.session.status,$scope.session.owner)
          .then(function success(response) {
              $scope.message = 'Session data updated!';
              console.log( $scope.message)
              $scope.errorMessage = '';
          },
          function error(response) {
              $scope.errorMessage = 'Error updating session!';
              $scope.message = '';
              console.log( $scope.errorMessage)
          });
    }
    
    $scope.deleteSession = function () {
        sessionCRUDService.deleteSession($scope.session.id)
          .then (function success(response) {
              $scope.message = 'Session deleted!';
              $scope.Session = null;
              $scope.errorMessage='';
              console.log( $scope.message)
          },
          function error(response) {
              $scope.errorMessage = 'Error deleting Session!';
              $scope.message='';
              console.log( $scope.errorMessage)
          });
    };
    $scope.attributSession = function () {
        sessionCRUDService.attributSession($scope.session.id)
          .then (function success(response) {
              $scope.message = 'Session atributed!';
              $scope.Session = null;
              $scope.errorMessage='';
              console.log( $scope.message)
          },
          function error(response) {
              $scope.errorMessage = 'Error deleting Session!';
              $scope.message='';
              console.log( $scope.errorMessage)
          });
    }
    }]);
    

application.controller('sessionGetAllController',['$scope','sessionCRUDService','$routeParams',
function ($scope,sessionCRUDService, $routeParams) {   
         
    sessionCRUDService.getAllSession()
            .then (function success(response){     
                $scope.message = 'session get All succes!';
                $scope.errorMessage = '';
                console.log( $scope.message);
                console.log(response.data);
                $scope.sessions = response.data;
            },
            function error(response){
                $scope.errorMessage = 'error prospect can\'t be added';
                $scope.message = '';
                console.log( $scope.errorMessage);
            });
}]);
    
    
    
 