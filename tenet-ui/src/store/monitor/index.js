import * as monitorService from '@/service/monitor/monitor'
import { getPresetMonitor } from '@/store/monitor/preset-monitor'
import router from '@/router'
import { errorMessage } from '@/util/message'
import * as TYPES from '@/store/monitor/monitor-types'

function state() {
  return {
    tool: {
      backgroudTool:false,
      backgroudColor:false,
      componentLibrary:false
    },
    background:'backgroundColor:#143555'
  }
}
const mutations = {
  [TYPES.SET_TOOL]:function ( state ,ToolSwitchValue ) {
    for(let item in state.tool){
      if (item == ToolSwitchValue){
        state.tool[item] = !state.tool[item]
      }else{
        state.tool[item] = false
      }
    }
  },
  [TYPES.SET_BACKGROUND]:function(state ,background){
    state.background = background
    console.log(state.background)

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
  },
}

const getters = {
  getTool:state =>state.tool,
  getBackground:state => state.background
}



const namespaced = true

export default {
  mutations,
  getters,
  state,
  actions,
  namespaced
}