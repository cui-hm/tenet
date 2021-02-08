<template>
  <div class="backgroundColor">
    <div class="contian">
      <div>
        <div> 单体颜色</div>
        <div class="contain_color">
          <div class="item_color" v-for="(item,index) in singleColor" :key="index" @click="setbackGround(item.style)">
            <div :style="item.style"></div>
          </div>
        </div>
      </div>
      <div>
        <div> 渐变颜色 </div>
        <div class="contain_color">
          <div class="item_color" v-for="(item,index) in ColorS" :key="index" @click="setbackGround(item.style)">
            <div :style="item.style"></div>
          </div>
        </div>
      </div>
      <div>
        <div> 使用图片 </div>
        <div class="contain_img" >
          <img :src="item.src" v-for="(item,index) in backfroundImg" :key="index">
        </div>
      </div>
      <div>
        <el-button size="mini" type="primary"> 上传图片 </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import * as TYPES from '@/store/monitor/monitor-types'
  export default {
    name: 'backgroud-color',
    data(){
      return{
        singleColor:[
          {
            style:'backgroundColor:rgb(195, 215, 226)'
          },
          {
            style:'backgroundColor:rgb(141, 191, 230)'
          },
          {
            style:'backgroundColor:rgb(41, 100, 157)'
          },
          {
            style:'backgroundColor:rgb(44, 64, 149)'
          },
          {
            style:'backgroundColor:rgb(28, 43, 77)'
          },
          {
            style:'backgroundColor:rgb(18, 38, 115)'
          },
          {
            style:'backgroundColor:rgb(28, 61, 95)'
          }
        ],
        ColorS:[
          {
            style:'background: linear-gradient(90deg, rgb(20, 55, 107) 13%, rgb(30, 112, 135) 98%)'
          },
          {
            style:'background: linear-gradient(90deg, rgb(36, 95, 184) 13%, rgb(63, 164, 192) 98%)'
          },
          {
            style:'background: linear-gradient(-43deg, rgb(140, 233, 246) 9%, rgb(78, 160, 243) 92%)'
          },
          {
            style:'background: linear-gradient(90deg, rgb(24, 51, 91) 13%, rgb(11, 58, 144) 98%)'
          },
          {
            style:'background: linear-gradient(90deg, rgb(44, 36, 184) 13%, rgb(63, 86, 192) 98%)'
          },
          {
            style:'background: linear-gradient(255deg, rgb(77, 170, 247) 0%, rgb(65, 136, 243) 100%)'
          }
        ],
        backfroundImg:[
          {
            src:require('../../../assets/background/hn.jpg')
          },
          {
            src:require('../../../assets/background/lss-homepage-bg-2.png')
          }
        ],
        tool:this.$store.state.tool
      }
    },
    created(){
    },
    methods:{
      ...mapMutations(('monitor'),{
        setbackGround:TYPES.SET_BACKGROUND
      }),
    },

  }
</script>

<style scoped lang="scss">
.backgroundColor{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align:left;

  background: #031b32;
  border: 1px solid #295278;
  box-shadow: 0 2px 6px 0 rgb(6 7 23 / 70%);
  border-radius: 2px;
  padding: 20px 10px;
  font-size: 12px;
  color: #cde6ff;
  letter-spacing: 0;
  height: 280px;
  .contian{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .contain_color{
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      .item_color{
        width: 16px;
        height: 16px;
        padding: 2px;
        cursor: pointer;
        overflow: hidden;
        div{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .contain_img{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      img{
        width: 50%;
        height: 100%;
        border-radius: 0;
      }
    }
  }
}
</style>