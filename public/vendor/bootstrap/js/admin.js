

const navbar = document.querySelector('#navbar_admin');
// const tableProspect = document.getElementById('prospectTable'); 
const tableUsers = document.getElementById('usersTable'); 
const tabForfait = document.getElementById('tabForfait');
const tabMessages = document.getElementById('tabMessages');
const tabProspects = document.getElementById('tabProspects');
const tabSessions = document.getElementById('tabSessions');
const loginAdmin = document.getElementById('loginAdmin');
const theSwitch = document.getElementsByClassName('responseSwitch');


  function displayTable(id, tableBlock) {
    navbar.addEventListener('click', (e) => {
      var tableUserIsVisible = e.target.id === id ? 'block': 'none';
      tableBlock.style.display = tableUserIsVisible;
    });
  }
  // displayTable("prospect_A",tableProspect);
    displayTable("users_A", tableUsers);
    displayTable("forfaits_A", tabForfait);
    displayTable("messages_A", tabMessages);
    displayTable("prospect_A", tabProspects);
    displayTable("session_A", tabSessions);
    // displayTable("login", loginAdmin);


// jquery for the table 
function addOptionsOnTable(id){
  $(document).ready(function () {
    setTimeout(() => {
      $(id).DataTable({
        retrieve: true,
        paging: "full-reset"
        
      });
    }, 400);
  });
}
// addOptionsOnTable('#tableProspect');
addOptionsOnTable('#myTableUsers');
addOptionsOnTable('#messageTable');
addOptionsOnTable('#myTableProspects');
addOptionsOnTable('#myTableSessions');
// addOptionsOnTable('#loginAdmin');
// switch button 
tabMessages.addEventListener('click', (e) => {
  console.log(e.target);
   if(e.target.checked){
    // var theId = e.target.id;
    // var theDiv = document.getElementById(theId);
    // var text = theDiv.parentElement.lastElementChild;
    // text.textContent = "oui";
    console.log("active")
   } else {
    // var theId = e.target.id;
    // console.log(theDiv)
    // var theDiv = document.getElementById(theId);
    // //var text = theDiv.parentElement.lastElementChild;
    // text.textContent = "non";
    console.log('descativer')
   }
  
});

const openModal= function(e){
  e.preventDefault()
  const taget= document.querySelector(e.target.getAttribute('exampleModal'))
}

//load automatique
const updateForfait = document.getElementById('update-forfait');
console.log(updateForfait);
$('#add-forfait-btn').on('click', () => {
  console.log('load')
  //window.location.reload(1);
  $('#tabForfait #tableauForfait').load('admin.html', { post: 'data' });
  
})


const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', (e) => {
    document.cookie = ''
    window.location.replace("http://localhost:3000/login");
})
