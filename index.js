import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation.js'
import actions from './actions.js'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs : [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  }
  ,
  mutations: mutations,
  actions: actions,
})