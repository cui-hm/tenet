import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router.js'
import VueParticles from 'vue-particles'
Vue.config.productionTip = false
import store from '@/store/index'

import 'element-ui/lib/theme-chalk/index.css'

//更改element-ui 符合国家局要求颜色的全局变量  20200831 崔洪铭
import './style/element-variables.scss'

Vue.use(VueParticles)

Vue.use(ElementUI)

new Vue({
  //将router提供给router选项，可以把router的实例注入到所有的子组件内，子组件可以通过this.$router获取router实例
  router,
  //将store提供给store选项，可以把store的实例注入到所有的子组件内，子组件可以通过this.$store获取store实例
  store,
  render: h => h(App)
}).$mount('#app')
