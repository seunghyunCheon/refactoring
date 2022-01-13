<template lang="">
  <div>
    <ul>
      <li v-for="item in this.$store.state.news" class="post">   
        <div class="point">{{item.points}}</div>
        <div>
          <a :href="item.url">{{item.title}}</a>  
          <div class="userNames">
            by <router-link :to="`/user/${item.user}`" class="userName">{{item.user}}</router-link>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  created() {
    if(this.$route.path === "/news"){
      this.$store.dispatch("FETCH_NEWS")
    }else if(this.$route.path === "ask"){
      this.$store.dispatch("FETCH_ASK")
    }else if(this.$route.path === "jobs"){
      this.$store.dispatch("FETCH_JOBS")
    }
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