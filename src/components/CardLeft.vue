<template lang="html">
  <div class="col-md-9 col-xs-12 content-left">
    <div class="col-md-12 col-xs-12">

      <div class="panel panel-default card-content">
        <div class="panel-heading card-heading">
          <h3 class="panel-title">
            <strong>『破局』创新应用大赛---正赛阶段公告</strong>
          </h3>
          <ul class="list-inline">
            <li>
              <span class="glyphicon glyphicon-leaf"></span>
              <router-link :to="{ name: '', params: {} }">分享</router-link>
            </li>
            <li>
              <span class="glyphicon glyphicon-time"></span>
              <router-link :to="{ name: '', params: {} }">3天前</router-link>
            </li>
            <li>
              <span class="glyphicon glyphicon-eye-open"></span>
              <router-link :to="{ name: '', params: {} }">88</router-link>
            </li>
            <li>
              <span class="glyphicon glyphicon-comment"></span>
              <router-link :to="{ name: '', params: {} }">88</router-link>
            </li>
            <li>
              <span class="glyphicon glyphicon-heart"></span>
              <router-link :to="{ name: '', params: {} }">88</router-link>
            </li>
          </ul>
        </div>
        <div class="panel-body card-body">
          <p v-for="_ in 30">『破局』创新应用大赛---正赛阶段公告</p>
        </div>
        <!-- <div class="panel-footer card-footer">

        </div> -->
      </div>

      <div class="panel panel-default card-comment">
        <div class="panel-heading">
          <h3 class="panel-title">回复数量： <b>20</b></h3>
        </div>
        <div class="panel-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="n in 20">
              <router-link :to="{ name: '', params: {} }">
                <img src="../assets/img/avatar.jpg" alt="codeforyou">
              </router-link>
              <router-link :to="{ name: '', params: {} }">
                <span class="username">cfgaoyang</span>
                改变自己，改变世界
              </router-link>
              <a class="pull-right hidden-xs">
                <span>#{{n}}</span>
                <span>2017-09-27</span>
                <span data-toggle="tooltip" data-placement="top" title="回复" class="glyphicon glyphicon-share-alt"></span>
              </a>
              <p class="card-comment-content">
              说到底，对个人来说还不就是钱？麻醉医生少，我们普通老百姓是无法解决的，我们只有多赚钱，生孩子的时候去私立，或者公立VIP。
            </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CardLeft'
}
</script>

<style lang="css" scoped>
.panel{
  margin-bottom: 0;
}
.card-content .panel-heading{
  background-color: #ffffff;
  padding-bottom: 0;
}
.card-content .panel-title{
  font-size: 25px;
  margin-top: 15px;
}
.card-content .card-heading li{
  padding: 20px 15px 0 15px
}
.glyphicon{
  color: #999999;
}
.card-comment{
  margin-top: 30px;
}
.card-comment .panel-heading{
  background-color: #fff;
  height: 50px;
  padding-top: 15px;
  border-bottom: 1px solid #ddd;
}
.card-comment .panel-body{
  padding: 0;
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
  width: 50px;
  border: 1px solid #ddd;
  margin-right: 15px;
}

.content-left .list-group li .pull-right>span {
  padding: 5px;
  color: #888888;
  cursor: pointer;
}
.card-comment-content{
  padding: 0 0 0 70px;
  margin-top: -10px;
}
.card-comment .list-group-item > a{
  vertical-align: top;
}
.username{
  vertical-align: top;
  margin-right: 20px;
  color: #f4645f;
}
</style>
