var application = angular.module('app', ['ngRoute']);
//Variable globale
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmEyQGdtYWlsLmNvbSIsInVzZXJJZCI6MTAwNiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjExNTA0NjExLCJleHAiOjE2MTE1MDgyMTF9.K61N4lCI1hvQQuljxvz-URAl9D6VVLrfA5AfdwiDzjE'
 
application.config(function($routeProvider){

    $routeProvider
    .when('/',{templateUrl:'partiels/home.html ', controller:'MsgReadCtrl'}) //index
    .when('/messages/:id',{templateUrl:'partiels/message.html', controller: 'MsgReadCtrl'})//Message
    .when('/msgCRUD',{templateUrl:'partiels/messageRead.html', controller: 'MsgReadCtrl'})//Message
    .when('/userCRUD',{templateUrl:'partiels/users.html', controller: 'UserCRUDCtrl'})
    .otherwise({redirectTo:'/'});

});
