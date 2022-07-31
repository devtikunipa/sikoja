import http from './http';

const Store = (path, data) => {
    return new Promise((resolve, reject) => {
        http.post(path, data).
            then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error.message);
            })
    })
}

const StoreSikoja = (id) => GetOne('sikoja/', data);

const APISTORE = {
    StoreSikoja,
}


export default APIGETONE