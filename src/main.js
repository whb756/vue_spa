// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import '@/tools/rem' //設置html的font-size
import MintUI from 'mint-ui'//引入mint-ui移动端组件库
import { InfiniteScroll } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(InfiniteScroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
