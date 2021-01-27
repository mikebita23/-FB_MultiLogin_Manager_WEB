
      const navbar = document.querySelector('#navbar_admin');
      const tableUsers = document.getElementById('usersTable'); 
      const tabForfait = document.getElementById('tabForfait');
      navbar.addEventListener('click', (e) => {
        console.log(e.target.id);
        var tableUserIsVisible = e.target.id === "users_A" ? '': 'none';
        tableUsers.style.display = tableUserIsVisible;
        var tableUserIsVisible = e.target.id === "forfaits_A" ? 'visible': 'hidden';
        tabForfait.style.visibility = tableUserIsVisible;
      });



