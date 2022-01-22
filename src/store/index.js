import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      account:"123"
    }
  },
  mutations: {
    setUserInfo(state,data){
      state.userInfo = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
