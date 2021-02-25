
//CREATION DE SERVICE UserCRUDService
application.service('UserCRUDService',['$http', function($http) {

    
        this.getUser = function getUser() {
            return $http({
                method : 'GET',
                url: `${API_URL_D}/users/get/:id`,
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
            url: `${API_URL_D}/users/all`,
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
            url: `${API_URL_D}/users/add`,
           
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
    this.updateUser = function updateUser(userId,prenom,
        nom,
        email,tel,
        pwd, role, forfait) {
            var tmp ={
                id:userId,
                firstName:prenom,
                lastName:  nom,
                email: email,
                phoneNumber: tel,
                passWord:pwd,
                role: role,
                forfaitId: forfait
              }
              if(pwd==''){
                  tmp.passWord=pwd
              }
        return $http({
            method : 'POST',
            url: `${API_URL_D}/users/edit`,
            headers: {
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data : tmp
        });
    };
    //service DELETE
    this.deleteUser = function deleteUser(idUser){
        return $http({
            method : 'GET',
            url: `${API_URL_D}/users/remove/${idUser}`,
            headers: {
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    };
    
    
    
        
}]);
    