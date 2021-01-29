<template>
  <div>
    <el-tag>{{value1}}</el-tag>
    <el-tag type="success">{{value2}}</el-tag>
    <el-tag type="info">{{value3}}</el-tag>
    <el-tag type="warning">{{value4}}</el-tag>
    <el-tag type="danger">{{value5}}</el-tag>
  </div>
</template>

<script>
  export default {
    props:{
      value1:{
        type:String,
        default:'测试一'
      },
      value2:{
        type:String,
        default:'测试二'
      },
      value3:{
        type:String,
        default:'测试三'
      },value4:{
        type:String,
        default:'测试四'
      },value5:{
        type:String,
        default:'测试五'
      }
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped>

</style>