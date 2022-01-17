import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../Views/UserView.vue'
import ItemView from '../Views/ItemView.vue'
import createListView from '../Views/CreateListView.js'
import { store } from '../store/index.js'
import bus from '../utils/bus.js'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            
              bus.$emit('end:spinner');
            
            }) //dispatch : vuex의 action을 실행
          .catch((err) => console.log(err))
        next();
      },
      // component: NewsView
      component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            bus.$emit('end:spinner');
          }) //dispatch : vuex의 action을 실행
          .catch((err) => console.log(err))
        next();
      },
      // component : AskView
      component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
              bus.$emit('end:spinner');
          }) //dispatch : vuex의 action을 실행
          .catch((err) => console.log(err))
        next();
      },
      // component : JobsView
      component : createListView('JobsView'),
    },
    {
      path: '/user/:id',
      component : UserView,
    },
    {
      path: '/item/:id',
      component : ItemView
    }
  ],
})