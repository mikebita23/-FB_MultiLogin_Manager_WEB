// Creation de controller ForfaitCRUDCtrl
    //Forfait

    application.controller('ForfaitCRUDCtrl',['$scope','forfaitCRUDService','$routeParams',
    function ($scope,forfaitCRUDService,$routeParams) {
    
  
    
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