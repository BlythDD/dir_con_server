// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import commonheader from './components/common/header'
import commonfooter from './components/common/footer'
import commonslide from './components/common/slideshow'

//css

import '@/assets/style/reset.css'
import '@/assets/style/base.css'
import '@/assets/style/common.css'


//js
//import '@/assets/plug_in/zepto/zepto.min'




Vue.config.productionTip = false;

Vue.component('header_view',commonheader);
Vue.component('footer_view',commonfooter);
Vue.component('slide_view',commonslide);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
