import axios from "axios";
const urlbase = process.env.apiServer;
export async function getRequest(atrebut, param = '') {
  let result = null;
  try {
    await axios.get(urlbase + atrebut + '/'+param)
      .then(function (response) {
        result = response.data;
      })
  }
  catch (err) {
    result = [];
    throw `Ошибка  + ${err.name} + ":" + ${err.message} + "\n" + ${err.stack}`;
  }
  return result;
}