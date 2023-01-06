import PostRepository from './PostRepository';
import ApiRepository from './ApiRepository';
import ModyoProfileRepository from './ModyoProfileRepository';

const repositories = {
  posts: PostRepository,
  api: ApiRepository,
  profile: ModyoProfileRepository,
};
export default {
  get: (name) => repositories[name],
};
