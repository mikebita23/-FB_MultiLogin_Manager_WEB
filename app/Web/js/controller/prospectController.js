application.controller('prospectController',['$scope','prospectService',
    function ($scope,prospectService) {
    
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
    
    }]);