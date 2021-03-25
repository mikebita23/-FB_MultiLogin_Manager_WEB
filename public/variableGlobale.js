// Mes variables globales 
var application = angular.module('app', ['ngRoute']);
const API_URL_D = "http://localhost:3005"
const API_URL = "http://api.infinite-scale.fr";


let URL = document.URL.split('/')
let endPoint = URL[URL.length - 1 ]
if(endPoint !== "login"){
    var token =  document.cookie
}

