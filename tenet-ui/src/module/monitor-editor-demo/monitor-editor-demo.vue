<template>
  <div class="editorMain">
<!--    头部工具栏-->
    <div class="EditorTop" ref="EditorTop"
         @mousedown="mousedown($event)"
         @mouseup="mouseup($event)"
         @mousemove="mousemove($event)">
      <ul ref="demo">
        <div class="EditorTopTittle"> 工具栏</div>
        <li v-for="(item,index) in toolData" :key="index" @click="toolEvent(index)" :class="[{'select':ShowComponent(item.toolFlag)}]">
          <span :class="[item.icon]"> </span> {{item.name}}
        </li>
      </ul>
    </div>
<!--    组件库-->
    <div class="EditorComponent"
            @mousedown="mousedown($event)"
            @mouseup="mouseup($event)"
            @mousemove="mousemove($event)"
        v-show="ShowComponent('componentLibary')">
      <component-library>
      </component-library>
    </div>

    <div v-show="ShowComponent('tittle')"> 标题 </div>
    <div v-show="ShowComponent('backgroundConfig')" class="backgroundConfig">
      <BackgroundConfig>

      </BackgroundConfig>
    </div>


  </div>
</template>

<script>
  import componentLibrary from './component-Library-demo'
  import BackgroundConfig from './backgroundConfig-demo'
  export default {
    name: 'monitor-editor',
    components: {componentLibrary,BackgroundConfig},
    data(){
      return{
        fontClass:'icon-background',
        toolData:[
          {name:'背 景',icon:'icon-background',toolFlag:'backgroundConfig'},
          {name:'标 题',icon:'icon-background',toolFlag:'tittle'},
          {name:'组 件',icon:'icon-background',toolFlag:'componentLibary'},
          {name:'预 览',icon:'icon-background',toolFlag:'a'},
          {name:'发 布',icon:'icon-background',toolFlag:'b'}
        ],
        toolFlag:[],
        dragOffserX:0,
        dragOffsetY:0
      }
    },
    computed:{
      //为了传参 闭包写法 方法是判断是否显示用的
      ShowComponent(){
        return function (toolFlag){
          let id = NaN
          let flag = false
          this.toolData.forEach((item,index)=>{
            if(item.toolFlag==toolFlag){
              id = index
            }
          })
          this.toolFlag.forEach(item=>{
            if(item == id){
              flag = true
            }
          })
          return flag
        }
      }
    },
    methods:{
      toolEvent(index){
        let flag = true
        this.toolFlag.forEach(item=>{
          if(item == index){
            flag = false
          }
        })
        if(flag){
          this.toolFlag.push(index)
        }else{
          let spliceIndex = this.toolFlag.indexOf(index)
          this.toolFlag.splice(spliceIndex, 1)
        }
      },
      backgroundConfig(){
      },
      mousedown(event){
        this.move=true
        this.dragOffserX=event.clientX - event.currentTarget.offsetLeft
        this.dragOffsetY=event.clientY - event.currentTarget.offsetTop
      },
      mouseup(){
        this.move=false
      },
      mousemove(event){
        if(this.move){
          let newX=event.clientX -this.dragOffserX
          let newY=event.clientY -this.dragOffsetY
          newX=newX<0? 0 : newX
          newY=newY<0? 0 : newY
          event.currentTarget.style.left=newX+'px'
          event.currentTarget.style.top=newY+'px'
          event.currentTarget.style.position = 'absolute'
          // ({left:newX+'px',top:newY+'px',position:'absolute'})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .editorMain{
    width: 100%;
    height: 100%;
    background:#F1F2F6;
    .EditorTop{
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translate(-50%);
      width: 60%;
      background: white;
      box-shadow:0px 0px 5px 1px #b5b5b5;
      cursor: move;
      z-index: 99;
      ul{
        margin: 0px auto;
        display: flex;
        height: 40px;
        align-items: center;
        .EditorTopTittle{
          font-weight: 700;
          text-align: center;
          flex: 1;
          border-right: 1px solid #b5b5b5;
        }
        li{
          flex: 1;
          display:flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          color: rgb(0,0,0,1);
          font-weight: 700;
          transition: opacity 0.5s ease-out;
          span{
            font-size: 20px;
            margin: 0px 10px;
          }
          &:hover{
            opacity:1;
            cursor: pointer;
          }
        }
      }
    }
    .EditorComponent{
      position: absolute;
      width: 40%;
      height: 500px;
      top: 38%;
      left: 5%;
    }
    .backgroundConfig{
      position: absolute;
      width: 40%;
      height: 250px;
      top: 8%;
      left: 5%;
    }
  }
  .select{
    opacity:1;
    color: red;
  }


</style>