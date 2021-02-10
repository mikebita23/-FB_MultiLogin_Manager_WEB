

application.service('LoginService',['$http', function($http) {

this.addLogin = function addLogin( email, psw) {
    return $http({
        method : 'POST',
        url: `${API_URL_D}/Auth/login`,
        data : {
            email: email,
            passWord:psw
        }
    });
}

}]);