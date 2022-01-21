import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect:"/login"
  },
  {
    path:"/home",
    name:"Home",
    component:()=>import("../views/Home.vue")
  },
  {
    path:"/login",
    name:"Login",
    component:()=>import("../views/Login.vue")
  },
  {
    path:"/list",
    name:"List",
    component:()=>import("../views/List.vue")
  },
  {
    path:"/details",
    name:"Details",
    component:()=>import("../views/Details.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let userInfo = store.state.userInfo
  if(to.path==="/login") return next();//要去login，直接去
  //没有用户信息，并且要去其他页面，重定向到/login
  if(!Reflect.has(userInfo,"account")&&to.path!=="/login") return next("/login")
  next()
})

export default router
