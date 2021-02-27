<template>
  <div class="mainBox" :style="background" ref="mainBox">
    <span @click="demo('mainBox')"> aaaaa </span>
    <grid-layout
            :layout.sync="layoutList"
            :col-num="48"
            :row-height="30"
            :is-draggable="false"
            :is-resizable="false"
            :is-mirrored="false"
            :vertical-compact="false"
            :margin="[10, 10]"
            :use-css-transforms="true"
            :prevent-collision="true"
    >
      <grid-item v-for="item in layoutList"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 :key="item.i">
        <div class="demo">
          <component
                  :is='item.componentName'></component>
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
  import { GridLayout, GridItem } from 'vue-grid-layout'
  import { mapGetters,mapActions } from 'vuex'
  import { chartComponentLoader } from '@/util/component-loader'
  import { getAllComponentName } from '@/service/component/component'
  import { saveUrlimg } from '@/util/index'
  export default {
    name: 'dashboard-home',
    components: {
      GridLayout,
      GridItem,
      ...chartComponentLoader.getComponentMap()
    },
    created(){
      getAllComponentName().then(
          item =>{ this.test = item}
      )
    },
    data() {
      return {
        layout: [
          {componentName: 'demo2',
            h: 5,
            i: 51,
            w: 5,
            x: 0,
            y: 0}
        ],
        a:'demo2',
        //getmonitorComponentList:this.$store.getters['monitor/getmonitorComponentList']
      }
    },
    methods: {
      async demo(mainBox){
        let a = this.$refs[mainBox]
        let b = await saveUrlimg(a)
        console.log(b)
      },
      ...mapActions('monitor', {
        getMonitorData: 'getMonitorData'
      })
    },
    computed:{
      ...mapGetters(('monitor'),{
        background:'getBackground',
        getmonitorComponentList:'getmonitorComponentList'
      }),
      layoutList(){
        let layoutList=[]
        this.getmonitorComponentList.forEach(item=>{
          layoutList.push(item.data)
        })
        return layoutList
      }
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
  /**{*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*}*/
  /*html,body{*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/
  .mainBox{
    width: 100%;
    //background: #143555;
    background-size: 100% 100%;
    position: relative;
    height: 100vh;

    .demo{
      color: white;
      font-weight: 700;
      height: 100%;
    }
  }
</style>