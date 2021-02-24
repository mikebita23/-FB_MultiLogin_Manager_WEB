//Contoller Login

// let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGRhbmkuY29tIiwidXNlcklkIjo3LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTQwNzEyMDEsImV4cCI6MTYxNDA3NDgwMX0.rHXdObhGlJhnO-OAkMI_wYwvnb4j66s1CxHWJVnU7CQ"

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
                window.location.href = '../views/admin.html';
                  // return res.render("register");
              
                
              },
              function error(response){
                $scope.errorMessage = 'login error not connected';
                $scope.message = '';
                console.log( $scope.errorMessage);
                window.location.href = 'loginAdmin.html'
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
  