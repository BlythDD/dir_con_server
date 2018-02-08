import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld1 from '@/components/HelloWorld'
import login from '@/components/user_login'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    //hello world;
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld1
    },
    //login
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
