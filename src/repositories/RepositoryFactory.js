import TestRepository from './TestRepository';

const repositories = {
  test: TestRepository,
};
export default {
  get: (name) => repositories[name],
};
