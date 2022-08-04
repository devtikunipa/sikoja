import HttpUpload from "./httpUpload";
import { URLROOT } from "..";

const Galery = (path, data) => {
    return new Promise((resolve, reject) => {
        HttpUpload.get(`${URLROOT}sanctum/csrf-cookie`).then(() => {
            HttpUpload.post(path, data).
                then(result => {
                    resolve(result.data);
                }).catch(error => {
                    reject(error.response.data);
                })
        })
    })
}

const UploadGalery = (data) => Galery('uploadGalery', data);

const APIUPLOAD = {
    UploadGalery,
}


export default APIUPLOAD