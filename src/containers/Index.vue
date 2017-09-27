<template lang="html">
  <div class="container index">
    <div class="row">
      <index-left></index-left>
      <index-right></index-right>
    </div>
  </div>
</template>

<script>
import IndexRight from '../components/IndexRight.vue'
import IndexLeft from '../components/IndexLeft.vue'
export default {
  name: 'Index',
  components: {
    'index-right': IndexRight,
    'index-left': IndexLeft
  },
  mounted(){
    $('[data-toggle="tooltip"]').tooltip()
  }
}
</script>

<style lang="css" scoped="">

</style>
