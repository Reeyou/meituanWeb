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
        <el-form :model='loginData' ref="loginData"  label-width="100px" class="form">
          <el-form-item
            prop="username"
            label="用户名"
            :rules="[
              { required: true, message: '请输入用户名', trigger: 'blur' },
            ]"
          >
            <el-input v-model="loginData.username"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="密码"
            :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' },
            ]"
          >
            <el-input v-model="loginData.password"></el-input>
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
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs['loginData'].validate(valid => {
        const data = this.loginData 
        const params = {
          username: data.username,
          password: data.password,
        }
        login(params).then(res => {
          console.log(res)
        })
      })
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss'
</style>