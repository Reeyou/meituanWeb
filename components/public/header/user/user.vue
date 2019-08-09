<template>
  <div class='user-container'>
    <template v-if="user">
      欢迎您, <span class='username'>{{username}}</span>
      [<nuxt-link to="logOut">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link to="login" class='login'>立即登录</nuxt-link>
      <nuxt-link to="register" class='register'>注册</nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: ''
    }
  }
}
</script>