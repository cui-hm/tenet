<template>
  <div class="mainBox" :style="background">
  <grid-layout
          :layout.sync="getCompinentsList"
          :col-num="48"
          :row-height="30"
          :is-draggable="true"
          :is-resizable="true"
          :is-mirrored="false"
          :vertical-compact="false"
          :margin="[10, 10]"
          :use-css-transforms="true"
          :prevent-collision="true"
  >
    <grid-item v-for="item in getCompinentsList"
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
  import { mapGetters } from 'vuex'
  import { chartComponentLoader } from '@/util/component-loader'
  import { getAllComponentName } from '@/service/component/component'
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
          {'x':0,'y':0,'w':2,'h':2,'i':'0'},
        ],
        a:'demo2'
      }
    },
    methods: {

    },
    computed:{
      ...mapGetters(('monitor'),{
        background:'getBackground',
        getCompinentsList:'getCompinentsList'
      })
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
      border: 1px red solid;
      color: white;
      font-weight: 700;
      height: 100%;
    }
  }
</style>