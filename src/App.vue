<template>
  <div>
    <Header/>
    <!-- 路由组件出口的地方 -->
    <router-view/>
    <!-- 在Home、Search显示，登录、注册隐藏-->
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name: '',
  components: { Header, Footer }
}
</script>

<style scoped>
</style>