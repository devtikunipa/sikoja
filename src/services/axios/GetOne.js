import Http from './Http';

const GetOne = (path) => {
    return new Promise((resolve, reject) => {
        Http.get(path).
            then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error.response.data);
            })
    })
}

const SikojaOne = (id) => GetOne('sikoja/' + id);
const DispOne = (id) => GetOne('sikojadisp/' + id);

const APIGETONE = {
    SikojaOne,
    DispOne,
}


export default APIGETONE

