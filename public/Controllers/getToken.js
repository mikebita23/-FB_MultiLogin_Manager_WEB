

function sessionData()
{

    $.ajax({
        method : 'GET',
        url: `${API_URL_D}/session/get/all`,
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
       
        success : function success(response){ 
            // code_html contient le HTML renvoyé
            console.log("Session"+ response.data)
        
        },  
         error    : function (errorThrown) {
            var err = "An error has occured: " + errorThrown;
           
            }
    });
}
sessionData()