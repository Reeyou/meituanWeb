<template>
  <div class='menu-container'>
    <div class="list">
      <div class="title">
        全部分类
      </div>
      <ul>
        <li
          v-for='(item, index) in menuList'
          :key='index'
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
        >
          <i :class='item.icon'></i>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="item-container" v-if='flag'>
      <dl v-for='(item, index) in currentItem.child' :key='index'>
        <dt>{{currentItem.title}}</dt>
        <dd v-for='(item, index) in item' :key='index'>{{item}}</dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: '',
      flag: false,
      menuList: [
        {
          icon: 'el-icon-fork-spoon',
          name: "美食",
          child: [
            {
              title: '美食',
              list: ['代金卷','代金卷','代金卷','代金卷','代金卷','代金卷','代金卷',]
            }
          ]
        },
        {
          icon: 'el-icon-fork-spon',
          name: "美食",
          child: [
            {
              title: '美食',
              list: ['代金卷','代金卷','代金卷','代金卷','代金卷','代金卷','代金卷',]
            }
          ]
        }
      ]
    }
  },
  computed: {
   
    currentItem: function() {
      return this.menuList.filter(item => item.icon == this.type)[0]
    }
  },
  methods: {
    mouseEnter(e) {
      console.log(this.menuList.filter(item => item.icon == this.type)),
      this.type = e.target.querySelector('i').className
      this.flag = true

      const self = this
      // self.timer = setInterval(function() {
      //   self.type = ''
      // },200)
    },
    mouseLeave() {
      this.flag = false
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss'
</style>