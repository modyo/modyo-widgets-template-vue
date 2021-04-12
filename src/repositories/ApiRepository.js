import ApiClient from './clients/ApiClient';

const ApiRepository = {
  summary() {
    return ApiClient.get('summary');
  },
};

export default ApiRepository;
