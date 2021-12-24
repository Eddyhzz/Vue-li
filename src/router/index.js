import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originPush.call(this,location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Home2',
        component:() => import('@/views/Home/Home2')
      },
      {
        path: '/mail',
        name: 'mail',
        component:() => import('@/views/Mail/Mail')
      },
      {
        path: '/user',
        name: 'user',
        component:() => import('@/views/User/User')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
