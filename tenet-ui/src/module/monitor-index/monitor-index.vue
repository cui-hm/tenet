<template>
  <div>
    <div class='container'>
      <span
        v-for='monitorId in monitorIdList'
        :key='monitorId'
        @click='jumpTo(monitorId)'
        class='link'
        >页面{{ monitorId }}</span
      >
      <span class='link' @click='jumpToNew()'>+新增页面</span>
    </div>
  </div>
</template>

<script>
import { getAllMonitorId } from '@/service/monitor/monitor'
import { mapActions } from 'vuex'
import router from '@/router'
export default {
  name: 'dashboard-home',
  data() {
    return {
      monitorIdList: []
    }
  },
  methods: {
    jumpTo(monitorId) {
        router.push({ name: '页面编辑', params: { monitorId } })
    },

    //mapActions 是將vuex中的方法映射到 methods中 直接儅methods用
    ...mapActions('monitor', {
      //jumpToNew是起別名的意思
      //是調用monitorService方法 新建一個頁面
      jumpToNew: 'jumpToNewMonitor'
    })
  },
  created() {
    getAllMonitorId().then(monitorIdList => {
      this.monitorIdList = monitorIdList
    })
  }
}
</script>

<style scoped>
.container {
  padding: 8px;
}
.link {
  cursor: pointer;
  color: #1b65b9;
  border: #0c2d4e 1px solid;
  display: inline-block;
  border-radius: 2px;
  padding: 4px;
  margin-right: 4px;
  margin-bottom: 4px;
}
</style>