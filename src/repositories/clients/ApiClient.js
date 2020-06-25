import axios from 'axios';
import ModyoAuth from './ModyoAuthClient';
import { externalApiBase } from '../settings/modyo';


const apiAxios = axios.create({
  baseURL: externalApiBase,
});

const injectToken = async (config) => {
  try {
    const response = await ModyoAuth.get('access_token');
    const newConfig = config;
    newConfig.headers.authorization = `Bearer ${response.data.access_token}`;
    return newConfig;
  } catch (error) {
    throw new Error('Unauthorized');
  }
};

apiAxios.interceptors.request.use(injectToken);

export default apiAxios;
