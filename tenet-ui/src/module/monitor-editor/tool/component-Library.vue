<!--
  组件库
  -->
<template>
  <div class="componentLibrary">
    <div class="tittle">
      <div class="classifyContent">
        <span class="classifyDes">组件类型</span>
        <el-select size="mini" class="classifySelectContent"> </el-select>
      </div>
      <div class="classifyContent">
        <span class="classifyDes">业务主题</span>
        <el-select size="mini" class="classifySelectContent"> </el-select>
      </div>
      <div class="classifyContent">
        <span class="classifyDes">查询</span>
        <el-select size="mini" class="classifySelectContent"> </el-select>
      </div>
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
  import { getAllComponentName } from '@/service/component/component'
  import { chartComponentLoader } from '@/util/component-loader'
  export default {
    name: 'componentLibrary',
    components: {
      ...chartComponentLoader.getComponentMap()
    },
    created(){
      getAllComponentName().then(
          item =>{ this.test = item}
          )
    },
    data(){
      return{
        input:'',
        value:'',
        options:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }],
        test:[]
      }
    }
  }
</script>

<style scoped lang="scss">
.componentLibrary{
  margin-left: 12px;
  background: #031b32;
  border: 1px solid #295278;
  box-shadow: 0 2px 6px 0 rgb(6 7 23 / 70%);
  border-radius: 2px;
  padding: 20px 10px;
  font-size: 12px;
  color: #cde6ff;
  letter-spacing: 0;
  max-height: 60vh;
  min-height: 30vh;
  overflow: auto;
  width: 570px;
  display: flex;
  flex-direction: column;
  .tittle{
    width: 100%;
    height: 62px;
    margin: 10px auto;
    padding-bottom: 10px;
    border-bottom: 1px solid #3c6185;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
    .classifyContent{

      .classifyDes{
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
      }
      .classifySelectContent{
     }
    }
  }
  ::v-deep .el-input__inner{
    width: 120px;
    height: 28px;
    line-height: 28px;
    background: none;
    border: 1px solid #5082b2;
    font-size: 12px;
    color: #cde6ff;
    border-radius: 2px;
    padding: 0 18px 0 5px;
  }
}
</style>