import monitorBaseService from '@/service/monitor.base.js'
//根据页面插入组件

export function insertMonitorComponent(monitorId) {
  return monitorBaseService.post('MonitorComponent/insertMonitorComponent', monitorId)
}
