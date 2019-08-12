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
    <div
      class="item-container"
      v-if='kind'
      @mouseenter="itemEnter"
      @mouseleave="itemLeave"
    >
      <div
        v-for='(item, index) in currentItem.child'
        :key='index'
      >
      <dl>
        <dt>{{item.title}}</dt>
        <dd v-for='(name, index) in item.list' :key='index'>{{name}}</dd>
      </dl>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: '',
      menuList: [
        {
          icon: 'el-icon-fork-spoon',
          name: "美食",
          child: [
            {
              title: '美食',
              list: ['代金卷','代金卷','代金卷','代金卷','代金卷','代金卷','代金卷',]
            },
            {
              title: '美食',
              list: ['代金卷','代金卷','代金卷','代金卷','代金卷','代金卷','代金卷',]
            }
          ]
        },
        {
          icon: 'el-icon-question',
          name: "恋爱",
          child: [
            {
              title: '恋爱',
              list: ['恋爱','恋爱','代金卷','代金卷','代金卷','代金卷','代金卷',]
            },
            {
              title: '恋爱',
              list: ['恋爱','恋爱','代金卷','代金卷','代金卷','代金卷','代金卷',]
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentItem: function() {
      return this.menuList.filter(item => item.icon == this.kind)[0]
    }
  },
  methods: {
    mouseEnter(e) {
      this.kind = e.target.querySelector('i').className
    },
    mouseLeave() {
      const self = this
      this.timer = setTimeout(function() {
        self.kind = ''
      },150)
    },
    itemEnter() {
      clearTimeout(this.timer)
    },
    itemLeave() {
      this.kind = ''
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss'
</style>