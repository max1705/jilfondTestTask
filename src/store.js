import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
  state() {
    return {
      base_url: "https://jsonplaceholder.typicode.com/users",
      currentUser: null,
      search: '',
      users: [],
      myResultId: '',
      errorMsg: 'начните поиск',
      activeIndex: undefined,
      preloader: false,
    }
  },
  getters: {    
    filteredUsers(state) {
      return state.users.filter(n => {
        return Object.values(n).some(m => m.toString());
      });
    }
  },
  mutations: {
    beforeGet(state, search) {
      const s = search;

      this.commit('clearActive')
      const userArr = s.split(', ').map(d => d.trim());

      for (let i = 0; i < userArr.length; i++) {
        if (parseInt(userArr[i])) {  
          state.myResultId = `${state.myResultId}` + `id=${userArr[i]}&`;
        }
        else
        {
          state.myResultId = `${state.myResultId}` + `username=${userArr[i]}&`;
        }
      }
      state.myResultId = state.myResultId.slice(0, -1);
      
      axios
        .get(`${state.base_url}?${state.myResultId}`)
        .then(
          state.preloader = true,
          state.errorMsg = '',
        )
        .then((response) => {
          if (response.data.length === 0) {
            state.errorMsg = 'ничего не найдено';
          }
          state.preloader = false,
          state.users = response.data;
        })
    },
    clearActive(state) {
      state.activeIndex = undefined;
      state.currentUser = null;
      state.myResultId = '';
      state.users = [];
      state.errorMsg = 'начните поиск';
    },
    setActive(state, index) {
      state.activeIndex = index;
      this.commit('getCurrentUser', index);
    },
    
    getCurrentUser(state, activeIndex) {
      axios
        .get(`${state.base_url}/?id=${activeIndex}`)
        .then((response) => {
          state.currentUser = response.data[0];
          console.log(state.currentUser)
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  }
})

export default store;