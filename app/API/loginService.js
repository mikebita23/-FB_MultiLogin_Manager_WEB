app.service('LoginService',['$http', function($http) {

this.login = function addLogin( email, psw) {
    return $http({
        method : 'POST',
        url: `${API_URL}/Auth/login`,
        data : {
            email: email,
            passWord:psw
        }
    });
}

}]);