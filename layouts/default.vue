<template>
  <div class='main-container'>
    <header style='height: auto'>
      <my-header />
    </header>
    <div>
      <nuxt />
    </div>
    <!-- <el-footer></el-footer> -->
  </div>
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
  /* .div {
    overflow:inherit;
  } */
</style>
