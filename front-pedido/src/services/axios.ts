import axios from 'axios'

const API_BASE_URL = 'http://10.10.6.207:8080'

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 2000
})