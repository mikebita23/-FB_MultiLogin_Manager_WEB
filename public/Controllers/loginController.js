//Contoller Login


application.controller('loginController',['$scope','LoginService',
function ($scope,LoginService) {
   
    $scope.addLogin = function () {
    
        LoginService.addLogin($scope.login.email,
                $scope.login.passWord)
            .then (function success(response){
                
                $scope.message = 'User connected';
                $scope.errorMessage = '';
                console.log( $scope.message);
                console.log(response.data)
                token= response.data.token
                console.log(token)
            },
            function error(response){
                $scope.errorMessage = 'login error not connected';
                $scope.message = '';
                console.log( $scope.errorMessage);
            });
    },

    //pagination 
    $scope.initDatatable = function() {
    $timeout(function() {
      var rowCount = $("#myTableUsers tr").length;
      console.log("nombre de colonnes "+rowCount);
      if (rowCount >= 0) {
        console.log("trier");
        $("#myTableUsers").dataTable({
           "pagingType" : "full_numbers",
        });
      }
    }, 300)
  }

}]);
  