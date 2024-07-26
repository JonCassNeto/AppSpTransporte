import axios from 'axios';

const API_BASE_URL = 'http://api.olhovivo.sptrans.com.br/v2.1';
const API_KEY = 'SUA_API_KEY';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

const login = async () => {
    try {
        const response = await api.post('/Login/Autenticar?token=' + API_KEY);
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        return null;
    }
};

const getBusPositions = async () => {
    await login();
    try {
        const response = await api.get('/Posicao');
        return response.data;
    } catch (error) {
        console.error('Failed to get bus positions:', error);
        return [];
    }
};

export { getBusPositions };
