// Mes variables globales 
var application = angular.module('app', ['ngRoute']);
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";


let URL = document.URL.split('/')
let endPoint = URL[URL.length - 1 ]
if(endPoint !== "login"){
    var token =  document.cookie
}
// regarde si le token est toujours valide
function isValidToken(token){
    curentTime = Math.floor(Date.now() / 1000);
    console.log(Date.now() /1000);
    console.log("the token", token );
    console.log("voici le temps courant",curentTime);
     return (token >= curentTime);
}
console.log(isValidToken(token));