


 var tdName =document.getElementById("name");
 var tdCrementiel = document.getElementById("crementiel");
 var tdStatus= document.getElementById("status");
 var resultats= document.getElementById("tbody");
  

let sessions;

function  sessionData(){
    $.ajax({
        //L'URL de la requête 
        url: `${API_URL_D}/session/get/all`,

    //La méthode d'envoi (type de requête)
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    //Le format de réponse attendu
        dataType : "json",
    })
    //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
    /*On peut par exemple convertir cette réponse en chaine JSON et insérer
     * cette chaine dans un div id="res"*/
    .done(function(response){
        sessions = response;
        console.log(sessions);
        resultats.innerHTML =(
            sessions.map(session =>(`
          <tr>
          <td id="name">${session.id}</td>
            <td id="name">${session.name}</td>
            <td id="credentials">${session.owner}</td>
            <td id="status">${session.status}</td>
            <td class="justify-items-center">
            <button type="button" data-toggle="modal" data-backdrop="false" class="btn btn-sm btn-info"
              data-target="#sessionModal_${session.id}"> <i class="fas fa-pencil-alt"></i> </button>
            <button type="button" data-toggle="modal" data-backdrop="false" class="btn btn-sm btn-danger"
              data-target="#sessionModalSupp_${session.id}"> <i class="far fa-trash-alt"></i></button>
              <!-- modifier forfait -->
            <div class="modal fade bg-black bg-opacity-75" id="sessionModal_${session.id}" tabindex="-1" role="dialog"
              aria-labelledby="userModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">modifier session</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                    <div class="modal-body">
                      <form action="" method="post">
                        <div class="form-group">
                          <label for="formGroupExampleInput">Nom session</label>
                          <input type="text" class="form-control" id="formGroupExampleInput"
                            placeholder="nom session" id="nom_Session">
                        </div>
                        <div class="form-group">
                          <label for="formGroupExampleInput2">Status</label>
                          <input type="number" class="form-control" id="formGroupExampleInput2"
                            placeholder="Status" id="status">
                        </div>
                        <div class="form-group">
                          <label for="formGroupExampleInput2">Client</label>
                          <input type="number" class="form-control" id="formGroupExampleInput2"
                            placeholder="Client" id="owner">
                        </div>
                        <div class="form-group">
                          <label for="formGroupExampleInput2">Email</label>
                          <input type="text" class="form-control" id="formGroupExampleInput2"
                            placeholder="email" id="email">
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Password</label>
                          <input class="form-control" id="pwd">
                           
                        </div>
                      </form>
                    </div>

                    <div class="modal-footer">
                      <button type="button" id="update-forfait" class="btn btn-success" data-dismiss="modal"
                       onclick="updateSession(forfait.id,forfait.nom,
                        forfait.prix, forfait.prix_base, forfait.nb_session,forfait.description )">valider</button>
                    </div>
                </div>
              </div>
            </div>
            <!-- Supprimer Session -->
            <div class="modal fade bg-black bg-opacity-75" id="sessionModalSupp_${session.id}" tabindex="-1" role="dialog"
              aria-labelledby="userModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 for="formGroupExampleInput"> Voulez-vous vraiment supprimer la session ?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div >
                      <div class="form-group">
                       <h4 class="text-3xl italic">${session.name}</h4>
                       
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal"
                        onclick="deleteSession(session.id)">Supprimer</button>
                    <button type="button" class="btn btn-success" data-dismiss="modal">annuler</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- fin modal -->
          </td>
          </tr>
    
      
            `
        )).join('')
        );
    })

    //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        console.log(error);
    })
};
var crementiel={}
 function addSession(name,owner,status,){
    $.ajax({
        method : 'POST',
        url: `${API_URL_D}/session/add`,
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data : {
            name:name,
            owner:owner,
            status:status,
            email:email,
            passWord:pwd 
          } ,
    //Le format de réponse attendu
        dataType : "json",
    }).done(function(response){
        sessions = response;
        console.log(sessions);
    }) //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        console.log(error);
    })
 }
 function updateSession(name,owner,status, email, pwd){
    $.ajax({
        method : 'POST',
        url: `${API_URL_D}/session/edit/${idSession}`,
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data : {
            name:name,
            owner:owner,
            status:status,
            email:email,
            passWord:pwd 
          } ,
    //Le format de réponse attendu
        dataType : "json",
    }).done(function(response){
        sessions = response;
        console.log(sessions);
    }) //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        console.log(error);
    })
 }
 function deleteSession(id){
    $.ajax({
        method : 'GET',
                     url: `${API_URL_D}/session/remove/${id}`,
                        headers: {
                         'Authorization': `Bearer ${token}` ,
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                        },
    //Le format de réponse attendu
        dataType : "json",
    }).done(function(response){
        sessions = response;
        console.log(sessions);
    }) //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        console.log(error);
    })
 }



$.when($.ready).then(_ =>{ sessionData()});