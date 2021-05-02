import axios from 'axios';
import { DeleteAuthCookie } from './Auth'
import { history } from './../../index';


export default function api() {
    const api = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
    })
    api.interceptors.response.use(response => response, error => {
        if (error.message == 'Network Error' && !error.status) {
            Promise.reject()
            history.push('/network_error')
        }
        else if (error.response.status === 500) {
            Promise.reject()
            history.push('/500')
        }
        else if (error.response.status === 502) {
            Promise.reject()
            history.push('/502')
        }
        // else if (error.response.status === 401) {
        //     DeleteAuthCookie()
        //     Promise.reject()
        //     history.push('/401')
        // }
        else if (error.response.status === 404) {
            Promise.reject()
            history.push('/404')
        }
        return Promise.reject(error)
    })
    return api
}
