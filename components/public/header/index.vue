<template>
  <div class='main-container'>
    <section class='h-wrapper'>
      <div class="h-container">
        <el-row :gutter='0'>
          <el-col :span="5" class="grid-content bg-purple">
            <Geo />
          </el-col>
          <el-col :span="5" class="grid-content bg-purple">
            <User />
          </el-col>
          <el-col :span="14" class="grid-content bg-purple">
            <Nav />
          </el-col>
        </el-row>
      </div>
    </section>
    <section class='search-bar'>
      <Search />
    </section>
  </div>
</template>
<script>
import Geo from './geo/geo'
import User from './user/user'
import Nav from './nav/nav'
import Search from './search/search'
export default {
  components: {
    Geo,
    User,
    Nav,
    Search
  }
}
</script>
<style lang="scss">
  @import './nav/nav.scss';
  @import './user/user.scss';
  @import './geo/geo.scss';

  .main-container {
    background: #f8f8f8;
  }
  .h-wrapper {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
  }
  .h-container {
    width: 1200px;
    margin: 0 auto;
  }
  .search-bar {
    background: #fff;
    padding-bottom: 40px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.1);
  }
</style>