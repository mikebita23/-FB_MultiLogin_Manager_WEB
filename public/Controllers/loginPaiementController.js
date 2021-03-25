application.controller('loginPaiementController',['$scope','LoginService',
function ($scope,LoginService) {
   
    $scope.addLogin = function () {
      const userPassword = $scope.login.passWord;
      const userEmail = $scope.login.email;
        LoginService.addLogin(userEmail,
          userPassword)
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
    }
   
}]);