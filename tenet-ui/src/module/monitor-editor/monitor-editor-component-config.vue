<template>
  <div class="monitor-editor-component-config">
    <div class="changeEdit">
      <div class="changeItem active">
        组件配置
      </div>
      <div class="changeItem">
        高级设置
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'monitor-editor--component-config'
  }
</script>

<style scoped lang="scss">
  .monitor-editor-component-config{
    width: 248px;
    flex: 1 0 auto;
    height: 100%;
    overflow: hidden;
    background: #002140;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #295278;
    max-height: calc(100vh - 43px);
    overflow: auto;
    .changeEdit{
      display: -ms-flexbox;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #295278;
      padding: 10px 0;
      flex: 0 1 auto;
      .changeItem{
        border-right: 1px solid #133759;
        flex: 1;
        font-size: 12px;
        color: #306b94;
        text-align: center;
        cursor: pointer;
      }
      .active{
        font-size: 14px;
        font-weight: 900;
        color: #4eb3f9;
      }
    }
  }

</style>