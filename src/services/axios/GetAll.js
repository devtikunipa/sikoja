import Http from './Http';

const GetAll = (path) => {
    return new Promise((resolve, reject) => {
        Http.get(path).
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
// const Sikoja = async () => {
//     try {
//         const result = GetAll('sikoja');
//         return result;
//     } catch (e) {
//         return e;
//     }
// }
const APIGETALL = {
    Sikojas,
    Villages,
    Streets,
}

export default APIGETALL