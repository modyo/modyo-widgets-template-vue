import PostRepository from './PostRepository';
import ApiRepository from './ApiRepository';

const repositories = {
  posts: PostRepository,
  api: ApiRepository,
};
const RepositoryFactory = {
  get: (name) => repositories[name],
};

export default RepositoryFactory;
