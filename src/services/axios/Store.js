import Http from './Http';
import { URLROOT } from "..";

const Store = (path, data) => {
    return new Promise((resolve, reject) => {
        Http.get(`${URLROOT}sanctum/csrf-cookie`).then(() => {
            Http.post(path, data).
                then(result => {
                    resolve(result.data);
                }).catch(error => {
                    reject(error.response.data);
                })
        })
    })
}

const StoreSikoja = (data) => Store('sikoja', data);

const APISTORE = {
    StoreSikoja,
}


export default APISTORE