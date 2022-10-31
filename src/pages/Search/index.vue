<template>
  <div>
    <h1>params参数-{{$route.params.keyword}}===props传递-{{keyword}}</h1>
    <h1>query参数-{{$route.query.k}}===props传递-{{k}}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  //路由组件可以传递props
  props:['keyword', 'k']
}
</script>

<style scoped>

</style>