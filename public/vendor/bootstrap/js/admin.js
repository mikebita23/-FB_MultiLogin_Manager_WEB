

const navbar = document.querySelector('#navbar_admin');
// const tableProspect = document.getElementById('prospectTable'); 
const tableUsers = document.getElementById('usersTable'); 
const tabForfait = document.getElementById('tabForfait');
const tabMessages = document.getElementById('tabMessages');
const tabProspects = document.getElementById('tabProspects');
const tabSessions = document.getElementById('tabSessions');
const loginAdmin = document.getElementById('loginAdmin');
const theSwitch = document.getElementsByClassName('responseSwitch');

// jquery for the table 
function addOptionsOnTable(id){
  $(document).ready(function () {
    setTimeout(() => {
      $(id).DataTable({
        retrieve: true,
        paging: "full-reset"
        
      });
    }, 200);
  });
}
// addOptionsOnTable('#tableProspect');
addOptionsOnTable('#myTableUsers');
addOptionsOnTable('#messageTable');
addOptionsOnTable('#myTableProspects');
addOptionsOnTable('#myTableSessions');

const openModal= function(e){
  e.preventDefault()
  const taget= document.querySelector(e.target.getAttribute('exampleModal'))
}

//load automatique
function reloadOnclick(btnId){
  $(btnId).on('click', () => {
    setTimeout(() => { window.location.reload();}, 200);
  })
}
reloadOnclick('#add-forfait-btn')
reloadOnclick('#modalDeleteForfaitBtn')
reloadOnclick("#refresh");

const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', (e) => {
    document.cookie = ''
    window.location.replace("http://localhost:3000/login");
})

if (document.cookie == ""){
  window.location.replace("http://localhost:3000/login"); 
}


if(document.readyState !== "complete"){
   console.log('enchargement'); 
   console.log(document) 
}