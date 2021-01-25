var application = angular.module('app', ['ngRoute']);
//Variable globale
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwidXNlcklkIjoxMDAzLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTE1ODU4MTcsImV4cCI6MTYxMTU4OTQxN30.uLmlRG9A0ncFakvTUrgdMWlpgmL6vwz5U4SI45xb5ik'
 
application.config(function($routeProvider){

    $routeProvider
    .when('/',{templateUrl:'partiels/home.html ', controller:'MsgReadCtrl'}) //index
    .when('/messages/:id',{templateUrl:'partiels/message.html', controller: 'MsgReadCtrl'})//Message
    .when('/msgCRUD',{templateUrl:'partiels/messageRead.html', controller: 'MsgReadCtrl'})//Message
    .when('/userCRUD',{templateUrl:'partiels/users.html', controller: 'UserCRUDCtrl'})
    .when('/login',{templateUrl:'partiels/login.html', controller: 'loginController'})
    .when('/prospect-add',{templateUrl:'partiels/prospects.html', controller: 'prospectController'})
    .when('/prospect-add/:id',{templateUrl:'partiels/prospect.html', controller: 'prospectController'})
    .otherwise({redirectTo:'/'});

});
