<template>
  <div id="app">
    <Login v-if="!isLogin"></Login>
    <Home v-else></Home>
  </div>
</template>

<script>
  import Home from 'src/components/Home.vue'
  import Login from 'src/components/Login.vue'

  export default {
    name: 'App',
    components: {
      Home,
      Login
    },
    computed: {
      isLogin () {
        return this.$store.getters.isLogin
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
