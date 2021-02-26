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
 var thetime = (new Date().getTime() + 1) / 1000;
 var exp = Math.floor(thetime);
function isValidToken(){
    curentTime = Math.floor(Date.now() >= exp * 1000);
    console.log("voici le temps courant",curentTime);
    console.log(Date.now())
     return Date.now() >= exp * 1000 ? false : true ;
}

if(isValidToken()){
    console.log('oui le token est mort')
    
} else {
    console.log('token vivant')

}