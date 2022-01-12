<template lang="">
  <div>
    asks
    <div v-for="item in fetchedAsk">{{item}}</div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex' //vuex에서 제공하는 map을 적용한 상태의 state를 불러오는 함수.

export default {
  computed : {

    ...mapGetters([
      'fetchedAsk'
    ])
    // ask(){
    //   return this.$store.state.ask
    // }
  },
  //mounted에 fetch를 넣게되면 이미 created단계가 지난 data를 Dom에 그리고 data를 수정함으로써 또 다시 그리기때문에 비효율적 
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>
<style lang="">
  
</style>