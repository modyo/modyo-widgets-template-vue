import axios from 'axios';
import liquidParser from '../../liquid/liquidParser';

const profileApiPath = '/api/profile';
const accountUrl = liquidParser.parse('{{account.url}}');
const TokenM = liquidParser.parse('{{user.access_token}}');
const ModyoProfileClient = axios.create({
  baseURL: `${accountUrl}${profileApiPath}`,
  headers: { Authorization: `Bearer ${TokenM}` },
});

const resetIdleTime = function resetTime(request) {
  try {
    sessionManager.resetIdleTime();
    return request;
  } catch (error) {
    return request;
  }
};
const failedGetAuth = function failedAuth() {
  sessionManager.logout();
};
const parseResponse = (response) => response.data;
ModyoProfileClient.interceptors.request.use(resetIdleTime);
ModyoProfileClient.interceptors.response.use(parseResponse, failedGetAuth);
export default ModyoProfileClient;
