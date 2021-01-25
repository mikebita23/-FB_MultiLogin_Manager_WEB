


//CREATION DE SERVICE UserCRUDService
application.service('loginService',['$http', function($http) {

    this.login = function login(email,passWord ) {
        return $http({
            method : 'POST',
            url: `${API_URL}/auth/login`,
        
            data : {

                email: email,
                passWord: passWord,
        
            } 
        });
    };
//service UPDATE    
}]);
