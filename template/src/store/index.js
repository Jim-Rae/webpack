import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  // todos: [
  //   { id: 1, text: '...', done: true },
  //   { id: 2, text: '...', done: false }
  // ],
  // count: 1

  newsData: {}
}

const getters = {
  // doneTodos (state, getters) {
  //   return state.todos.filter(todo => todo.done)
  // }

  top_stories (state, getters) {
    return state.newsData.top_stories
  }
}

// action通过store.dispatch('increment')方法触发
const actions = {
  // increment ({ commit, state }) {
  //   commit('increment')
  // }
}

const mutations = {
  // increment (state, payload) {
  //   state.count += payload.amount
  // }

  setNewsData (state, newsData) {
    state.newsData = newsData
  }
}

const plugins = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default new Vuex.Store({
  state,
  getters,
	actions,
  mutations,
  plugins
})

