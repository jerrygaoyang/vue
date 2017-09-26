<template lang="html">
  <div class="container" id="register">
    <div class="row">
      <div class="col-md-4 col-md-offset-4 col-xs-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            注册
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label for="name">用户名</label>
              <input type="text" class="form-control" id="name" placeholder="用户名">
              <p class="help-block"></p>
            </div>
            <div class="form-group">
              <label for="telephone">邮箱</label>
              <input type="text" class="form-control" id="telephone" placeholder="手机">
              <p class="help-block"></p>
            </div>
            <div class="form-group verifycode">
              <label for="verifycode">验证码</label>
              <input type="text" class="form-control" id="verifycode" placeholder="验证码">
              <span>获取验证码</span>
              <p class="help-block"></p>
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="text" class="form-control" id="password" placeholder="密码">
              <p class="help-block"></p>
            </div>
            <router-link :to="{ name: 'register', params: {} }" tag='button' class="btn btn-m form-control">注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped="">
input,button{
  height: 40px
}
.verifycode{
  position: relative;
}
.verifycode span{
  position: absolute;
  right: 0;
  top: 25px;
  height: 40px;
  width: 100px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  background-color: #f4645f;
  color: #ffffff;
}
</style>
