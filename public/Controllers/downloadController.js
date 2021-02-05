//CONTROLLER DOWNLOAD
var fileName=[]
var fileToken;
application.controller('downloadgetController',['$scope','downloadService','$routeParams',
function ($scope,downloadService, $routeParams) {                 
        downloadService.downloadGet()
            .then (function success(response){               
                $scope.message = 'logiciel charged!';
                file=response.data
               // file=response.data.split('v')[-1].split('.')[0]
                $scope.errorMessage = '';
                console.log( $scope.message);
               // console.log( response.data);
                console.log(file)
            },
            function error(response){
                $scope.errorMessage = 'error logiciel can\'t be added';
                $scope.message = '';
                console.log( $scope.errorMessage);
            });
      
    $scope.downloadName= function () {               
        downloadService.downloadName(file)
            .then (function success(response){             
                $scope.message = 'logiciel Name!';
                fileToken=response.data
                $scope.errorMessage = '';
                console.log( $scope.message);
                console.log(fileToken.link)
              window.open('http://'+fileToken.link,'_blank')
             
            },
            function error(response){
                $scope.errorMessage = 'error logiciel can\'t be added';
                $scope.message = '';
                console.log( $scope.errorMessage);
            });
    }

    $scope.downloadToken= function () {               
        downloadService.downloadToken(fileToken)
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