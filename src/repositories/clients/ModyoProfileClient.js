import axios from 'axios';
import liquidParser from '../../liquid/liquidParser';

const profileApiPath = '/api/profile';
const accountUrl = liquidParser.parse('{{account.url}}');
const TokenM = liquidParser.parse('{{user.access_token}}');

const ModyoProfileClient = axios.create({
  baseURL: `${accountUrl}${profileApiPath}`,
  headers: { Authorization: `Bearer ${TokenM}` },
});

export default ModyoProfileClient;
