import Axios from 'axios';

const config = {
    baseURL: process.env.VUE_APP_backend_route,
};

const api = Axios.create(config);

export default api;