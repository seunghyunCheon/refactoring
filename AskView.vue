<template lang="">
  <div>
    asks
    <div v-for="ask in asks">{{ask}}</div>
  </div>
</template>
<script>
import {fetchAskList} from '../api/index.js'
export default {
  data() {
    return {
      asks : []
    }
  },
  //mounted에 fetch를 넣게되면 이미 created단계가 지난 data를 Dom에 그리고 data를 수정함으로써 또 다시 그리기때문에 비효율적 
  created() {
    fetchAskList()
      .then(res => this.asks = res.data)
      .catch(err => console.log(err))
  }
}
</script>
<style lang="">
  
</style>