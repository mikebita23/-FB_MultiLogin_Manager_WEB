//Coontroller Prospects
application.controller('prospectgetAllController',['$scope','prospectService','$routeParams',
function ($scope,prospectService, $routeParams) {   
         
        prospectService.getAllProspects()
            .then (function success(response){     
                $scope.message = 'prospect get all succes!';
                $scope.errorMessage = '';
                console.log( $scope.message);
                console.log( "prospect data ", response.data);
                $scope.prospects = response.data;
            },
            function error(response){
                console.log(response);
                $scope.errorMessage = 'error prospect can\'t be added';
                $scope.message = '';
                console.log( $scope.errorMessage);
            });
}]);

application.controller('prospectController',['$scope','prospectService','$routeParams',
    function ($scope,prospectService, $routeParams) {   
        $scope.addProspect = function () {         
            prospectService.addProspect($scope.nom_Prospect,$scope.sujet_Prospect,$scope.email_tel, $scope.contenu)
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


//supprimer prospect
application.controller('prospectDelController',['$scope','prospectService','$routeParams',
    function ($scope,prospectService, $routeParams) {   
        $scope.deleteProspect = function () {         
            prospectService.deleteProspect($scope.prospect.id)
                .then (function success(response){     
                    $scope.message ='prospect has been delete!';
                    $scope.errorMessage = '';
                    console.log( $scope.message);
                    console.log(response.data)
                },
                function error(response){
                    $scope.errorMessage = 'error prospect can\'t be delete';
                    $scope.message = '';
                    console.log($scope.errorMessage);
                });
        }
     

}]);