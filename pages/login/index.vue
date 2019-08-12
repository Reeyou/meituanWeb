<template>
  <div class='user-container'>
    <div class="login-header">
      <div class="header">
        <img src="">
      </div>
    </div>
    <div class="login-container clearfix"> 
      <div class="left">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
      </div> 
      <div class="right">
        <el-form  label-width="100px" class="form">
          <el-form-item
            prop="username"
            label="用户名"
            :rules="[
              { required: true, message: '请输入用户名', trigger: 'blur' },
            ]"
          >
            <el-input></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="密码"
            :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' },
            ]"
          >
            <el-input></el-input>
          </el-form-item>
          <el-button @click="handleLogin">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/service/userApi.js'
export default {
  methods: {
    handleLogin() {
      const params = {
        username: 'reeyou',
        password: 246
      }
      login(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss'
</style>