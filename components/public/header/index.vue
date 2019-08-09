<template>
  <div class='h-wrapper'>
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
  </div>
</template>
<script>
import Geo from './geo/geo'
import User from './user/user'
import Nav from './nav/nav'
export default {
  components: {
    Geo,
    User,
    Nav
  }
}
</script>
<style lang="scss">
  @import './nav/nav.scss';
  @import './user/user.scss';
  @import './geo/geo.scss';

  .h-wrapper {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f8f8f8;
    font-size: 12px;
  }
  .h-container {
    width: 1200px;
    margin: 0 auto;
  }
</style>