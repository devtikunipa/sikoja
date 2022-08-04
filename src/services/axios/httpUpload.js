import axios from "axios";

const HttpUpload = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export default HttpUpload