<template lang="">
  <div>
    <ListItem></ListItem>
  </div>
</template>
<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js';
export default {
  components : {
    ListItem,
  },
  created() {
     bus.$emit('start:spinner');
     setTimeout(()=> {
       this.$store.dispatch('FETCH_JOBS')
        .then(() => {
          bus.$emit('end:spinner');
        }) //dispatch : vuex의 action을 실행
        .catch(err=> console.log(err));
     }, 3000);
     
   }
}
</script>
<style scoped>

  
</style>