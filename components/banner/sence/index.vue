<template>
  <div class='sence'>
    <div class="sence-header">
      <span class="title">很优惠</span>
      <ul class="item-sence">
        <li
          v-for='(item, index) in itemList'
          :class="currentIndex == index ? 'active' : ''"
          :key='index'
          @mouseenter="mouseEnter(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="sence-container">
      <a href='' class="wrapper">
        <div class="img">
          <img :src="img" alt="">
        </div>
        <div class="info">
          <div class="name">梵净瑜伽（莲塘第一工业区</div>
          <div class="desc">[莲塘]产后体验课程</div>
          <div class="price-wrapper">
            <span class="price">￥99</span>
            <span class="old-price">门市价￥9999</span>
            <span class="sold">已售</span>
          </div>
        </div>
      </a>
      <a class="wrapper">
        <div class="img">
          <img :src="img" alt="">
        </div>
        <div class="info">
          <div class="name">梵净瑜伽（莲塘第一工业区</div>
          <div class="desc">[莲塘]产后体验课程</div>
          <div class="price-wrapper">
            <span class="price">￥99</span>
            <span class="old-price">门市价￥9999</span>
            <span class="sold">已售</span>
          </div>
        </div>
      </a>
      <div class="wrapper">
        <div class="img">
          <img :src="img" alt="">
        </div>
        <div class="info">
          <div class="name">梵净瑜伽（莲塘第一工业区</div>
          <div class="desc">[莲塘]产后体验课程</div>
          <div class="price-wrapper">
            <span class="price">￥99</span>
            <span class="old-price">门市价￥9999</span>
            <span class="sold">已售</span>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="img">
          <img :src="img" alt="">
        </div>
        <div class="info">
          <div class="name">梵净瑜伽（莲塘第一工业区</div>
          <div class="desc">[莲塘]产后体验课程</div>
          <div class="price-wrapper">
            <span class="price">￥99</span>
            <span class="old-price">门市价￥9999</span>
            <span class="sold">已售</span>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="img">
          <img :src="img" alt="">
        </div>
        <div class="info">
          <div class="name">梵净瑜伽（莲塘第一工业区</div>
          <div class="desc">[莲塘]产后体验课程</div>
          <div class="price-wrapper">
            <span class="price">￥99</span>
            <span class="old-price">门市价￥9999</span>
            <span class="sold">已售</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      img: 'https://p0.meituan.net/merchantpic/bd4adc299dfe629e67bb8bbe70007cf246692.jpg@224w_126h_1e_1c',
      itemList:['全部','美食','休闲']
    }
  },
  methods: {
    mouseEnter(index) {
      this.currentIndex = index
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss'
</style>