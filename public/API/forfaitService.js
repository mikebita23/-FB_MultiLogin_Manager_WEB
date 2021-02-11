//CREATION DE SERVICE UserCRUDService

application.service('forfaitCRUDService',['$http', function($http) {

    
    this.getForfait = function getForfait(idForfait) {
        return $http({
            method : 'GET',
            url: `${API_URL_D}/forf/${idForfait}`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };

    //service GET USER
this.getAllForfait = function getAllForfait() {
    return $http({
        method : 'GET',
        url: `${API_URL_D}/forf/all`,
        headers: {
          
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};
// service Add User-add

this.addForfait = function addForfait( Nom,description,prix) {
    return $http({
        method : 'POST',
        url: `${API_URL_D}/forf/add`,
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data : {
            nom:Nom,
            description:description,
            prix:prix    
          } 
    });
};
//service UPDATE
this.updateForfait = function updateForfait(idForfait, Nom,prix,description) {
    return $http({
        method : 'patch',
        url: `${API_URL_D}/forf/${idForfait}/edit`,
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        ,
        data : {
            nom:Nom,
            description:description,
            prix:prix    
          }
    });
};
//service DELETE
    this.deleteForfait = function deleteForfait(id) {
                 return $http({
                     method : 'GET',
                     url: `${API_URL_D}/forf/del/${id}`,
                        headers: {
                         'Authorization': `Bearer ${token}` ,
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                        }
                     })
    };    
}]);