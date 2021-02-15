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
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    background: #e49e77;
    color: white;
  }
</style>