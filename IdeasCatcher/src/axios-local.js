import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ideas-crud.firebaseio.com'
});

export default instance;