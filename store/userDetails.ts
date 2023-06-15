import { defineStore } from 'pinia';
import { UserDetails } from '~~/types/api/quiz';

export const useUserDetails = defineStore('useUserDetails', {
  state: () => {
    return {
      userDetails: {},
    } as {
      userDetails: UserDetails;
    };
  },
  getters: {},
  actions: {
    setUserDetails(userDetails: UserDetails) {
      this.userDetails = userDetails;
    }
  },
});
