import axios from "axios";

const Http = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default Http