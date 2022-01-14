<template lang="">
  <div>
     <ul>
      <li v-for="item in this.$store.state.ask" class="post">   
        <div class="point">{{item.points}}</div>
        <div>
          <router-link :to="`item/${item.id}`"> {{item.title}}</router-link> 
          <div class="userNames">
            <small>{{item.time_ago}}</small>
            by <router-link :to="`/user/${item.user}`" class="userName">{{item.user}}</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex' //vuex에서 제공하는 map을 적용한 상태의 state를 불러오는 함수.
import bus from '../utils/bus.js';
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
     bus.$emit('start:spinner');
     setTimeout(()=> {
       this.$store.dispatch('FETCH_ASK')
        .then(() => {
          bus.$emit('end:spinner');
        }) //dispatch : vuex의 action을 실행
        .catch(err=> console.log(err));
     }, 3000);
     
   }
}
</script>
<style scoped>
ul {
  margin-top: 10px;
  padding:0px;
}
.post {
  list-style: none;
  display :flex;
  align-items: center;
  border-bottom : 1px solid #828282;
}

.point{
  width: 80px;
  height: 60px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: #42b883;
}
.userNames {
  padding-top:2px;
  font-size: 0.8rem;
}
  
</style>