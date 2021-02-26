<!--
  组件库
  -->
<template>

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

            <img :src="item.url" >

<!--          <component-->
<!--                  :is="item">-->
<!--          </component>-->
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
.body{
  /* 设置或检索对象每列的宽度 */
  column-width: 260px;
  /* 设置或检索对象的列与列之间的间隙 */
  column-gap: 15px;
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
}

  .componentBox{
    display: inline-block;
    /* box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4); */

    /* 避免在元素内部断行并产生新列 */
    -webkit-column-break-inside: avoid;

    border-radius: 8px;
  }
  img{
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    border-radius: 8px;

  }

</style>