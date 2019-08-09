<template>
  <div class='nav'>
    <ul class='container'>
      <li class="list">
        <nuxt-link class='item' to="">我的美团</nuxt-link>
        <dl>
          <dd><nuxt-link to="">我的订单</nuxt-link></dd>
          <dd><nuxt-link to="">我的收藏</nuxt-link></dd>
          <dd><nuxt-link to="">抵用卷</nuxt-link></dd>
          <dd><nuxt-link to="">账户设置</nuxt-link></dd>
        </dl>
      </li>
      <li class="list">
        <nuxt-link class='item' to="">手机APP</nuxt-link>
      </li>
      <li class="list">
        <nuxt-link class='item' to="">商家中心</nuxt-link>
        <dl>
          <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
          <dd><nuxt-link to="">手机免费开店</nuxt-link></dd>
          <dd><nuxt-link to="">免费合作</nuxt-link></dd>
          <dd><nuxt-link to="">商家申请开票</nuxt-link></dd>
          <dd><nuxt-link to="">美团智能收银</nuxt-link></dd>
        </dl>
      </li>
      <li class="list">
        <nuxt-link class='item' to="">美团规则</nuxt-link>
        <dl>
          <dd><nuxt-link to="">规则中心</nuxt-link></dd>
          <dd><nuxt-link to="">规则目录</nuxt-link></dd>
          <dd><nuxt-link to="">规则评议员</nuxt-link></dd>
        </dl>
      </li>
      <li class="list">
        <nuxt-link class='item' to="">网站导航</nuxt-link>
        <div class="subContainer" style='display: none'>
          <dl>
            <dt>酒店旅游</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>美食</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>电影</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: ['犯贱', '', '', '']
    }
  }
}
</script>