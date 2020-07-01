import axios from 'axios';
import { accountUrl, authPath } from './config/modyo.config';

export default axios.create({
  baseURL: `${accountUrl}+${authPath}`,
});
