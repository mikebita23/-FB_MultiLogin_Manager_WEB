//Préparation des paramètres de la fenêtre

var dialogOpts = {
    backdrop: true,
    keyboard: true,
    controller: ['$scope', '$modalInstance','scopeParent', 'id',
        function($scope, $modalInstance,scopeParent,id) { //Controller de la fenêtre. Il doit prend en paramètre tous les élèments du "resolve".
            $scope.delete = function() {
                //On fait appel à la fonction du scope parent qui permet de supprimer l'élément.
                //On peut également faire appel à un service de notre application.
                scopeParent.delete(id);
                //Fermeture de la fenêtre modale
                $modalInstance.close();
            };
            $scope.cancel = function() {
                // Appel à la fonction d'annulation.
                $modalInstance.dismiss('cancel');
            };
        }
    ],
    resolve: {
        scopeParent: function() {
            return $scope; //On passe à la fenêtre modal une référence vers le scope parent.
        },
        id: function(){
            return $scope.id; // On passe en paramètre l'id de l'élément à supprimer.
        }
    }
};
 //Ouverture de la fenêtre
$modal.open(dialogOpts);

angular.module('ngCrib')
.controller('crbController', function($scope, UserCRUDService){
    $scope.cribs;
    $scope.editCrib=function(cribs){
        $scope.editListing=true;
        $scope.existingListing=cribs;
    }
    UserCRUDService.getAllUsers.success(function(data){
        $scope.cribs=data;
    }).console.error((function(error){
        console.log(error)
    }));
})