import axios from "axios";
const urlbase = process.env.apiServer;

export async function postRequest(atrebut, bodyObject) {
    let result = null;
    const config = {
        headers: {
            'Access-Control-Allow-Credentials': true,
        },
        withCredentials: true,
        crossDomain: true,
    }
    await axios.post(urlbase + atrebut + '/', bodyObject, config).then((response) => {
        result = response;
    }).catch(function (error) {
        result = error;
    });
    return result;
}

export async function postAuthRequest(atrebut, token) {
    const config = {
        headers: {
            'authorization': 'Bearer ' + token,
        },
    }
    let result = null;
    await axios.post(urlbase + atrebut + '/', {}, config).then((response) => {
        result = response;
    }).catch(function (error) {
        result = error;
    });
    return result;
}