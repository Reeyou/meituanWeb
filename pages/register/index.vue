<template>
  <div class='user-container'>
    <div class="register-header">
      <!-- <div class="to-register">
        <span>已有美团账号</span>
        <a href="">登录</a>
      </div> -->
    </div>
    <div class="register-container">
      <el-form :model='registerData' ref="registerData" label-width="100px" class="form">
        <el-form-item
          prop="username"
          label="用户名"
          :rules="{
            required: true, message: '用户名不能为空', trigger: 'blur'
          }"
        >
          <el-input v-model="registerData.username"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          ]"
        >
          <el-input v-model="registerData.email"></el-input>
        </el-form-item>
        <el-form-item
          prop="code"
          label="验证码"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          ]"
        >
          <el-input class='codeInput' v-model="registerData.code"></el-input>
          <el-button v-if='sendStatus' @click='sendCode' :disabled=sendDisabled class='btn'>发送验证码</el-button>
          <span v-else class='count'>倒计时 {{sendCount}} 秒</span>
        </el-form-item>
        <el-form-item
          prop="password"
          label="密码"
          :rules="{
            required: true, message: '密码不能为空', trigger: 'blur'
          }"
        >
          <el-input v-model="registerData.pwd"></el-input>
        </el-form-item>
        <el-form-item
          prop="checkpwd"
          label="确认密码"
          :rules="[
            { required: true, message: '密码不能为空', trigger: 'blur'},
            {validator: validatePwd, trigger: 'blur'}
          ]"
        >
          <el-input v-model="registerData.checkpwd"></el-input>
        </el-form-item>
        <el-form-item>
          <span class='btn' @click="handleRegister">同意以下协议并注册</span>
          <div>
            <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { register, sendCode } from '@/service/userApi.js'
export default {
  data() {
    return {
      registerData: {
        email: '',
        username: '',
        pwd: '',
        checkpwd: '',
        code: ''
      },
      sendDisabled: false,
      sendStatus: true,
      sendCount: 2
    }
  },
  complete: {
    
  },
  methods: {
    validatePwd(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerData.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    sendCode() {
      const self = this
      this.sendStatus = false
      let timer = setInterval(function() {
        self.sendCount --
        if(self.sendCount == 0) {
          clearInterval(timer)
          self.sendStatus = true
        }
      },1000)
      this.$refs['registerData'].validate(valid => { 
        const data = this.registerData
        const params = {
          username: data.username,
          email: data.email
        }
        sendCode(params).then(res => {
        // if(res)
      })
      })
    },
    handleRegister() {
      this.$refs['registerData'].validate(valid => {
        const data = this.registerData 
        const params = {
          username: data.username,
          password: data.password,
          email: data.email,
          code: data.code
        }
        clearInterval(this.timer)
        register(params).then(res => {

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