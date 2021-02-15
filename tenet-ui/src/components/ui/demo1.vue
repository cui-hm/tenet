<template>
  <div>
    {{data}}
  </div>
</template>

<script>
  export default {
    props:{
      data:{
        type:String,
        default:'asdasd'
      }
    }
  }
</script>

<style scoped>
  div{
    width: 100%;
    height: 100%;
    background: #3c75e4;
    color: white;
  }
</style>