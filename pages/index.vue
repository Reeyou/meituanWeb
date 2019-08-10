<template>
  <div class="container">
    <div class="banner">
      <div class="menu">
        <Menu />
      </div>
      <div class="plane"></div>
      <div class="slider-top">
        <div class="slider">
          <el-carousel style='height: 240px' :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="top-pic">
          <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
        </div>
        <div class="user">
          <div class="avatar">
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
          </div>
          <div class="name">欢迎登陆</div>
          <button><a href="">登录</a></button>
          <button><a href="">注册</a></button>
        </div>
      </div>
      <div class='slider-bottom'>
        <div class="footer">
          <a href="//hotel.meituan.com" class="link" target="_blank">
            <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png">
          </a>
          <a href="/jiaoyupeixun/?utm_source=MTPCmain-4" class="link" target="_blank">
            <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg">
          </a>
        </div>
        <div class="bottom-pic">
          <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
        </div>
        <div class="qrcode">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
          <div class="app">美团APP手机版</div>
          <div class="tips">
            <span>1元起</span>
            <span>吃喝玩乐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '../components/index/menu'
export default {
  components: {
    Menu
  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
.el-carousel__container {
        height: 240px;
      }
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.container {
  width: 1200px;
  margin: 0 auto;
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
