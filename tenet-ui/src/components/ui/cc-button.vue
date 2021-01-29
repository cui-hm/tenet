<template>
  <div>
    <el-row>
      <el-button :type='size'  :size='type' >确 认</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    props:{
      size:{
        type:String,
        default:'small'
      },
      type:{
        type :String,
        default: 'primary'
      }
    },
    data(){
      return{
        test1:this.size,
        test2:this.type
      }
    }
    

  }
</script>

<style scoped>

</style>