<template>
    <header>
      <div class="l-content">
        <el-button
            plain icon="el-icon-menu"
            size="mini"
            @click="handleMenu"
        ></el-button>
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click" size="mini">
          <span class="el-dropdown-link">
            <img :src="userImg" alt="" class="user">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
</template>

<script>
import {mapState} from 'vuex'
  export default {
  name: "CommonHeader",
    data(){
    return{
      userImg: require("../assets/images/User.jpg")
    }
    },
    methods: {
      handleMenu(){
      this.$store.commit('collapseMenu')
    }
    },
    computed: {
      ...mapState(({
        current: (state) => state.tab.currentMenu
      }))
    }
  }
</script>

<style scoped>
header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.l-content{
  display: flex;
  align-items: center;

}
.l-content el-button {
  margin-right: 20px;
}

.r-content .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;

}
</style>


<style lang="scss">
.el-breadcrumb__item:first-child{
  margin-left: 50px;
}
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: white;
    }
  }
}

.el-breadcrumb__item:first-child .el-breadcrumb__inner {
  color:white;
}
</style>
