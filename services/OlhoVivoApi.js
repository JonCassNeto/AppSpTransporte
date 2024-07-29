// OlhoVivoApi.js
import axios from 'axios';
import { API_KEY, API_BASE_URL } from './Config';

const api = axios.create({
  baseURL: API_BASE_URL,
});

let isAuthenticated = false;

export const authenticate = async () => {
  try {
    const response = await api.post(`/Login/Autenticar?token=${API_KEY}`);
    isAuthenticated = response.data;
    return isAuthenticated;
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    throw error;
  }
};

const ensureAuthenticated = async () => {
  if (!isAuthenticated) {
    await authenticate();
  }
};

export const getVehiclePositions = async () => {
  await ensureAuthenticated();
  const response = await api.get('/Posicao');
  return response.data;
};

export const getLines = async () => {
  await ensureAuthenticated();
  const response = await api.get('/Linha');
  return response.data;
};

export const getStops = async () => {
  await ensureAuthenticated();
  const response = await api.get('/Parada');
  return response.data;
};

export const getArrivalPredictions = async (stopId) => {
  await ensureAuthenticated();
  const response = await api.get(`/Previsao/Parada?codigoParada=${stopId}`);
  return response.data;
};

export const getCorridors = async () => {
  await ensureAuthenticated();
  const response = await api.get('/Corredor');
  return response.data;
};

export const getRoadSpeeds = async () => {
  await ensureAuthenticated();
  const response = await api.get('/Velocidade');
  return response.data;
};

export default api;
