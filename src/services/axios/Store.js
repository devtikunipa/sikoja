import HTTPMAIN from './Http';
import { URLROOT } from "..";

const Store = (path, data) => {
    return new Promise((resolve, reject) => {
        HTTPMAIN().get(`${URLROOT}sanctum/csrf-cookie`).then(() => {
            HTTPMAIN().post(path, data).
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