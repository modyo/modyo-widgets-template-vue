import ModyoProfileClient from './clients/ModyoProfileClient';

export default {
  userInfo() {
    return ModyoProfileClient.get('/me');
  },
};
