<template>
  <div class="main-left">
    <div class="SelectRatio">
      <div class="item" @click.stop="setTool('backgroudTool')">
        <img src="../../assets/charts-img/monitor-size.png" tabindex="1">
       <div class="text" >
          页面尺寸
          <!--页面尺寸-->
        </div>
      </div>
    </div>
    <div class="SelectRatio" >
      <div class="item" @click.stop="setTool('backgroudColor')">
       <img src="../../assets/charts-img/monitor-background.png" tabindex="2">
        <div class="text">
          选择背景
        </div>
      </div>
    </div>
    <div class="SelectRatio">
      <div class="item" @click.stop="setTool('componentLibrary')">
        <img src="../../assets/charts-img/monitor-components.png" tabindex="3">
        <div class="text">
          组件库
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations,mapGetters } from 'vuex'
  import * as TYPES from '@/store/monitor/monitor-types'
  export default {
    name: 'monitor-editor-tool',
    data(){
      return{
        flag:false
      }
    },
    methods:{

      ...mapMutations('monitor',{
        //控制器开关
        setTool : TYPES.SET_TOOL
      })
    },
    computed:{
      ...mapGetters(('monitor'),{
        getTool:'getTool'
      })
    }
  }
</script>

<style scoped lang="scss">

  img:focus {
    background-image: url("../../assets/charts-img/monitor-size.png"),linear-gradient(#f00,#00f);
    background-blend-mode: lighten;
    background-size: cover;
  }



  .main-left{
    height: 100%;
    background: #002140;
    display: flex;
    flex-direction: column;
    padding-top: 26px;
    border-right: 1px solid #295278;


    .SelectRatio{
      .item {
        text-align: center;
        margin-bottom: 26px;
        cursor: pointer;
        img{
          width: 30px;
          height: 30px;
          margin-bottom: 0;
        }
        .text{
          font-size: 12px;
          color: #a0b8ff;
          letter-spacing: 0;
          text-align: center;
        }


      }
    }
  }
</style>