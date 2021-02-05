
application.service('prospectService',['$http', function($http) {

    ///add a new prospect 
    this.addProspect = function add(nom_Prospect,prenom_Prospect,numero_tel) {
        return $http({
            method : 'POST',
            url: `${API_URL_D}/prospect/add`,
           
            data : {
    
                nom_Prospect: nom_Prospect,
                prenom_Prospect: prenom_Prospect,
                numero_tel: numero_tel
           
            } 
        });
    };
    //récupertion d'un forfait particulier 
    this.getProspect = function getOneProspect(id) {
        return $http({
            method : 'get',
            url: `${API_URL_D}/prospect/${id}`,
        });
    };
    this.getAllProspects = function getProspects() {
        return $http({
            method : 'get',
            url: `${API_URL_D}/prospect/all`,
        });
    };
       
}]);


