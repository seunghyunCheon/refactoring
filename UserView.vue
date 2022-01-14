<template lang="">
  <div>
    <UserProfile :info="this.$store.state.user">
      <div slot="username">
        {{this.$store.state.user.id}}
      </div>
      <div slot="time">
        {{ this.$store.state.user.created}}
      </div>
      <div slot="karma">
        {{ this.$store.state.user.karma }}
      </div>
    </UserProfile>
  </div>
</template>
<script>
import UserProfile from '../components/UserProfile.vue'
export default {
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user
  //   }
  // },
  created() {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  },
  components : {
    UserProfile,
  }
}
</script>
<style lang="">
  
</style>