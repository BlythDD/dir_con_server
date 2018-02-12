import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  //helloWorld
import reg from '@/components/user_reg'
import login from '@/components/user_login'       // login
import home from '@/components/home'              //home

//img
import logo from '@/assets/images/site_base/logo.png'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    //hello world;
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //reg
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    //login
    {
      path: '/login',
      name: 'login',
      component: login
    },
    //home
    {
      path: '/home',
      name: '首页',
      component: home
    }
  ]
})
