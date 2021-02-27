export default {
  path: '/monitor-release/:monitorId',
  jumpToPath: '/monitor-release/1',
  component: () => import('@/module/monitor-release/monitor-release.vue'),
  name: '页面预览'
}