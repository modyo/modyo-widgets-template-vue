import Repository from '../repositories/RepositoryFactory';

const PostRepository = Repository.get('posts');

export default {
  async getPosts({ commit }) {
    commit('setLoading', true);
    try {
      const response = await PostRepository.getTop(3);
      const posts = response.entries.map((entry) => ({
        description: entry.fields.description,
        title: entry.fields.title,
        slug: entry.fields.slug,
        image: entry.fields.covers ? entry.fields.covers[0].url : '',
        imageAlt: entry.fields.covers ? entry.fields.covers[0].alt_text : '',
      }));
      commit('updatePosts', posts);
      return response;
    } catch (error) {
      return error;
    } finally {
      commit('setLoading', false);
    }
  },
};
