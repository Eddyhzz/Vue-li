<template>
  <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height: 100%"
  >

    <h3 v-show="!isCollapse">通用后台管理系统</h3>
    <h3 v-show="isCollapse">后台</h3>
    <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.index"
        @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
            :index="subItem.path"
            v-for="(subItem,subIndex) in item.children"
            :key="subIndex"
            @click="clickMenu(item)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{subItem.label}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
    name: "CommonAside",
    data() {
      return {
        menu: [
          {
            path: '/',
            name: 'Home2',
            label: '首页',
            icon: 's-home',
            url: 'Home/Home'
          },
          {
            path: '/mail',
            name: 'mail',
            label: '商品管理',
            icon: 'video-play',
            url: 'MallManage/MallManage'
          },
          {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
            url: 'UserManage/UserManage'
          },
          {
            label: '其他',
            icon :'location',
            children: [
              {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
                url: 'Other/PageOne'
              },
              {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
                url: 'Other/PageTwo'
              }
            ]
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item) {
        this.$router.push({name: item.name});
        this.$store.commit("selectMenu",item);
      }
    },
      computed:{
        noChildren() {
          return this.menu.filter((item) => !item.children)
        },
        hasChildren() {
          return this.menu.filter((item) => item.children)
        },
        isCollapse(){
          return this.$store.state.tab.isCollapse;
        }
      }
  }
</script>

<style scoped>
h3{
  text-align: center;
  color: #fff;
  line-height: 60px;
}
/*.el-menu-vertical-demo {*/
/*  height: 800px;*/
/*}*/

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>