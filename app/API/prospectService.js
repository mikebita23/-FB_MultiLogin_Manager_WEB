
application.service('prospectService',['$http', function($http) {

    ///add a new prospect 
    this.addProspect = function add(numProspect) {
        return $http({
            method : 'POST',
            url: `http://localhost:3004/prospect/add`,
           
            data : {
    
                 nom_Prospect: "nomProspect",
                prenom_Prospect: "prenomProspect",
                numero_tel: numProspect
           
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


