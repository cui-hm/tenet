<template>
  <div class="main">
    <div class="bench">
      <div class="mainTittle" @click="setPramData()">组件配置工作台</div>
      <component
              :is="input"
              v-bind="PramData"
      > </component>
    </div>
    <div class="componentConfig">
      <span class="componentTittle"> 组件配置 </span>
      <div class="componentName">
        <span> 组件名： </span>
        <el-input
          v-model="input"
          placeholder="请输入内容"
          size="small "
          @input="test()"
        ></el-input>
      </div>
      <div class="Param">
        <span class="ParamTittle"> 参数 </span>
        <div class="PramListTittle">
          <span> 参数名 </span>
          <span> 参数值 </span>
        </div>
        <div class="pramListBox">
          <div v-for="(item, index) in pramImportList" :key="index" class="PramList">
            <div>
              <el-input
                placeholder="请输入内容"
                v-model="item.pramName"
                clearable
                size="mini"
              >
              </el-input>
            </div>
            <div>
              <el-input
                placeholder="请输入内容"
                v-model="item.pramNameValue"
                clearable
                size="mini"
              >
              </el-input>
            </div>
          </div>
        </div>
        <div class="addAndSub">
          <i class="el-icon-circle-plus-outline" @click="add()"></i>
          <i class="el-icon-remove-outline" @click="Sub()"></i>
        </div>

      </div>
      <div class="bottom">
        <el-button type="primary" size="small" @click="setPramData()">预 览</el-button>
        <el-button type="primary" size="small">发 布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { chartComponentLoader } from "@/util/component-loader";
export default {
  components: {
    ...chartComponentLoader.getComponentMap()
  },
  name: "monitor-components-config",
  data() {
    return {
      input: "",
      pramImportList: [],
      PramData:{},
    };
  },
  methods: {
    add() {
      const pram = {
        pramName: "",
        pramNameValue: ""
      };
      this.pramImportList.push(pram);
      this.test();
    },
    Sub() {
      this.pramList.pop();
    },
    setPramData(){
      let PramData = {}
      this.pramImportList.forEach((item)=>{
        PramData[item.pramName] = item.pramNameValue
      })
      this.PramData = PramData
    },
    async test(){
      const componentMap = chartComponentLoader.getComponentMap(this.input)
      const component = await componentMap[this.input]()
      this.pramImportList=[]
      for(let a in component.default.props){
        const pram = {
          pramName: a,
          pramNameValue: component.default.props[a].default
        };
        this.pramImportList.push(pram);
      }

    }
  }
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  .mainTittle {
    width: 100%;
    height: 40px;
    position: absolute;
    top: 18px;
    font-size: 28px;
  }
  .bench {
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: center;
    font-weight: 700;
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
      .addAndSub {
        padding: 0px 5px;
        position: absolute;
        bottom: -8px;
        right: 40px;
        color: white;
        display: flex;
        width: 50px;
        justify-content: space-around;
        background-color: #002140;

        i {
          transition: color 0.5s ease-out;
          &:hover {
            cursor: pointer;
            color: #17d7be;
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
</style>