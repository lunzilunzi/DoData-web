<template>
  <div id="Login">
    <div class="login-card">
      <div class="submit-login-button">
        <el-button type="primary" size="mini" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {

      }
    },
    created () {

    },
    methods: {
      login () {
        this.$store.commit('login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #Login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .login-card {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 400px;
      height: 250px;
      background: bisque;

      .submit-login-button {
        margin-bottom: 20px;
      }
    }
  }
</style>
