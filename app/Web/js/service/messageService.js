
//CREATION DE SERVICE Message

application.service('MsgReadService',['$http', function($http) {

    //USER GET
        this.getMessage= function getMessage(id) {
            return $http({
                method : 'GET',
                url: `${API_URL}/Msg/:${id}`,
                headers: {
                    //'Authorization': `Bearer ${token_D}`  ,
                    'Authorization': `Bearer ${token}` ,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
        };
    
        //service GET USER
    this.getMessages = function getMessages() {
        var message
        return $http({
            method : 'GET',
            url: `${API_URL}/Msg/all`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    };

    //service GET message by  USER and Forfait
    this.getAllUserMsgForf = function getAllUserMsgForf() {
        return $http({
            method : 'GET',
            url: `${API_URL}/users/userMsgForf`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };

}]);