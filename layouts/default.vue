<template>
  <el-container class='main-container'>
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>
<script>
import myHeader from '../components/public/header/index'
export default {
  components: {
    myHeader
  }
}
</script>
<style lang='css'>
  .main-container {
    /* width: 1200px; */
    /* margin: 0 auto; */
  }
</style>
