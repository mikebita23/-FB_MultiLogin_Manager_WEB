 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwidXNlcklkIjoxMCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjExMzI3MjkyLCJleHAiOjE2MTEzMzA4OTJ9.yiQ2C-UE0Jw7UHmQi8pnZjQ-f8mlpWxYwrrkMtwhg9w";
const getBtn =document.getElementById('btnGet');
const postBn =document.getElementById('btnGet');
const API_URL = "http://localhost:3003";
const API_URL_D = "https://infinite-scale-api.herokuapp.com/";
//  const myHeaders = new Headers({
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
// });
const webApp = angular.module('webApp', []);

// Creation de la fonction générique
//  const sendHttpRequest = (method, url, data) => {
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(data),
//         headers: myHeaders,
//         //headers:data?{'Content-Type':'application/json'}:{},
//         credentials: 'same-origin',

//     }).then(response => {

//         if (response.status >= 400) {
//             return response.json().then(errResData => {
//                 const error = new Error('Something went wrong on api server!');
//                 error.data = errResData;
//                 throw error;
//             });
//         }
//         return response.json();
//     })

// };
// //Traitement User
// var don
// //OK
//  function getDataUser() {

//     $.ajax({
//         url: `${API_URL}/users/get`,
//         type: 'GET',
//         contentType: 'application/json',
//         headers: {
//             'Authorization': `Bearer ${token}`
//         },
//         success: function (result) {
//             console.log(result)
//             return result;
//         },
//         error: function (error) {
//         }
//     });
// }

//  function getAllData() {

//     $.ajax({
//         url: `${API_URL}/users/userMsgForf`,
//         type: 'GET',
//         contentType: 'application/json',
//         headers: {
//             'Authorization': `Bearer ${token}`
//         },
//         success: function (result) {
//             console.log(result)
//             return result;
//         },
//         error: function (error) {
//         }
//     });
// }


 webApp.controller('dataController', function getDataUsers($scope, $http) {
    $http({
        url: `${API_URL}/users/all`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( function (result) {
            $scope.usersDatas = result;
            console.log($scope.usersDatas);
           return $scope.usersDatas;
        })
        
}) 
//OK
//  const sendDataUser = () => {
//     console.log("OKKKKKK");
//     sendHttpRequest('POST',
//         `${API_URL}/users/add`,
//         {
//             firstName: nom.value,
//             lastName: prenom.value,
//             email: email.value,
//             phoneNumber: phone.value,
//             passWord: psw.value,
//             role: "ADMIN",
//             forfaitId: null

//         }).then(responseData => {
//             console.log(responseData);
//         }).catch(err => {
//             console.log(err, err.data);
//         });
// };
// //OK
//  const editDataUser = () => {
//     sendHttpRequest('POST',
//         `${API_URL}/users/edit`,
//         {
//             firstName: nom.value,
//             lastName: prenom.value,
//             email: email.value,
//             phoneNumber: phone.value,
//             passWord: psw.value,
//             role: "ADMIN",
//             forfaitId: null
//         }).then(responseData => {
//             console.log(responseData);
//         }).catch(err => {
//             console.log(err, err.data);
//         });
// };
// //Traitement forfait
// //OK
//  const getDataForfaits = () => {
//     $.ajax({
//         url: `${API_URL}/forf/all`,
//         type: 'GET',
//         contentType: 'application/json',
//         headers: {
//             'Authorization': `Bearer ${token}`
//         },
//         success: function (result) {
//             console.log(result);
//             return result;
//         },
//         error: function (error) {
//         }
//     });
// }
// //OK
//  const sendDataForfaits = () => {
//     sendHttpRequest('POST', `${API_URL}/forf/add`, {
//         nom: nom.value,
//         prix: prix.value,
//         description: desc.value,
//     }).then(responseData => {
//         console.log(responseData);
//     }).catch(err => {
//         console.log(err, err.data);
//     });
// };
// //NOK
//  const getDataForfait = () => {

//     $.ajax({
//         url: `${API_URL}/forf/get`,
//         type: 'GET',
//         contentType: 'application/json',
//         headers: {
//             'Authorization': `Bearer ${token}`
//         },
//         success: function (result) {
//             console.log(result);
//         },
//         error: function (error) {
//         }
//     });
// };

// //NOK
//  const editDataForfait = () => {
//     sendHttpRequest('POST',
//         `${API_URL}/forf/edit`,
//         {
//             nom: nom.value,
//             prix: prix.value,
//             description: desc.value,
//         }).then(responseData => {
//             console.log(responseData);
//         }).catch(err => {
//             console.log(err, err.data);
//         });
// };

// //Traitement message
// //OK
//  const getDataMessages = () => {
//     $.ajax({
//         url: `${API_URL}/Msg/all`,
//         type: 'GET',
//         contentType: 'application/json',
//         headers: {
//             'Authorization': `Bearer ${token}`
//         },
//         success: function (result) {
//             console.log(result);
//             return result
//         },
//         error: function (error) {
//         }
//     });
// }

// //NOK
//  const getDataMessage = () => {

//     $.ajax({
//         url: `${API_URL}/Msg/get`,
//         type: 'GET',
//         contentType: 'application/json',
//         headers: {
//             'Authorization': `Bearer ${token}`
//         },
//         success: function (result) {
//             console.log(result);
//         },
//         error: function (error) {
//         }
//     });
// };

const showUsers = document.querySelector('#showUsers');
// showUsers.addEventListener('click',getDataUsers);

// Boutons listener
// getBtn.addEventListener('click', sendDataUser);
// postBn.addEventListener('click', getDataUsers)
//postBn.addEventListener('click', getteurs)
 //getBtn.addEventListener('click', editDataUser);
//   getBtn.addEventListener('click', getDataForfaits);
//getBtn.addEventListener('click', getDataMessages);
