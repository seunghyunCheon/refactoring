<template lang="">
  <div>
    <ul>
      <li v-for="item in listItems" class="post">   
        <div class="point">{{item.points || 0}}</div>
        <div>
          <template v-if="item.url">
            <a :href="item.url">
              {{item.title}}
            </a> 
          </template> 
          <template v-else>
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link> 
          </template> 


          <div class="userNames">
            by <router-link   
                  v-if="item.user"
                  :to="`/user/${item.user}`" class="userName">{{item.user}}</router-link>
                <a :href="item.url" v-else>
                  {{ item.domain }}
                </a>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  computed : {
    listItems() {
      return this.$store.state.list;
      // const name = this.$route.name;
      // if (name === "news") {
      //   return this.$store.state.news;
      // }else if(name === "ask") {
      //   return this.$store.state.ask;
      // }else if(name === "jobs") {
      //   return this.$store.state.jobs
      // }
    }
  },
   
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