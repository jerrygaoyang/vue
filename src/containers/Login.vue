<template>
<div class="container" id="login">
  <div class="row">
    <div class="col-md-4 col-md-offset-4 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          登录
        </div>
        <div class="panel-body">
          <div class="form-group">
            <input type="email" class="form-control" id="email" placeholder="邮箱">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="password" placeholder="密码">
          </div>
          <button class="btn btn-m form-control" type="button">登录</button>

        </div>
        <div class="panel-footer">
          <router-link :to="{ name: 'register', params: {} }">忘记密码?</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style scoped>
input,button{
  height: 40px
}
.panel-footer{
  text-align: right;
}
.panel-footer a{
  margin-left: 30px
}
</style>
