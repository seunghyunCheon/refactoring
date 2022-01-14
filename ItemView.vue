<template lang="">
  <div>
    <!-- 사용자 정보 -->
    <section>
      <UserProfile>
        <!-- 상위 컴포넌트에서 slot은 div나 template에 묶어 써야한다 -->
        <!-- 상위 컴포넌트의 slot은 name없이 하위는 name을 붙여줘서 정의. -->
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{fetchedItem.user}}
        </router-link>
        <template slot="time"> {{ fetchedItem.time_ago }}</template>
      </UserProfile>
    </section>
    <!-- 제목 -->
    <section>
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
import UserProfile from '../components/UserProfile.vue'
export default {
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
  components: {
    UserProfile,
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