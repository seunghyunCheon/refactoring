<template lang="">
  <div>
    <div v-for="user in this.$store.state.news">{{user.title}}</div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS'); //dispatch : vuex의 action을 실행
  }
}
</script>
<style lang="">
  
</style>