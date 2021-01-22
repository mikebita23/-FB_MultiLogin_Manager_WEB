//CREATION DE SERVICE
app.service('UserCRUDService',['$http', function($http) {

const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";
let $Userdata={
}

//USER GET
    this.getUser = function getUser() {
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

    //GET USER
this.getAllUsers = function getAllUsers() {
    return $http({
        method : 'GET',
        url: `${API_URL}/users/all`
    });
}
 //GET USER
 this.getAllUserMsgForf = function getAllUserMsgForf() {
    return $http({
        method : 'GET',
        url: `${API_URL}/users/userMsgForf`,
    });
}
    // Controller Add User-add

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
}
//UPDATE
this.updateUser = function updateUser(firstName,lastName,
    email,phoneNumber,passWord) {
    return $http({
        method : 'POST',
        url: `${API_URL}/users/edit`,
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
}
//DELETE
this.deleteUser = function deleteUser(id) {
    return $http({
        method : 'DELETE',
        url: `${API_URL}/users/${id}`
    })
}



    
}]);
