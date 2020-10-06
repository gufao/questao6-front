import axios from 'axios';

const api = axios.create({ baseURL: `https://questao6-back.server.prototipos.xyz/`})

export default api;