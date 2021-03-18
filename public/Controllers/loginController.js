
application.controller('loginController',['$scope','LoginService',
function ($scope,LoginService) {
   
    $scope.addLogin = function () {
      const adminPass = $scope.login.passWord;
      const adminUsername = $scope.login.email;
        LoginService.addLogin(adminUsername,
          adminPass)
            .then (function success(response){
            
                console.log(response.data.token)
                $scope.message = 'User connected';
                $scope.errorMessage = '';
                console.log( $scope.message);
                console.log(response.data)
                document.cookie = response.data.token;
                console.log(token)
               window.location.href = '/admin';          
              },
              function error(response){
                $scope.errorMessage = 'login error not connected';
                $scope.message = '';
                console.log( $scope.errorMessage);
                document.getElementById("err").innerHTML=` <h6 class="text-red-500 text-center mt-2"  id="error-message" >mot de passe ou nom d'utilisateur incorrect</h6>`
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
  