//vuex 的入口文件
import Vuex from 'vuex'
import Vue from 'vue'
import monitor from '@/store/monitor/index'

Vue.use(Vuex)

//将monitor 放在vuex中
export default new Vuex.Store({
  modules: {
    monitor
  }
})
