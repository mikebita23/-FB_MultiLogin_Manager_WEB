application.service('prospectService',['$http', function($http) {

    ///add a new prospect 
    this.addProspect = function add(nomProspect,prenomProspect,numProspect) {
        return $http({
            method : 'POST',
            url: `${API_URL}/propspect/add`,
           
            data : {
    
                nom_Prospect: nomProspect,
                prenom_Prospect: prenomProspect,
                "numero_tel": numProspect
           
            } 
        });
    };
       
    }]);