import { defineStore } from 'pinia'
import Repository from '../../repositories/RepositoryFactory';

const ModyoProfileRepository = Repository.get('profile');

export const useUsersStore = defineStore('user', {
   state:()=>({
    userInfo: {},
   }),
   actions:{
   async getUserInfo() {
      const userInfo = await ModyoProfileRepository.userInfo();
      this.userInfo = userInfo;
    },
   }
})
