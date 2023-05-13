import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局css
import '@//assets/index.css'
// 导入icon
import '@//assets/icon/iconfont.css'
// 导入elementui
// import '@/elementui/index.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
