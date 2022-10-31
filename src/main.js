import Vue from 'vue'
import App from './App.vue'
//三级联动的组件---全局组件
import TypeNav from '@/components/TypeNav'
//第一个参数：全局组件的名字 第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.config.productionTip = false
//引入路由
import router from '@/router'

//引入仓库
import store from '@/store'
//引入mockServe文件,让咱们模拟接口跑起来
import '@/mock/mockServe'
new Vue({
  //配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //下面代码作用:给项目添加路由功能,给全部VC实例身上拥有两个属性,$router|$route
  router,
  //注册仓库：组件实例的身上会多了一个属性$store属性
  store,
  render: h => h(App),
}).$mount('#app')
