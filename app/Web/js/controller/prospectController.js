application.controller('prospectController',['$scope','prospectService','$routeParams',
    function ($scope,prospectService, $routeParams) {
    
        $scope.addProspect = function () {
            
            prospectService.addProspect($scope.prospect.prospectNom,
                    $scope.prospect.prospectPrenom, $scope.prospect.prospectNum)
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

        $scope.getProspect = function () {
            var prospect;
               
            prospectService.getProspect($routeParams.id)
                .then(function success(response){
                    $scope.prospects = response.data;
                    $scope.message = 'prospect is get';
                    $scope.errorMessage = '';
                    console.log( $scope.message);
                    $scope.nom_Prospect=response.data.nom_Prospect;
                    $scope.prenom_Prospect=response.data.prenom_Prospect;
                    $scope.numero_tel = response.data.numero_tel;
                    
                    console.log(response.data)
                },
                function error(response){
                    $scope.errorMessage = 'error prospect can\'t be added';
                    $scope.message = '';
                    console.log( $scope.errorMessage);
                });
        }

        $scope.getAllProspects = function () {
            prospectService.getAllProspects()
              .then(function success(response) {
                  $scope.prospects = response.data;
                  $scope.message='get All prospects';
                  $scope.errorMessage = '';
                  console.log($scope.message)
                  console.log(response.data)
              },
              function error (response) {
                  $scope.message='';
                  $scope.errorMessage = 'Error getting users!';
                  console.log( $scope.errorMessage)
              });
        }
    
    }]);

    