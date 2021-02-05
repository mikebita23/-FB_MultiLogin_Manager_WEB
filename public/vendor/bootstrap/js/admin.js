
const navbar = document.querySelector('#navbar_admin');
const tableUsers = document.getElementById('usersTable'); 
const tabForfait = document.getElementById('tabForfait');
const tabMessages = document.getElementById('tabMessages');
const loginAdmin = document.getElementById('loginAdmin');


  function displayTable(id, tableBlock) {
    navbar.addEventListener('click', (e) => {
      var tableUserIsVisible = e.target.id === id ? 'block': 'none';
      tableBlock.style.display = tableUserIsVisible;
    });
  }
    displayTable("users_A", tableUsers);
    displayTable("forfaits_A", tabForfait);
    displayTable("messages_A", tabMessages);
    displayTable("login", loginAdmin);

// jquery for the table 
function addOptionsOnTable(id){
  $(document).ready(function () {
    $(id).DataTable();
  });
}

addOptionsOnTable('#myTableUsers');
addOptionsOnTable('#messageTable');
addOptionsOnTable('#loginAdmin');
// switch button 
tabMessages.addEventListener('click', (e) => {
   if(e.target.checked){
    var theId = e.target.id;
    var theDiv = document.getElementById(theId);
    var text = theDiv.parentElement.lastElementChild;
    text.textContent = "oui";
   } else {
    var theId = e.target.id;
    var theDiv = document.getElementById(theId);
    // var text = theDiv.parentElement.lastElementChild;
    // text.textContent = "non";
   }
  
});

const openModal= function(e){
  e.preventDefault()
  const taget= document.querySelector(e.target.getAttribute('exampleModal'))
}
