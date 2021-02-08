<!--背景工具栏-->
<template>
  <div class="backgroundTool">
    <div class="backgroundTittle"> 背 景 栏</div>

  </div>

</template>

<script>
  export default {
    name: 'backgroundConfig'
  }
</script>

<style scoped lang="scss">
  .backgroundTool{
    width: 100%;
    height: 100%;
    background: white;
    box-shadow:0px 0px 5px 1px #b5b5b5;
    .backgroundTittle{
      height: 40px;
      padding-left:5%;
      font-weight: 700;
      display: flex;
      align-items: center;
      border-bottom: 1px #b5b5b5 solid;
    }
  }

</style>