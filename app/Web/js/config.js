var application = angular.module('app', ['ngRoute']);
//Variable globale
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImliQGliLmNvbSIsInVzZXJJZCI6MywiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjEyNTE2OTUwLCJleHAiOjE2MTI1MjA1NTB9.SwqA_NLaMuf78ZcZYInKwY9k4EGRR4LNZc_N943xXqs'
 
application.config(function($routeProvider){

    $routeProvider
    .when('/',{templateUrl:'partiels/home.html ', controller:'MsgReadCtrl'}) //index
    .when('/messages/:id',{templateUrl:'partiels/message.html', controller: 'MsgReadCtrl'})//Message
    .when('/msgCRUD',{templateUrl:'partiels/messageRead.html', controller: 'MsgReadCtrl'})//Message
    .when('/userCRUD',{templateUrl:'partiels/users.html', controller: 'UserCRUDCtrl'})
    .otherwise({redirectTo:'/'});

});
