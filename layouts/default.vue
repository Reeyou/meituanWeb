<template>
  <div class='main-container'>
    <header style='height: auto'>
      <my-header />
    </header>
    <div>
      <nuxt />
    </div>
    <!-- <el-footer></el-footer> -->
    <footer>
      <myFooter />
    </footer>
  </div>
</template>
<script>
import myHeader from '../components/public/header'
import myFooter from '../components/public/footer'
export default {
  components: {
    myHeader,
    myFooter
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
