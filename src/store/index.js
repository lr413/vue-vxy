import Vue from 'vue'
import Vuex from 'vuex'
//引入小仓库
import home from './home'
import search from './search'
//需要使用插件一次
Vue.use(Vuex)

//对外暴露
export default new Vuex.Store({
  modules: {
    home,
    search
  }
})