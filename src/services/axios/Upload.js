import HttpUpload from "./httpUpload";

const Galery = (path, data) => {
    return new Promise((resolve, reject) => {
        HttpUpload.post(path, data,).
            then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error);
            })
    })
}

const UploadGalery = (data) => Galery('uploadGalery', data);

const APIUPLOAD = {
    UploadGalery,
}


export default APIUPLOAD