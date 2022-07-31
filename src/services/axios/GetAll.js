import http from './http';

const GetAll = (path) => {
    return new Promise((resolve, reject) => {
        http.get(path).
            then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error.message);
            })
    })
}

const Sikoja = () => GetAll('sikoja');
// const Sikoja = async () => {
//     try {
//         const result = GetAll('sikoja');
//         return result;
//     } catch (e) {
//         return e;
//     }
// }
const APIGETALL = {
    Sikoja,
}

export default APIGETALL