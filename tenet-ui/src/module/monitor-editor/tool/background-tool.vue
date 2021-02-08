<!--背景工作栏-->
<template>
  <div class="backgroundTool">
    <div class="main">
      <div class="left">
        <div class="leftTittle">
          <div class="leftTittleLeft">
            <img src="../../../assets/charts-img/backgroudTool.png">
            <div class="leftTittleLeftBody">
              <div> 大屏分辨率 </div>
              <div> 1980 × 1080</div>
            </div>
          </div>
          <div class="leftTittleRight">
            &lt;
          </div>
        </div>
        <div class="leftBody">
          <span>调整尺寸</span>
          <div class="input_contain">
            <div class="item">
                <div class="label">W</div>
                <input type="number" value="1980">
              </div>
            <div class="item">
                <div class="label">H
                </div>
                <input type="number" value="1080">
              </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div v-for="(item,index) in text" :key="index" class="item">
          <div class="label">
            <img src="../../../assets/charts-img/backgroudTool.png">
            <div class="name">{{item.name}}</div>
          </div>
          <div class="value">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'backgroud-tool',
    data(){
      return{
        text:[
          {
            name:'大屏分辨率',
            value:'1980×1080'
          },
          {
            name:'常规分辨率',
            value:'1366×768'
          },
          {
            name:'桌面HD',
            value:'1440×1024'
          },
          {
            name:'占位符',
            value:'1000×1000'
          },
          {
            name:'自定义',
            value:''
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  div {
    box-sizing: border-box;
  }
  .backgroundTool{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    background: #031b32;
    border: 1px solid #295278;
    box-shadow: 0 2px 6px 0 rgb(6 7 23 / 70%);
    border-radius: 2px;
    padding: 20px 10px;
    font-size: 12px;
    color: #cde6ff;
    letter-spacing: 0;
    .main{
      display: flex;
      padding: 10px;
      justify-content: space-between;
      height: 100%;
      .left{
        width: 100%;
        flex-direction: column;
        .leftTittle{
          display: flex;
          padding: 10px 10px 20px;
          border-bottom: 1px solid #295278;
          margin-bottom: 20px;
          justify-content: space-between;
          align-items: center;
          .leftTittleLeft{
            display: flex;
            align-items: center;
            img{
              width: 22px;
              height: 22px;
            }
            .leftTittleLeftBody{
              margin-left: 10px;
            }
          }
          .leftTittleRight{
            transform: scaleY(1.5) rotate(180deg);
          }
        }
        .leftBody{
          text-align:left;
          .input_contain{
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .item{
              position: relative;
              .label{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                z-index: 999;
                color: #ccc;
                width: 20px;
                height: 20.5px;
                text-align: center;
                line-height: 20px;
                color: #6491af;
              }
              input{
                color: inherit;
                font: inherit;
                margin: 0;
                line-height: normal;
                border: 1px solid #0160c0;
                border-radius: 2px;
                background: none;
                width: 90px;
                padding-left: 12px;
                height: 24px;
              }
            }
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 210px;
        flex: 1 0 auto;
        margin-left: 30px;
        background: rgba(60,97,133,.2);
        padding: 0 14px;
        .item{
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 5px 10px;
          cursor: pointer;
          .label{
            display: flex;
            width: 100%;
            align-items: center;
            img{
              width: 12px;
              height: 12px;
              margin-right: 8px;
            }
          }
          .value{
            width: 100%;
            text-align: right;
          }
        }
      }
    }


  }
  .active{
    background: #0160c0;
    border: 1px solid #0160c0;
    border-radius: 2px;
  }

</style>