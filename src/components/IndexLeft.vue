<template lang="html">
  <div class="col-md-9 col-xs-12 content-left">
    <div class="col-md-12 col-xs-12">
      <ul class="list-inline content-left-type">
        <li><router-link :to="{ name: '', params: {} }">最新</router-link></li>
        <li><router-link :to="{ name: '', params: {} }">活跃</router-link></li>
        <li><router-link :to="{ name: '', params: {} }">精华</router-link></li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item" v-for="_ in 20">
          <img data-toggle="tooltip" data-placement="left" title="codeforyou" src="../assets/img/avatar.jpg" alt="codeforyou">
          <router-link :to="{ name: '', params: {} }">Hello World</router-link>
          <span class="pull-right hidden-xs">
            <span data-toggle="tooltip" data-placement="top" title="点赞量">88</span>
            <span>/</span>
            <span data-toggle="tooltip" data-placement="top" title="浏览量">88</span>
            <span>/</span>
            <span data-toggle="tooltip" data-placement="top" title="回复量">88</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexLeft'
}
</script>

<style lang="css">
</style>
