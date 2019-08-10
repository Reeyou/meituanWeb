<template>
  <div class='search-container'>
    <section class="logo">
      <a href="//sz.meituan.com">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
      </a>
    </section>
    <section class='input-container'>
      <div class='input-control'>
        <input class='search-input' type="text">
        <button class='search-btn'>
          <i class='el-icon-search'></i>
        </button>
      </div>
      <div class="more" v-if='false'>
        <ul>
          <li>深圳欢乐谷</li>
          <li>深圳欢乐谷</li>
          <li>深圳欢乐谷</li>
          <li>深圳欢乐谷</li>
          <li>深圳欢乐谷</li>
        </ul>
      </div>
      <div class="hot" v-if='false'>
        <dl>
          <dt>热门搜索</dt>
          <dd>深圳欢乐谷</dd>
          <dd>东部华侨城</dd>
          <dd>深圳野生动物园</dd>
          <dd>世界之窗</dd>
        </dl>
      </div>
      <div class='suggest'>
        <ul>
          <li>深圳欢乐谷</li>
          <li>东部华侨城</li>
          <li>深圳野生动物园</li>
          <li>世界之窗</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onFocus: false
    }
  },

}
</script>
<style lang="scss">
  @import './search.scss'
</style>