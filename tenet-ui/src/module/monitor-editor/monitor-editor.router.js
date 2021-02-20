export default {
  path: '/monitor-editor/:monitorId',
  jumpToPath: '/monitor-editor/1',
  component: () => import('@/module/monitor-editor/monitor-editor.vue'),
  name: '页面编辑'
}