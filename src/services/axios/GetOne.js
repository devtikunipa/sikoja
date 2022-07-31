import http from './http';

const GetOne = (path) => {
    return new Promise((resolve, reject) => {
        http.get(path).
            then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error.message);
            })
    })
}

const SikojaOne = (id) => GetOne('sikoja/' + id);

const APIGETONE = {
    SikojaOne,
}


export default APIGETONE

