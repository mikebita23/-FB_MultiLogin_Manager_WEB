//Contoller Login

let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGRhbmkuY29tIiwidXNlcklkIjo3LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTQwNjk1NzAsImV4cCI6MTYxNDA3MzE3MH0.KvqYBHTy_tQSHDGhg6tz4stVtxQwJXrpBwZ5qJSs1zE"
application.controller('loginController',['$scope','LoginService',
function ($scope,LoginService) {
   
    $scope.addLogin = function () {
      const adminPass = $scope.login.passWord;
      const adminUsername = $scope.login.email;
        LoginService.addLogin(adminUsername,
          adminPass)
            .then (function success(response){
              if (adminPass == "admin" && adminUsername == "admin@dani.com" ){
                console.log(response.data.token)
                $scope.message = 'User connected';
                $scope.errorMessage = '';
                console.log( $scope.message);
                console.log(response.data)
                token = response.data.token;
                console.log(token)
                window.location.href = '../views/admin.html';
                  // return res.render("register");
               } else {
                  console.log(response.data.token)
                  $scope.message = 'User connected';
                  $scope.errorMessage = '';
                  console.log( $scope.message);
                  console.log(response.data)
                  token = response.data.token;
                  console.log(token)
                  window.location.href = 'loginAdmin.html'
                   
                }
                

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
  