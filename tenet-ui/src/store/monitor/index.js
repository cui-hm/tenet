import * as monitorService from '@/service/monitor/monitor'
import { getPresetMonitor } from '@/store/monitor/preset-monitor'
import router from '@/router'
import { errorMessage } from '@/util/message'

function state() {
  return {
    demo: ''
  }
}


const actions = {
  jumpToNewMonitor() {
    monitorService
        //则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""
      .insertWithData(JSON.stringify(getPresetMonitor()))
      .then(monitorId => {
        router.push({ name: '页面编辑', params: { monitorId } })
      })
      .catch(e => {
        errorMessage(e)
      })
  }
}

const namespaced = true

export default {
  state,
  actions,
  namespaced
}