import * as monitorService from '@/service/monitor/monitor'
import { getPresetMonitor } from '@/store/monitor/preset-monitor'
import router from '@/router'
import { errorMessage } from '@/util/message'
import * as TYPES from '@/store/monitor/monitor-types'
import componentTemplate from '@/store/monitor/component-Template'

function state() {
  return {
    //配置栏的开关
    tool: {
      backgroudTool:false,
      backgroudColor:false,
      componentLibrary:false
    },
    //配置界面 主页面的背景色
    background:'backgroundColor:#143555',

    //组件列表
    compinentsList:[
    ]
  }
}

const mutations = {
  //修改配置栏开关状态
  [TYPES.SET_TOOL]:function ( state ,ToolSwitchValue ) {
    for(let item in state.tool){
      if (item == ToolSwitchValue){
        state.tool[item] = !state.tool[item]
      }else{
        state.tool[item] = false
      }
    }
  },

  //修改背景色
  [TYPES.SET_BACKGROUND]:function(state ,background){
    state.background = background
    console.log(state.background)

  }
}

const actions = {
  //跳转路由并新增个页面
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
  selectAndAddComponent(rootState,componentName){
    //进行深度克隆 避免指向相同地址
    let AcomponentTemplate = JSON.parse(JSON.stringify(componentTemplate))
    AcomponentTemplate.componentName = componentName
    AcomponentTemplate.i = rootState.state.compinentsList.length
    rootState.state.compinentsList.push(AcomponentTemplate)
  }
}

const getters = {
  getTool:state =>state.tool,
  getBackground:state => state.background,
  getCompinentsList: state => state.compinentsList
}



const namespaced = true

export default {
  mutations,
  getters,
  state,
  actions,
  namespaced
}