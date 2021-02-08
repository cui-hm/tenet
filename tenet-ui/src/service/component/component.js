import monitorBaseService from '@/service/monitor.base.js'

//插入一個頁面
export function insertComponent(data) {
  return monitorBaseService.post('component/insertComponent', data)
}

export function getAllComponentName() {
  return monitorBaseService.get('component/getAllComponentName')
}

