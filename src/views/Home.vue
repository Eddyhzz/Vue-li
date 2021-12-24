<template>
  <el-container style="height: 100vh">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-tag></common-tag>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
import CommonTag from "../components/CommonTag";
export default {
  name: 'Home',
  components: {
    HelloWorld,
    CommonAside,
    CommonHeader,
    CommonTag,
  }
}
</script>
<style lang="scss" scoped>
    .el-header{
      width: auto;
      background: #333;
    }
    .el-main{
      padding-top: 0;
    }
</style>
