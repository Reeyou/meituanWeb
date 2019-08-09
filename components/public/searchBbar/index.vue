<template>
  <div class="search-con">
    <div class="logo">
      <img src="@/assets/image/logo.png" alt="">
    </div>
    <div class="search">
      <Search />
    </div>
    <div class="tip">
      <ul>
        <li>随心购</li>
        <li>放心买</li>
        <li>送货快</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from './search'
export default {
  components: {
    Search
  }
}
</script>

<style>

</style>
