import axios from 'axios';

const accountUrl = 'https://un.modyo.cloud';
const authPath = '/auth/openidc';

export default axios.create({
  baseURL: `${accountUrl}+${authPath}`,
});
