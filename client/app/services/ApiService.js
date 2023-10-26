import axios from 'axios'


const API_URL = 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL:API_URL,
    timeout:60000,
})


const apiService = (param) =>{
    return new Promise((resolve,reject)=>{
        api(param).then(response=>{
            resolve(response)
        }).catch(errors =>{
            reject(errors)
        })
    })
}

export default apiService;