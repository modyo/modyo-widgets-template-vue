import axios from 'axios';
import { accountUrl, authPath } from '../settings/modyo';

export default axios.create({
  baseURL: `${accountUrl}+${authPath}`,
});
