import monitorBaseService from '@/service/monitor.base.js'

//插入一個頁面
export function insertWithData(data) {
  return monitorBaseService.post('monitor/insertWithData', data)
}

//获取所有页面的id
export function getAllMonitorId() {
    return monitorBaseService.get('monitor/getAllMonitorId')
}


export function saveMonitor(MonitorData) {
  // eslint-disable-next-line no-debugger
  const jsonData = JSON.parse(JSON.stringify(MonitorData.state))
  const monitorDto = {
    monitorId:jsonData.monitorId,
    data:'a',
    tittle:'b',
    name:'c',
    monitorComponentList:[
    ]
  }
  jsonData.monitorComponentList.forEach((item)=>{
    let monitorComponent = {
      monitorComponentId : item.monitorComponentId,
      data :  JSON.stringify(item.data)
    }
    monitorDto.monitorComponentList.push(monitorComponent)
  })
  return monitorBaseService.post('monitor/upMonitorData',monitorDto)
}

//获取页面信息
export function getMonitorData(monitorId) {
  return monitorBaseService.get('monitor/getMonitorData',
      {
        params: {
          monitorId
        }
      })
}
