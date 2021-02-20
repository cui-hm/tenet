<template>
  <div class="editor">
    <div class="tittle">
      <monitorEditorTittle></monitorEditorTittle>
    </div>
    <div class="main">
      <div class="main-left">
        <monitorEditorTool></monitorEditorTool>
      </div>
      <div class="main-box">
        <monitorEditorMainBox></monitorEditorMainBox>
      </div>
      <div class="main-right">
        <monitorEditorComponentConfig></monitorEditorComponentConfig>
      </div>
    </div>

    <div class="backgroudTool" v-show="getTool.backgroudTool">
      <backgroudTool></backgroudTool>
    </div>

    <div class="backgroudColor" v-show="getTool.backgroudColor">
      <backgroudColor></backgroudColor>
    </div>

    <div class="componentLibrary" v-show="getTool.componentLibrary">
      <componentLibrary></componentLibrary>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import monitorEditorTool from './monitor-editor-tool'
import monitorEditorTittle from './monitor-editor-tittle'
import monitorEditorComponentConfig from './monitor-editor-component-config'
import monitorEditorMainBox from './monitor-editor-mainBox'
import backgroudTool from './tool/background-tool'
import backgroudColor from './tool/background-color'
import componentLibrary from './tool/component-Library'
import * as TYPES from '@/store/monitor/monitor-types'

//import{ getMonitorData} from  '@/service/monitor/monitor'

export default {
  name: 'monitor-editor-new',
  data() {
    return {
      demo: ''
    }
  },
  components: {
    monitorEditorTittle,
    monitorEditorTool,
    monitorEditorComponentConfig,
    monitorEditorMainBox,
    backgroudTool,
    backgroudColor,
    componentLibrary
  },
  methods: {
    ...mapMutations('monitor', {
      //控制器开关
      setTool: TYPES.SET_TOOL
    }),
    ...mapActions('monitor', {
      getMonitorData: 'getMonitorData'
    })
  },
  created() {
    this.getMonitorData(this.$route.params.monitorId)
  },
  computed: {
    ...mapGetters('monitor', {
      getTool: 'getTool'
    })
  },
  watch: {
    '$route.params.monitorId': {
      handler(to, from) {
        if (process.env.VUE_APP_ENV === 'development' && to === from) {
          this.getMonitorData(to)
        }
        if (to !== from) {
          this.getMonitorData(to)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.editor {
  width: 100%;
  height: 100%;
  .tittle {
    width: 100%;
  }
  .main {
    width: 100%;
    align-items: flex-start;
    background: #031b32;
    display: flex;
    height: calc(100% - 46px);
    position: relative;
    .main-left {
      width: 70px;
      height: calc(100% - 13px);
      // calc(100%-45px);
    }
    .main-box {
      padding: 20px;
      width: 100%;
      height: calc(100%-46px);
      position: relative;
    }
    .main-right {
      height: calc(100%);
    }
  }
  .backgroudTool {
    width: 500px;
    transform-origin: left center;
    z-index: 2000;
    position: absolute;
    top: 69px;
    left: 57px;
    height: 314px;
  }
  .backgroudColor {
    width: 220px;
    transform-origin: left center;
    z-index: 2020;
    position: absolute;
    top: 150px;
    left: 57px;
  }
  .componentLibrary {
    width: 672px;
    position: absolute;
    top: 120px;
    left: 35px;
    transform-origin: left center;
    z-index: 2000;
  }
}
</style>