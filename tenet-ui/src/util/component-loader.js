//扫面组件的 工具类
function componentLoader(context) {
  const filePathList = context.keys()
  //例 filePathList 此时值是  { "0": "./cc-button", "1": "./cc-button.vue" }
  const componentMap = {}
  filePathList.forEach(filePath => {
    let componentName = /([^./]*)\.vue$/.exec(filePath)[1]
    componentMap[componentName] = () => context(filePath)
  })
  return {
    getComponentMap(){
      return componentMap
    }
  }
}



// https://webpack.js.org/api/module-methods/#requirecontext
// https://webpack.js.org/guides/dependency-management/#context-module-api
// 自动扫描组件
export const chartComponentLoader =new componentLoader(require.context('@/components/ui',true,/\.vue$/,'lazy'))