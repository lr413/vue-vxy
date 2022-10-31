import { reqCategoryList } from '@/api'
//search模块的小仓库
const state = {
  categoryList: [],
}
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
}
const actions = {
  async getCategoryList({commit}) {
    let result = await reqCategoryList()
      if(result.code == 200) {
        commit('GETCATEGORYLIST', result.data)
      }
  }
}
const getters = {}

//对外暴露Store类的一个案例
export default {
  namespaced: true,
  state, 
  mutations,
  actions,
  getters
}