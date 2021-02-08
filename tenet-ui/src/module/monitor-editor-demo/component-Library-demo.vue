<!--
  组件库
  -->
<template>
  <div class="componentLibrary" >
    <div class="title">
      <span class="titleName"> 组 件 库 </span>
      <div class="type">
        <span>组件类型: </span>
        <el-select v-model="value" placeholder="请选择" size="mini">
          <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  >
          </el-option>
        </el-select>
      </div>
      <div class="type">
        <span>组件查询:</span>
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
         </div>
    </div>
    <div class="componentMain">
      <div class="componentBox" v-for="(item,index) in test" :key="index">
        <component
          :is="item">
        </component>
      </div>
    </div>
    <div></div>
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
  span{
    margin: 0px 8px;
  }
  .componentLibrary{
    width: 100%;
    height: 100%;
    background: white;
    box-shadow:0px 0px 5px 1px #b5b5b5;
    .title{
      display: flex;
      border-bottom: 1px #b5b5b5 solid;
      height: 40px;
      align-items: center;
      .titleName{
        font-weight: 700;
        width: 100px;
        border-right:1px #b5b5b5 solid;
      }
      .type{
        margin:0px 10px;
        display: flex;
        align-items: center;
        ::v-deep .el-input{
          width: 160px;
        }
        ::v-deep .el-input__inner{
          width: 160px;
        }
      }



    }
    .componentMain{
      display: flex;
      /*flex-flow:column wrap;*/
      .componentBox{
        width: calc(100%/3 - 5px);
      }
    }
  }


</style>