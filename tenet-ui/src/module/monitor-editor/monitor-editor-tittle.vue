<template>
  <div class="monitor-editor-tittle">
    <div class="arrowRight"> <i class="el-icon-arrow-left"></i> </div>
    <div class="menuNameBox">
      <span class="menuName"> 页面名称: </span>
      <span class="menuNameInput"> {{getMonitorTittle}} </span>
    </div>
    <div class="btn_list">
      <el-button type="success" size="mini" icon="el-icon-view">预 览</el-button>
      <el-button type="primary" size="mini" icon="el-icon-s-order" @click="save()">保 存</el-button>
      <el-button type="warning" size="mini" icon="el-icon-position">发 布</el-button>
    </div>
  </div>
</template>

<script>
  import { mapGetters,mapMutations,mapActions } from 'vuex'
  import * as TYPES from '@/store/monitor/monitor-types'
  //import { saveMonitor} from '@/service/monitor/monitor'
  export default {
    name: 'monitor-editor-tittle',
    data(){
      return{
        dialogShow:false,
        monitorNameAndTittle:{
          name:'',
          tittle:''
        }
      }
    },
    computed:{
      ...mapGetters(('monitor'),{
        getMonitorName:'getMonitorName',
        getMonitorTittle:'getMonitorTittle'
      }),
    },
    methods:{
      ...mapMutations(('monitor'),{
        SET_MONITORNAME : TYPES.SET_MONITORNAME,
        SET_MONITORTITTLE : TYPES.SET_MONITORTITTLE
      }),
      ...mapActions('monitor', {
        saveMonitor: 'saveMonitor'
      }),
      save(){
        this.saveMonitor()
      },
      //传组件名及组件说明
      setMonitoeName(){
        this.SET_MONITORNAME(this.monitorNameAndTittle.name)
        this.SET_MONITORTITTLE(this.monitorNameAndTittle.tittle)
        this.dialogShow = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .monitor-editor-tittle{
    height: 45px;
    background-image: linear-gradient(180deg,#004574,#002140);
    border-bottom: 1px solid #295278;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0;
    justify-content: center;
    position: relative;
    display: flex;
    align-items: center;
    .arrowRight{
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%) scaleY(2);
      cursor: pointer;
      padding: 0 30px;
      color: #61a7e9;
    }
    .menuNameBox{
      position: absolute;
      top: 25%;
      left: 87px;
      height: 100%;
      .menuName{
        margin-right: 8px;
        font-size: 12px;
        color: #61a7e9;
      }
      .menuNameInput{
        width: 132px;
        background: none;
        border: none;
        color: #fff;
        font-size: 12px;
      }
    }
    .btn_list{
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      .btnItem{
        min-width: 68px;
        padding: 5px 10px;
        margin-left: 10px;
        cursor: pointer;
        align-items: center;
        border-radius: 2px;
        font-size: 12px;
        color: #fff;
      }
    }
  }

</style>