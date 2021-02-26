//CREATION DE SERVICE SessionCRUDService

application.service('sessionCRUDService',['$http', function($http) {

    
    this.getSession = function getSession(idSession) {
        return $http({
            method : 'GET',
            url: `${API_URL_D}/session/get/${idSession}`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };

    //service GET USER
this.getAllSession = function getAllSession() {
    return $http({
        method : 'GET',
        url: `${API_URL_D}/session/get/all`,
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};
// service Add Sesion-add

this.addSession = function addSession( name, email,pwd,status) {
    var dataSession={
        name:name,
        credentials: {
           email:email,
           passWord:pwd
        },
        status:status
    }
    return $http({
        method : 'POST',
        url: `${API_URL_D}/session/add`,
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data :dataSession
    });
};
//service UPDATE
this.updateSession = function updateSession(idSession,name,email,
    pwd, status, owner) {
    var dataSession={
        id:idSession,
        name:name,
        credentials: {
           email:email,
           passWord:pwd
        },
        status:status,
        owner:owner
    }
    return $http({
        method : 'patch',
        url: `${API_URL_D}/session/edit/${idSession}`,
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        
        data : dataSession
    });
};
//service DELETE
    this.deleteSession = function deleteSession(id) {
                 return $http({
                     method : 'GET',
                     url: `${API_URL_D}/session/remove/${id}`,
                        headers: {
                         'Authorization': `Bearer ${token}` ,
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                        }
                     })
    };   
    //service Attribute
    this.attributSession = function attributSession(id) {
        return $http({
            method : 'GET',
            url: `${API_URL_D}/session/setTo/${id}`,
               headers: {
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
               }
            })
};
}]);