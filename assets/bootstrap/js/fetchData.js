export const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
});


// Creation de la fonction générique
export const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: myHeaders,
        //headers:data?{'Content-Type':'application/json'}:{},
        credentials: 'same-origin',

    }).then(response => {

        if (response.status >= 400) {
            return response.json().then(errResData => {
                const error = new Error('Something went wrong on api server!');
                error.data = errResData;
                throw error;
            });
        }
        return response.json();
    })

};
//Traitement User
var don
//OK
export function getDataUser() {

    $.ajax({
        url: `${API_URL}/users/get`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        success: function (result) {
            console.log(result)
            return result;
        },
        error: function (error) {
        }
    });
}

export function getDataUsers() {
    $.ajax({
        url: `${API_URL}/users/all`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        success: function (result) {
            console.log(result)
            return result;
        },
        error: function (error) {
        }
    })
}
//OK
export const sendDataUser = () => {
    console.log("OKKKKKK");
    sendHttpRequest('POST',
        `${API_URL}/users/add`,
        {
            firstName: nom.value,
            lastName: prenom.value,
            email: email.value,
            phoneNumber: phone.value,
            passWord: psw.value,
            role: "ADMIN",
            forfaitId: null

        }).then(responseData => {
            console.log(responseData);
        }).catch(err => {
            console.log(err, err.data);
        });
};
//OK
export const editDataUser = () => {
    sendHttpRequest('POST',
        `${API_URL}/users/edit`,
        {
            firstName: nom.value,
            lastName: prenom.value,
            email: email.value,
            phoneNumber: phone.value,
            passWord: psw.value,
            role: "ADMIN",
            forfaitId: null
        }).then(responseData => {
            console.log(responseData);
        }).catch(err => {
            console.log(err, err.data);
        });
};
//Traitement forfait
//OK
export const getDataForfaits = () => {
    $.ajax({
        url: `${API_URL}/forf/all`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        success: function (result) {
            console.log(result);
            return result;
        },
        error: function (error) {
        }
    });
}
//OK
export const sendDataForfaits = () => {
    sendHttpRequest('POST', `${API_URL}/forf/add`, {
        nom: nom.value,
        prix: prix.value,
        description: desc.value,
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err, err.data);
    });
};
//NOK
export const getDataForfait = () => {

    $.ajax({
        url: `${API_URL}/forf/get`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
        }
    });
};

//NOK
export const editDataForfait = () => {
    sendHttpRequest('POST',
        `${API_URL}/forf/edit`,
        {
            nom: nom.value,
            prix: prix.value,
            description: desc.value,
        }).then(responseData => {
            console.log(responseData);
        }).catch(err => {
            console.log(err, err.data);
        });
};

//Traitement message
//OK
export const getDataMessages = () => {
    $.ajax({
        url: `${API_URL}/Msg/all`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        success: function (result) {
            console.log(result);
            return result
        },
        error: function (error) {
        }
    });
}

//NOK
export const getDataMessage = () => {

    $.ajax({
        url: `${API_URL}/Msg/get`,
        type: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
        }
    });
};



// Boutons listener
// getBtn.addEventListener('click', sendDataUser);
postBn.addEventListener('click', getDataUsers)
 //getBtn.addEventListener('click', editDataUser);
//   getBtn.addEventListener('click', getDataForfaits);
//getBtn.addEventListener('click', getDataMessages);
