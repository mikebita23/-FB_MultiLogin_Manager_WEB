//Creation de module
var application = angular.module('app', ['ngRoute']);

 //Variable globale
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmEyQGdtYWlsLmNvbSIsInVzZXJJZCI6MTAwNiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjExNDk5NTgyLCJleHAiOjE2MTE1MDMxODJ9.cCxI76Sx4OO-iwpj-i8R9Oasm-wD6MB9x_bdEWx7OsQ'
   
// Creaition des routes 

application.config(function($routeProvider){

    $routeProvider
    .when('/',{templateUrl:'./partiels/messages.html ', controller:'MsgReadCtrl'}) //index
    .when('/messages/:id',{templateUrl:'./partiels/message.html', controller: 'MsgReadCtrlFact'})//Message
    .when('/users',{templateUrl:'./partiels/user.html', controller: 'UserCRUDCtrl'})
    .otherwise({redirectTo:'/'});

});

//CREATION DE Factory Message

application.factory('MsgReadFactory', function($http, $q,$timeout) {

            var factory={
                posts:false,
                getPosts: function(){
                    var deferred=$q.defer();
                     $http({
                        method : 'GET',
                        url: `${API_URL}/Msg/all`,
                        headers: {
                            //'Authorization': `Bearer ${token_D}`  ,
                            'Authorization': `Bearer ${token}` ,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }).success(function(data, status){
                        factory.posts=data;
                        deferred.resolve(factory.posts);
                    }).error(function(data, status){
                        deferred.reject('Impossible de recuperer les messages');
                    });
                    return deferred.promise;
                },
                getPost: function(id){
                    var deferred=$q.defer();
                    var post={};
                    var posts=factory.getPosts().then(function(posts){
                        angular.forEach(post,function(value, key) {
                            if(value.id==id){
                                post=value
                            }                            
                        });
                        deffered.resolve(post);
                    }, function(msg){
                    deferred.reject(msg);
                    })
                    return deferred.promise;
                }
            };
            return factory
                 
});

///Creation de controller MsgReadCtrl
///MESSAGES 
application.controller('MsgReadCtrlFact',
 function($scope,MsgReadFactory, $routeParams ){
    // console.log($routeParams);'$routeParams',$routeParams
    $scope.loading=true;
var posts=MsgReadFactory.getPosts().then(function(post){
    $scope.loading=false
   $scope.posts=posts
}, function(msg){
    alert(msg)
});

});
application.controller('MsgReadCtrlFact',
 function($scope,MsgReadFactory, $routeParams ){
   
var post=MsgReadFactory.getPost($routeParams.id).then(function(post){
   
    $scope.Objet=post.Objet;
    $scope.Content=post.Content;
    $scope.senderId=post.senderId;
}, function(msg){
    alert(msg)
});

});











