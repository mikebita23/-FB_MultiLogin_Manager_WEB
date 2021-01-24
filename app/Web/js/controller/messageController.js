  

///Creation de controller MsgReadCtrl
///MESSAGES 
application.controller('MsgReadCtrl',['$scope','MsgReadService','$routeParams',
 function($scope,MsgReadService,$routeParams){
     console.log($routeParams);


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
        var message;
        MsgReadService.getMessage($routeParams.id)
        .then(function(message){
            angular.forEach(post,function(value, key) {
                if(value.id==id){
                    message=value
                } 
            })                       
            })
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
    };
//With FORFAIT AND Message
$scope.getAllUserForf = function () {
    MsgReadService.getAllUserMsgForf()
      .then(function success(response) {
          $scope.userMsgForf = response.data;
          console.log(response);
          $scope.message='get Message by user and forfait';
          $scope.errorMessage = '';
          console.log( $scope.message)
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
          console.log( $scope.errorMessage)
      });
}

}]);