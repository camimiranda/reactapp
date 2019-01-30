import axios from 'axios';
export const cliente = axios.create({
    baseUrl: 'http://localhost:3001/api/v1/',
})