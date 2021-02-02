import monitorBaseService from '@/service/monitor.base.js'

//插入一個頁面
export function insertWithData(data) {
  return monitorBaseService.post('monitor/insertWithData', data)
}

//获取所有页面的id
export function getAllMonitorId() {
    return monitorBaseService.get('monitor/getAllMonitorId')
}
