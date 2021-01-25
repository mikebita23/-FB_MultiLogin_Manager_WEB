var application = angular.module('app', ['ngRoute']);
//Variable globale
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwidXNlcklkIjoxMDAyLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTE1NjI3MzMsImV4cCI6MTYxMTU2NjMzM30.meNn-bs6DiY1yLNa3y2u90oS-Jo7ZGASS4LpetAWW9c'
 
application.config(function($routeProvider){

    $routeProvider
    .when('/',{templateUrl:'partiels/home.html ', controller:'MsgReadCtrl'}) //index
    .when('/messages/:id',{templateUrl:'partiels/message.html', controller: 'MsgReadCtrl'})//Message
    .when('/msgCRUD',{templateUrl:'partiels/messageRead.html', controller: 'MsgReadCtrl'})//Message
    .when('/userCRUD',{templateUrl:'partiels/users.html', controller: 'UserCRUDCtrl'})
    .when('/login',{templateUrl:'partiels/login.html', controller: 'loginController'})
    .otherwise({redirectTo:'/'});

});
