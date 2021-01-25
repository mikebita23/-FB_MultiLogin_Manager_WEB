


//CREATION DE SERVICE UserCRUDService
application.service('loginService',['$http', function($http) {

// service Add User-add

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
