import * as monitorService from '@/service/monitor/monitor'
import * as monitorComponentService from '@/service/monitor/monitorComponent'
import { getPresetMonitor } from '@/store/monitor/preset-monitor'
import router from '@/router'
import { errorMessage } from '@/util/message'
import * as TYPES from '@/store/monitor/monitor-types'
import componentTemplate from '@/store/monitor/component-Template'
import { Message } from 'element-ui'
function state() {
  return {
    //配置栏的开关
    tool: {
      backgroudTool:false,
      backgroudColor:false,
      componentLibrary:false
    },
    //页面id
    monitorId:0,
    //页面名及标题
    name:'',
    //页面说明
    tittle:'',
    //配置界面 主页面的背景色
    background:'backgroundColor:#143555',

    //组件列表
    monitorComponentList:[]

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

  [TYPES.SET_MONITOR]:function( state , monitorData){
    //用于对象的合并
    // eslint-disable-next-line no-debugger
    monitorData.monitorComponentList.forEach(item=>{
      item.data=JSON.parse(item.data)
    })
    Object.assign(state, monitorData)
    state.background = JSON.parse(monitorData.data).background
    console.log(state)
  },

  //修改背景色
  [TYPES.SET_BACKGROUND]:function(state ,background){
    state.background = background
  },

  //修改组件名
  [TYPES.SET_MONITORNAME]:function(state ,name){
  state.name = name
  },

  [TYPES.SET_MONITORTITTLE]:function(state ,tittle){
    state.tittle = tittle
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
  selectAndAddComponent(rootState,componen){
    monitorComponentService.insertMonitorComponent(rootState.state.monitorId).then(
        (item)=>{
          let monitorComponent={
            monitorComponentId:item,
            data:JSON.parse(JSON.stringify(componentTemplate))
          }
          monitorComponent.data.i = item
          monitorComponent.data.componentName =componen.componentName
          rootState.state.monitorComponentList.push(monitorComponent)
        }
    )
    //进行深度克隆 避免指向相同地址
    //let AcomponentTemplate = JSON.parse(JSON.stringify(componentTemplate))
    //AcomponentTemplate.componentName = componentName
    //AcomponentTemplate.i = rootState.state.monitorComponentList.length

  },

  //获取大屏配置数据
  getMonitorData({ commit },monitorId){
    monitorService.getMonitorData(monitorId).then((monitorData)=>{
        commit(TYPES.SET_MONITOR,monitorData)})
  },

  //保存到数据库
  saveMonitor(state){
    monitorService.saveMonitor(state).then(
        (item)=>{
          Message({
            message:item,
            type:'success'
          },true)
        })}
}

const getters = {
  getTool:state =>state.tool,
  getBackground:state => state.background,
  getmonitorComponentList: state => state.monitorComponentList,
  getMonitorName: state => state.name,
  getMonitorTittle: state => state.tittle
}



const namespaced = true

export default {
  mutations,
  getters,
  state,
  actions,
  namespaced
}