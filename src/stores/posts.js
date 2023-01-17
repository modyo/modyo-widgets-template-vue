import { defineStore } from 'pinia'
import Repository from '../repositories/RepositoryFactory';

const PostRepository = Repository.get('posts');

export const usePostsStore = defineStore('posts', {
   state:()=>({loading: true,
    posts: [],
   }),
   getters:{
      async getPosts() {
         this.loading = true;
         try {
           const response = await PostRepository.getTop(3);
           const posts = response.entries.map((entry) => ({
             description: entry.fields.description,
             title: entry.fields.title,
             slug: entry.meta.slug,
             image: entry.fields.covers ? entry.fields.covers[0].url : '',
             imageAlt: entry.fields.covers ? entry.fields.covers[0].alt_text : '',
           }));
           this.posts = posts;
           return response;
         } catch (error) {
           return error;
         } finally {
           this.loading = false;
         }
       },
   }
})
