import el from "element-ui/src/locale/lang/el";

export default {
  state:{
    isCollapse:false,
    currentMenu:null,
    tabsList:[
      {
        path: '/',
        name: 'Home2',
        label: '首页',
        icon: 'home'
      }
    ]
  },
  mutations:{
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state,val){
      // val.name === 'home' ? (state.currentMenu = null) : state.currentMenu = val

      if(val.name === 'home'){
        state.currentMenu = null
      }else{
        state.currentMenu = val
        // 新增tabsList
        let result = state.tabsList.findIndex(item => item.name == val.name)
        result === -1 ? state.tabsList.push(val) : ''
      }
    },
    closeTag(state, val){
      let result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result,1)
    }
  }
}