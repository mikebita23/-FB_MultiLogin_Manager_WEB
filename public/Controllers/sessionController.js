
// Creation de controller UserCRUDCtrl
//USER

application.controller('sessionCRUDCtrl', ['$scope', 'sessionCRUDService',
    function ($scope, sessionCRUDService) {
        //Add user 
        
        $scope.addSession = function () {
           
            sessionCRUDService.addSession($scope.session.name,$scope.session.email,
                $scope.session.pwd, $scope.session.status)
                .then(function success(response) {
                    $scope.message = 'Session added!';
                    $scope.errorMessage = '';
                    console.log($scope.message,  response.data);          
                },
                    function error(response) {
                        $scope.errorMessage = 'Error adding Session!';
                        $scope.message = '';
                        console.log($scope.errorMessage);
                    });
        }

        $scope.updateSession = function () {
            sessionCRUDService.updateSession($scope.session.id,$scope.session.name,$scope.session.email,
                $scope.session.pwd, $scope.session.status, $scope.session.owner)
                .then(function success(response) {
                    $scope.message = 'Session data updated!';
                    console.log($scope.message)
                    $scope.errorMessage = '';
                },
                    function error(response) {
                        $scope.errorMessage = 'Error updating session!';
                        $scope.message = '';
                        console.log($scope.errorMessage)
                    });
        }

        $scope.deleteSession = function () {
            sessionCRUDService.deleteSession($scope.session.id)
                .then(function success(response) {
                    $scope.message = 'Session deleted!';
                    $scope.Session = null;
                    $scope.errorMessage = '';
                    console.log($scope.message)
                },
                    function error(response) {
                        $scope.errorMessage = 'Error deleting Session!';
                        $scope.message = '';
                        console.log($scope.errorMessage)
                    });
        };
        $scope.attributSession = function () {
            sessionCRUDService.attributSession($scope.user.id)
                .then(function success(response) {
                    $scope.message = 'Session atributed!';
                    $scope.Session = null;
                    $scope.errorMessage = '';
                    console.log($scope.message)
                },
                    function error(response) {
                        $scope.errorMessage = 'Error set to Session!';
                        $scope.message = '';
                        console.log($scope.errorMessage)
                    });
        }
    }]);
application.controller('sessionCRUDCtrlAll', ['$scope', 'sessionCRUDService',
    function ($scope, sessionCRUDService) {
        sessionCRUDService.getAllSession()
            .then(function success(response) {
               $scope.sessions=response.data
                $scope.name = response.data;
                $scope.message = 'get All Session';
                $scope.errorMessage = '';
                console.log($scope.message, response.data)
            },
                function error(response) {
                    $scope.message = '';
                    $scope.errorMessage = 'Error getting users!';
                    console.log($scope.errorMessage)
                });

    }]);
   
