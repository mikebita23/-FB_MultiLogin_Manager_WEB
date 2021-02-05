
//CREATION DE SERVICE UserCRUDService
application.service('UserCRUDService',['$http', function($http) {

    
        this.getUser = function getUser() {
            return $http({
                method : 'GET',
                url: `${API_URL}/users/get`,
                headers: {
                    //'Authorization': `Bearer ${token_D}`  ,
                    'Authorization': `Bearer ${token}` ,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        };
    
        //service GET USER
    this.getAllUsers = function getAllUsers() {
        return $http({
            method : 'GET',
            url: `${API_URL}/users/all`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };
    // service Add User-add
    
    this.addUser = function addUser(firstName,lastName,
        email,phoneNumber,passWord ) {
        return $http({
            method : 'POST',
            url: `${API_URL}/users/add`,
           
            data : {
                firstName:firstName,
                lastName:  lastName,
                 email: email,
                phoneNumber: phoneNumber,
                passWord: passWord,
                role: "ADMIN",
                forfaitId: null
              } 
        });
    };
    //service UPDATE
    this.updateUser = function updateUser(firstName,lastName,
        email,phoneNumber,passWord) {
        return $http({
            method : 'POST',
            url: `${API_URL}/users/edit`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data : {
                firstName:firstName,
                lastName:  lastName,
                 email: email,
                phoneNumber: phoneNumber,
                passWord: passWord,
                role: "ADMIN",
                forfaitId: null
              }
        });
    };
    //service DELETE
    this.deleteUser = function deleteUser(id) {
        return $http({
            method : 'DELETE',
            url: `${API_URL}/users/${id}`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    };
    
    
    
        
    }]);
    