<template lang="">
  <div>
    <!-- 질문 상세 정보 -->
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user}}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago}}
          </div>
        </div>
      </div>
      <h2> {{ fetchedItem.title}} </h2>
    </section>
    <!-- 질문 댓글 -->
    <section>
      <div v-html="fetchedItem.content"> //html태그요소를 넣어야할떄.

      </div>
    </section>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>
<style>
.user-container {
  display : flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left : 8px;
}
.time {
  font-size: 0.7rem;
}
</style>