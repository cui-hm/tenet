import monitorBaseService from '@/service/monitor.base.js'
//插入一个组件
export function insertComponent(data) {
  return monitorBaseService.post('component/insertComponent', data)
}

//获取全部组件
export function getAllComponentName() {
  return monitorBaseService.get('component/getAllComponentName')
}

