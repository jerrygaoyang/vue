<template lang="html">
  <div class="container">
    <div class="row">
      <card-left></card-left>
      <card-right></card-right>
    </div>
  </div>
</template>

<script>
import CardLeft from '../components/CardLeft.vue'
import CardRight from '../components/CardRight.vue'
export default {
  name: 'Card',
  components: {
    'card-left': CardLeft,
    'card-right':CardRight
  },
  mounted(){
    $('[data-toggle="tooltip"]').tooltip()
  }
}
</script>

<style lang="css">
</style>
