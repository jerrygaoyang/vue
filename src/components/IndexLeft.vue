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
          <router-link :to="{ name: 'Card', params: {} }">Hello World</router-link>
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

<style lang="css" scoped>
.content-left-type {
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #f4645f;
}

.content-left-type>li {
  padding: 15px;
}

.content-left .list-group {
  margin-bottom: 0;
}

.content-left .list-group li {
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.content-left .list-group li:first-child {
  border-top: none;
}

.content-left .list-group li:hover {
  background-color: #f7f7f7;
}

.content-left .list-group li img {
  width: 40px;
  border: 1px solid #ddd;
}

.content-left .list-group li .pull-right {
  height: 40px;
  line-height: 40px;
}

.content-left .list-group li .pull-right>span {
  padding: 5px;
  color: #888888;
  cursor: pointer;
}
.content-left>.col-md-12 {
  background-color: #ffffff;
  box-shadow: 0 3px 6px #dddddd;
}
</style>
