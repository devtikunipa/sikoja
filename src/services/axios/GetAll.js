import HTTPMAIN from './Http';

const GetAll = (path) => {
    return new Promise((resolve, reject) => {
        HTTPMAIN().get(path).
            then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error.response.data);
            })
    })
}


const Sikojas = () => GetAll('sikoja');
const Villages = () => GetAll('village');
const Streets = () => GetAll('street');
const APIGETALL = {
    Sikojas,
    Villages,
    Streets,
}

export default APIGETALL