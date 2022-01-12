import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news : []
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(res => {
          context.commit('SET_NEWS', res.data)
        })
        .catch(err => console.log(err))
    }
  }
})