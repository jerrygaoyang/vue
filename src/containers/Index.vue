<template lang="html">
  <div>
    <my-header></my-header>
    <div class="container index">
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'Index',
  components: {
    'my-header': Header
  }
}
</script>

<style lang="css" scoped="">
.index{
  text-align: center;
  margin-top: 200px
}
</style>
