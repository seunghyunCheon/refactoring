import { fetchNewsList } from '../api/index.js'
import { fetchAskList, fetchJobsList } from '../api/index.js'
import { fetchUserInfo } from '../api/index.js'
import { fetchCommentItem } from '../api/index.js'
export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => {
        context.commit('SET_NEWS', res.data)
      })
      .catch(err => console.log(err))
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(res => context.commit('SET_ASK', res.data))
      .catch(err => console.log(err))
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(res => context.commit('SET_JOBS', res.data))
      .catch(err => console.log(err))
  },
  FETCH_USER({ commit }, data) {
    fetchUserInfo(data)
      .then(res => commit('SET_USER', res.data))
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => commit('SET_ITME', data))
      .catch(err => console.log(err))
  }
}