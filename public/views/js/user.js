
var myApp = angular.module('myApp', []);

// Appel des urls
const API_URL_D = "http://api.infinite-scale.fr";
const API_URL = "http://localhost:3003";

//Mes Variables globales
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFoaW1hLnRyYW9yZTA4OTVAZ21haWwuY29tIiwidXNlcklkIjoxMDEyLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTEzMTg2MjMsImV4cCI6MTYxMTMyMjIyM30.IV18TgL78PUd6nJbXOaBWJKJB9UaAC2-_rHPDNtRTLY'

const token_D = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6ZXJ0eUBnbWFpbC5jb20iLCJ1c2VySWQiOjUsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTEzMTkxNzMsImV4cCI6MTYxMTMyMjc3M30.0jn1jM6ezSOquKJu37rO9ysISLYg2I95hFjjcT6SeTg'
const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
});
 
// Controller GET DATA USERS-get
   
    myApp.controller('uController', function($scope, $http) {
        $http({
            method: 'GET',
            //url: `${API_URL}/users/all`,
            url: 'http://api.infinite-scale.fr/users/all',
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        
            })
            .then(function successCallback(response) {
                console.log("OK!")
                $scope.datas = response.data
            }, function errorCallback(response) {
                if (response.status = 401) { // If you have set 401
                    console.log("BAD 401")
                }
                else {
                    console.log("broken at last")
                }
            });
    });
   
    
myApp.controller('userController', function($scope, $http) {
    $http({
        method: 'GET',
        url:`${API_URL}/users/all`,
       // url: `${API_URL_D}/users/get`,
       headers: {
        //'Authorization': `Bearer ${token_D}`  ,
        'Authorization': `Bearer ${token}` ,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
        })
        .then(function successCallback(response) {
            $scope.datas = response.data
        }, function errorCallback(response) {
            if(response.status>=400){
              
               
                    
            }
            else {
                console.log("broken at last")
            }
        });
})    
    
// Controller GET DATA USERS-All
myApp.controller('usersController', function($scope, $http) {
    $http({
        method: 'GET',
       url:`${API_URL}/users/all`,
        //url: `${API_URL_D}/users/all`,
        headers: {
            //'Authorization': `Bearer ${token_D}`  ,
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then(function successCallback(response) {
            $scope.datas = response.data
        }, function errorCallback(response) {
            if(response.status>=400){
               
                   
               
            }
            else {
                console.log("broken at last")
            }
        });
})    

// Controller GET DATA USERS-Message-Forfait url=users/userMsgForf
myApp.controller('userMsgForfController', function($scope, $http) {
    $http({
        method: 'GET',
      url:`${API_URL}/users/userMsgForf`,
        //url: `${API_URL_D}/users/get`,
        headers: {
            //'Authorization': `Bearer ${token_D}`  ,
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then(function successCallback(response) {
            $scope.datas = response.data
        }, function errorCallback(response) {
            if(response.status>=400){
              
                    
                
            }
            else {
                console.log("broken at last")
            }
        });
}) 

// Controller Add User-add
myApp.controller('userAddController', function($scope, $http) {
    $http(
        
    ).then(function successCallback(response) {
            $scope.datas = response.data
        }, function errorCallback(response) {
            if(response.status>=400){
            
                    
             
            }
            else {
                console.log("broken at last")
            }
        });
})   


/* Project List Controller */
jsonProjects.controller('ProjectListCtrl', function ($scope, $http) {
    $http.get('../static/js/DATA.json').success(function(data) {
      $scope.projects = data;
    });
  });
  



//Gestion des evenements

$.when($.ready).then(_ =>{ 
    $('#messageButton').on('click', _ =>{
       
      
    });
}),



$("#menu-toggle").on('click', function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


// assuming $ is jQuery
$(document).on('click', 'a[href^="http"]', function (event) {
    event.preventDefault();
   
});