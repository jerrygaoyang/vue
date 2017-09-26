import axios from 'axios';

let auth_token = localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : "";

axios.defaults.baseURL = '';
axios.defaults.headers.common['Authorization'] = auth_token;

const request = axios;

export default {
  request
}
