///Creation de controller MsgReadCtrl
///MESSAGES 
application.controller('MsgReadCtrl',['$scope','MsgReadService','$routeParams',
 function($scope,MsgReadService,$routeParams){
    

    //Get message All
    $scope.messages=[]

    $scope.getMessages= function () {
       
        MsgReadService.getMessages()
          .then(function success(response) {
              $scope.messages = response.data;
              $scope.message='get All';
              $scope.errorMessage = '';
              console.log($scope.message)         
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
              console.log( $scope.errorMessage)
          });
    };

    //Get Message 
    $scope.getMessage= function () {
        //var message={};
        MsgReadService.getMessage($routeParams.id)
          .then(function success(response) {
            //  $scope.message = response.data;
             console.log(response.data)
             $scope.messages=response.data;
              $scope.Object=response.data.Object;
              $scope.Content=response.data.Content;
            
              $scope.message='get Message';
              $scope.errorMessage = '';
              console.log($scope.message)
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
              console.log( $scope.errorMessage)
          });
    };


}]);

application.controller('getMessagesController', function getDataUsers($scope, MsgReadService,$http) {
    MsgReadService.getMessages()
    .then(function success(response) {
        $scope.messages = response.data;
        $scope.message='get All';
        $scope.errorMessage = '';
        console.log($scope.messages)         
    },
    function error (response) {
        $scope.message='';
        $scope.errorMessage = 'Error getting users!';
        console.log( $scope.errorMessage)
    });
}) 
var a=2
application.controller('MessageController',['$scope','MsgReadService','$routeParams',
 function($scope,MsgReadService,$routeParams){
console.log($routeParams)
    MsgReadService.getMessage($routeParams.id)
      .then(function success(response) {
         $scope.message = response.data;
         $scope.id=message.id;
          $scope.Objet=message.Objet;
          $scope.Content=message.Content;
          scope.senderId=message.senderId
          $scope.message='get Message';
          $scope.errorMessage = '';
          console.log( message)
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
          console.log( $scope.errorMessage)
      });
}]) 
application.controller('MsgForfController', function getDataUsers($scope, MsgReadService,$http) {
    MsgReadService.getAllUserMsgForf()
      .then(function success(response) {
          $scope.userMsgForf = response.data;
          console.log(response.data);
          $scope.message='get Message by user and forfait';
          $scope.errorMessage = '';
          console.log( $scope.message)
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
          console.log( $scope.errorMessage)
      });
}) 



