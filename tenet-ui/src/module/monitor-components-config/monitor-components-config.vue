<template>
  <div class='main'>
    <div class='bench'>
      <div class='mainTittle' @click='setPramData()'>组件配置工作台</div>
      <div class='imgUrl' ref="imgUrl">
        <component
                :is='input'
                v-bind='PramData'
        > </component>
      </div>

    </div>
    <div class='componentConfig'>
      <span class='componentTittle'> 组件配置 </span>


      <span class="modal-title" >

     <a  class="icon-mutex">?<i  class="mutex-tip">
       <p>说明：</p>
      <p>项目中components 下ui 文件夹内为 公用组件 </p>
        <p> 例如 ui 文件夹下有 cc-button.vue 或 demo.vue </p>
        <p> 第一步：右侧组件名输入 demo 或cc-button 变可自动扫描项目 加载这个组件 并自动扫描组件的prpos</p>
        <p> 第二部：右侧输入栏输入 默认配置 </p>
        <p> 第三部：点击发布 存到组件库 </p>
        <p> 第四部：用以发布的组件 在页面配置(新)里应用 组装界面 </p>
     </i></a>

           </span>

      <div class='componentName'>
        <span> 组件名： </span>
        <el-input
          v-model='input'
          placeholder='请输入内容'
          size='small '
          @input='queryProps()'
        ></el-input>
      </div>
      <div class='Param'>
        <span class='ParamTittle'> 参数 </span>
        <div class='PramListTittle'>
          <span> 参数名 </span>
          <span> 参数值 </span>
        </div>
        <div class='pramListBox'>
          <div v-for='(item, index) in pramImportList' :key='index' class='PramList'>
            <div>
              <el-input
                placeholder='请输入内容'
                v-model='item.pramName'
                clearable
                size='mini'
              >
              </el-input>
            </div>
            <div>
              <el-input
                placeholder='请输入内容'
                v-model='item.pramNameValue'
                clearable
                size='mini'
              >
              </el-input>
            </div>
          </div>
        </div>
      </div>
      <div class='bottom'>
        <el-button type='primary' size='small' @click='setPramData()'>预 览</el-button>
        <el-button type='primary' size='small' @click='release()'>发 布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { chartComponentLoader } from '@/util/component-loader'
import { insertComponent } from '@/service/component/component'
import html2canvas from 'html2canvas/dist/html2canvas.js'
export default {
  components: {
    ...chartComponentLoader.getComponentMap()
  },
  name: 'monitor-components-config',
  data() {
    return {
      input: '',
      pramImportList: [],
      PramData:{},
    }
  },
  methods: {
    //组装参数列表成对象
    setPramData(){
      let PramData = {}
      this.pramImportList.forEach((item)=>{
        PramData[item.pramName] = item.pramNameValue
      })
      this.PramData = PramData
    },

    //扫描组件中的所有参数
    async queryProps(){
      const componentMap = chartComponentLoader.getComponentMap(this.input)
      const component = await componentMap[this.input]()
      this.pramImportList=[]
      for(let a in component.default.props){
        const pram = {
          pramName: a,
          pramNameValue: component.default.props[a].default
        }
        this.pramImportList.push(pram)
      }

    },
    //发布到组件库
    release(){
      this.setPramData()
      //控制组件参数不能为空 否则 PramDataflag=false
      let PramDataflag = true
      for(let item in this.PramData){
        if(this.PramData[item] == null || this.PramData[item]==''){
          PramDataflag = false
        }
      }
      if(this.input && PramDataflag){
        let componentEntity = {
          id:'',
          componentName:this.input,
          componentConfig:JSON.stringify(this.PramData),
          componentRem:'',
          url:''
        }

        html2canvas(this.$refs.['imgUrl']).then(canvas => {
          let dataURL = canvas.toDataURL()
          componentEntity.url = dataURL
          insertComponent(componentEntity)
              .then(data=>{
                if(data.substring(0,2)=='失败'){
                  this.$message.error(data)
                }else{
                  this.$message.success(data)
                }
              })
        })
      }else{
        this.$message.error('请确保组件名与参数值不为空')
      }

    }
  }
}
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  .mainTittle {
    //width: 100%;
    height: 40px;
    //position: absolute;
    top: 18px;
    font-size: 28px;
  }
  .bench {
    height: 100%;
    width: 100%;
    display: flex;
    align-self: center;
    flex-flow: column;
    justify-content: center;
    font-weight: 700;
    .imgUrl{
      height: 80%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: red 1px solid;
    }
  }
  .componentConfig {
    height: 100%;
    width: 25%;
    top: 0px;
    right: 0px;
    background-color: #002140;
    padding: 0px 20px;
    .componentTittle {
      display: inline-block;
      color: white;
      margin: 20px;
      font-size: 20px;
    }
    .componentName {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-self: center;
      span {
        padding: 4px;
        font-size: 16px;
        color: white;
      }
      .el-input {
        width: 70%;
      }
    }
    .Param {
      margin: 40px 0px 0px 0px;
      width: 100%;
      border: #4ae0ff 1px solid;
      padding: 20px 0px;
      position: relative;
      height: 500px;
      .ParamTittle {
        display: inline-block;
        color: white;
        position: absolute;
        top: -12px;
        left: 40px;
        width: 50px;
        background-color: #002140;
      }
      .PramListTittle {
        display: flex;
        justify-content: space-around;
        color: white;
      }
      .pramListBox {
        height: 480px;
        overflow-y: auto;
        .PramList {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
          div {
            ::v-deep .el-input__inner {
              width: 90%;
            }
            /*padding:0px 1%;*/
          }
        }
      }
    }
    .bottom{
      position: absolute;
      bottom: 2%;
      right: 1%;
    }
  }
}
  .linshi{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0px;
  }



.modal-title .icon-mutex {

  font-size: 16px;

  color: #2bb7c5;

  text-align: center;

  line-height: 20px;

  cursor: pointer;

  position: relative;

  display: inline-block;

  width: 20px;

  height: 20px;

  position: relative;

  border: 1px solid #2bb7c5;

  border-radius: 50%;

  margin-left: 10px;



}

.modal-title .icon-mutex:hover {

  color: #2bb7c5;

}

.modal-title i {

  width: 350px;

  display: none;

  position: absolute;

  left: -200px;

  top: 27px;

  font-size: 12px;

  font-style:normal;

  color: #fff;

  text-align: left;

  background-color: rgba(1,1,1,0.7);
  /*background-color: #3c75e4;*/

  padding: 3px 5px;

  z-index: 2;

}

.modal-title .icon-mutex:hover i {

  display: block;

}

.modal-title i::before {

  display: inline-block;

  width: 0;

  height: 0;

  content: '';

  margin-left: 2px;

  vertical-align: middle;

  border-bottom: 6px solid #010101b3;

  border-right: 6px solid transparent;

  border-left: 6px solid transparent;

  position: absolute;

  top: -5px;

  left: 20px;

}
</style>