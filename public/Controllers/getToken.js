const userName = document.getElementById('userName')
const pwd = document.getElementById('pwd')
var token 
$("#btnValiderAdmin").click(function(){
     console.log('good')
    $.ajax({
      
        url: `${API_URL_D}/Auth/login`,
        data : {
            email: userName,
            passWord:pwd
        },

        success : function(response){ // code_html contient le HTML renvoyé
           console.log(response.data.token)
        }
    });
   
});
