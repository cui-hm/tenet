<!--
  组件库
  -->
<template>
  <div class="componentLibrary">
<!--    <div class="tittle">-->
<!--      <div class="classifyContent">-->
<!--        <span class="classifyDes">组件类型</span>-->
<!--        <el-select size="mini" class="classifySelectContent"> </el-select>-->
<!--      </div>-->
<!--      <div class="classifyContent">-->
<!--        <span class="classifyDes">业务主题</span>-->
<!--        <el-select size="mini" class="classifySelectContent"> </el-select>-->
<!--      </div>-->
<!--      <div class="classifyContent">-->
<!--        <span class="classifyDes">查询</span>-->
<!--        <el-select size="mini" class="classifySelectContent"> </el-select>-->
<!--      </div>-->
<!--    </div>-->
    <div class="body">
        <div class="componentBox" v-for="(item,index) in AllComponentNameList" :key="index" @click="selectAndAddComponent(item)">
          <div class="img">
            <img :src="item.url" >
          </div>
<!--          <component-->
<!--                  :is="item">-->
<!--          </component>-->
        </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { getAllComponentData } from '@/service/component/component'
  import { chartComponentLoader } from '@/util/component-loader'
  export default {
    name: 'componentLibrary',
    components: {
      ...chartComponentLoader.getComponentMap()
    },
    created(){
      getAllComponentData().then(
          item =>{ this.AllComponentNameList = item})
    },
    data(){
      return{
        AllComponentNameList:[]
      }
    },
    methods:{
      ...mapActions('monitor', ['selectAndAddComponent'])
    }
  }
</script>

<style scoped lang="scss">
.componentLibrary{
  text-align: left;
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
  /*overflow: auto;*/
  width: 570px;
  margin-left: -13px;
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
  .body{
    display: flex;
    flex-direction: row;
    column-count: 3;
    column-width:calc(100%/3 - 5px);
    .componentBox{
      margin: 5px;
      border: 1px red solid;
      width: calc(100%/3 - 5px);
      opacity: 0.8;
      .img{
        width: 100%;
        img{
          width: 100%;
        }
      }
      &:hover{
        opacity: 1;
        cursor: pointer;
        border: 1px greenyellow solid;
      }
    }
  }
}
</style>