import axios from "axios";
const urlbase = process.env.apiServer;

export async function deleteRequest(atrebut) {
    let result = null;
    const config = {
        headers: {
            'Access-Control-Allow-Credentials': true,
        },
        withCredentials: true,
        crossDomain: true,
        
    }
    await axios.delete(urlbase + atrebut, config).then((response) => {
        result = response;
    }).catch(function (error) {
        result = error;
    });
    return result;

}