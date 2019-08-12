<template>
  <div class='container'>
    <template v-if="username">
      欢迎您, <span class='username'>{{username}}</span>
      [<span @click='logout'>退出</span>]
    </template>
    <template v-else>
      <nuxt-link to="login" class='login'>立即登录</nuxt-link>
      <nuxt-link to="register" class='register'>注册</nuxt-link>
    </template>
  </div>
</template>
<script>
import { getUserInfo } from '@/service/userApi.js'
export default {
  data() {
    return {
      username: ''
    }
  },
  created() {
    getUserInfo().then(res => {
      console.log(res)
      this.username = res.username
    })
  },
  methods: {
    logout() {
      this.username = ''
      window.location.href = '/'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './user.scss'
</style>
