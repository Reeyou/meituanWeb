<template>
  <div class='nav'>
    <ul class='container'>
      <li class="list">
        <nuxt-link class='item' to="">我的美团</nuxt-link>
        <ul>
          <li><a rel="nofollow" href="https://www.meituan.com/orders/" target="_blank">我的订单</a></li>
          <li><a rel="nofollow" href="https://www.meituan.com/collections/" target="_blank">我的收藏</a></li>
          <li><a rel="nofollow" href="https://www.meituan.com/vouchers/" target="_blank">抵用券</a></li>
          <li><a rel="nofollow" href="https://www.meituan.com/account/settings" target="_blank">账户设置</a></li>
        </ul>
      </li>
      <li class="list has-noChild">
        <nuxt-link class='item' to="https://i.meituan.com/mobile/down/meituan">手机APP</nuxt-link>
      </li>
      <li class="list">
        <nuxt-link class='item' to="">商家中心</nuxt-link>
        <ul class='nav-three'>
          <li><a rel="nofollow" href="https://e.meituan.com/" target="_blank">登录商家中心</a></li>
          <li><a rel="nofollow" href="https://shouyin.meituan.com?utm_source=inner&amp;utm_medium=mtpcsjzx">美团智能收银</a></li>
          <li><a rel="nofollow" href="https://e.meituan.com/mobile/" target="_blank">手机免费开店</a></li>
          <li><a rel="nofollow" href="https://daili.meituan.com/?comeFrom=mtwebMenu" target="_blank">餐饮代理商招募</a></li>
          <li><a href="https://pc.meituan.com?activity_code=mtpcdh" target="_blank">商家申请开票</a></li>
        </ul>
      </li>
      <li class="list">
        <nuxt-link class='item' to="">美团规则</nuxt-link>
        <ul>
          <li><a rel="nofollow" href="https://rules-center.meituan.com/" target="_blank">规则中心</a></li>
          <li><a rel="nofollow" href="https://rules-center.meituan.com/rules" target="_blank">规则目录</a></li>
          <li><a rel="nofollow" href="https://rules-center.meituan.com/advices" target="_blank">规则评议院</a></li>
        </ul>
      </li>
      <li class="list">
        <nuxt-link class='item' to="">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class='hotel'>
            <dt>酒店旅游</dt>
            <dd><a href="https://www.meituan.com/iflight/" target="_blank">国际机票</a></dd>
            <dd><a href="https://www.meituan.com/train/" target="_blank">火车票</a></dd>
            <dd><a href="https://phoenix.meituan.com/" target="_blank">榛果民宿</a></dd>
            <dd><a href="https://hotel.meituan.com/shenzhen/c20036/" target="_blank">经济型酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/shenzhen/c20037/" target="_blank">主题酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/shenzhen/c20038/" target="_blank">商务酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/shenzhen/c20039/" target="_blank">公寓</a></dd>
            <dd><a href="https://hotel.meituan.com/shenzhen/c20040/" target="_blank">豪华酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/shenzhen/c20042/" target="_blank">青年旅社</a></dd>
            <dd><a href="https://hotel.meituan.com/shenzhen/c20043/" target="_blank">度假酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/shenzhen/c20044/" target="_blank">别墅</a></dd>
          </dl>
          <dl class='food'>
            <dt>美食</dt>
            <dd><a href="https://sz.meituan.com/meishi/c20004/" target="_blank">烤鱼</a></dd>
            <dd><a href="https://sz.meituan.com/meishi/c54/" target="_blank">烧烤</a></dd>
            <dd><a href="https://sz.meituan.com/meishi/c17/" target="_blank">火锅</a></dd>
            <dd><a href="https://sz.meituan.com/meishi/c36/" target="_blank">特色小吃</a></dd>
            <dd><a href="https://sz.meituan.com/meishi/c40/" target="_blank">自助餐</a></dd>
            <dd><a href="https://sz.meituan.com/meishi/c393/" target="_blank">代金券</a></dd>
          </dl>
          <dl class='movie'>
            <dt>电影</dt>
            <dd><a href="https://maoyan.com/films" target="_blank">热映电影</a></dd>
            <dd><a href="https://maoyan.com/cinemas" target="_blank">热门影院</a></dd>
            <dd><a href="https://maoyan.com/board" target="_blank">热映电影口碑榜</a></dd>
            <dd><a href="https://maoyan.com/board/6" target="_blank">最受期待电影</a></dd>
            <dd><a href="https://maoyan.com/board/1" target="_blank">国内票房榜</a></dd>
            <dd><a href="https://maoyan.com/board/2" target="_blank">北美票房榜</a></dd>
          </dl>
          <dl class='app'>
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app">
              </a>
            </dd>
            <dd>
              <a href="https://phoenix.meituan.com/app/" target="_blank">
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" title="榛果app" alt="榛果app">
              </a>
            </dd>
            <dd>
              <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app">
              </a>
            </dd>
            <dd>
              <a href="https://maoyan.com/app" target="_blank">
                <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app">
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