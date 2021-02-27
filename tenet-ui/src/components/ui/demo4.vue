<template>
  <div>
    <el-container>
      <el-aside width="65%">
        <div id="myChart" ref='chart'></div>
      </el-aside>
      <el-main class="dname" >
        <!--<ul>-->
          <!--<li v-for="(item,index) in money" :key="index">-->
            <!--{item.name}-->
            <!--{item.value}-->
          <!--</li>-->
        <!--</ul>-->
        <ul>
          <li v-for="(item,index) in money" :key="index" class="item1">
            <div class="total"><div class='circle' :style="{backgroundColor:objectcolor[item.id]}"></div><div class="item">{{item.name|sliceItem}}</div></div>
            <div>{{item.value}}</div>
          </li>
        </ul>
        <!--<div v-for="(item,index) in money" :key="index" class="item1">-->
          <!--<div>{{item.name}}</div>-->
          <!--<div>{{item.value}}</div>-->
        <!--</div>-->

      </el-main>
    </el-container>

  </div>
  <!--<div id="myChart" ref='chart'></div>-->
</template>

<script>
  export default {
    name: 'demo4',
    data(){
      return{
        money:[
          {name:'糖尿病',value:84.12,id:'111'},
          {name:'脑血管',value:83.54,id:'211'},
          {name:'重型病',value:81.30,id:'311'},
          {name:'肾结石',value:72.53,id:'411'},
          {name:'帕金森',value:50.20,id:'511'},
          {name:'其他',value:706,id:'611'},
        ],
        omoney:{},
        objectcolor:{
          '111':'#4FADFD',
          '211':'#ffe4c4',
          '311':'#155264',
          '411':'#A9FD16',
          '511':'#D467A3',
          '611':'#D4C23E'
        }

      }
    },
    filters:{
      sliceItem(value){
        return value.slice(0,2)+'...'
      }
    },
    props:{
//      data:{
//          type:String,
//          default:'chart'
// }
    },
    methods:{
      getmoney(){
        let sum=0
        for (let m of this.money) {
          sum =sum+m.value
        }
        console.log(sum)
        return sum
      },
      drawLine () {
        let myDom = document.getElementById('myChart')
        let myWidth = myDom.offsetWidth - 5           // 获取容器宽度
        let myHeight = myDom.offsetHeight - 5          // 获取容器高度
        let myRadius = myHeight * 0.44 / 2            // 根据环形图内圈百分比获取内圆半径
        let myPX = (0.3 - (myRadius / myWidth)) * 100 + '%'
        let myChart = this.$echarts.init(this.$refs.chart)
        // console.log(this.$echarts)
        // console.log(this.$refs.chart)
        // 绘制图表
        myChart.setOption({
          title: {                        // 标题样式
            // text: '数据接入机构统计',
            textStyle: {
              color: '#cccccc',
              fontSize: 14
            }
          },
          tooltip: {                      // 悬浮提示
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          // legend: {
          //   orient: 'vertical',
          //   top: '20%',
          //   right: 20,                // 与容器距离调节
          //   icon: 'circle',           // 样式调节  'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'等
          //   type:'plain',
          //   itemWidth: 7,
          //   textStyle: {
          //     color: '#8C8C8C',
          //     fontSize: 10,
          //     padding: [0, 0, 0, 5]     //字与图形间的边距
          //   },
          //   data:['糖尿病','脑血管','重型病','肾结石','帕金森','其他']
          // },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          graphic: {
            elements: [
              {
                type: 'group',
                left: myPX,         // 横坐标位置
                top: '33%',         // 纵坐标位置       55% - （44% / 2）
                children: [
                  {
                    type: 'circle',
                    shape: {
                      r: myRadius       // 白色圆半径
                    },
                    style: {
                      fill: '#fff'       // 背景颜色
                    }
                  },
                  {
                    type: 'text',          // 覆盖在圆上的文字位置和样式
                    style: {
                      text: this.getmoney()+'（万元）',
                      y: -10,
                      textAlign: 'center',
                      fontSize: 12,
                      fill: '#494949'
                    }
                  },
                  {
                    type: 'text',
                    style: {
                      text: '基金支出',
                      y: -30,
                      textAlign: 'center',
                      fontSize: 13,
                      fill: '#494949'
                    }
                  }
                ]
              }
            ]
          },
          series: [
            {
              name:'基金支出',
              type:'pie',
              radius: ['44%', '70%'],        // 环形图大小和粗细
              avoidLabelOverlap: false,
              center: ['30%', '55%'],        // 环形图位置
              label: {
                normal: {
                  show: false,            // 设置不显示
                  position: 'center'      // hover时提示在圆环内
                }
              },
              data:[
                {
                  value:706,
                  name:'糖尿病',
                  itemStyle: {
                    normal: {
                      color: { // 完成的圆环的颜色
                        colorStops: [{
                          offset: 0,
                          color: '#A098FC' // 0% 处的颜色
                        },
                          {
                            offset: 0.3,
                            color: '#4386FA' // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: '#4FADFD' // 0% 处的颜色
                          },
                          {
                            offset: 0.8,
                            color: '#0CD3DB' // 100% 处的颜色
                          }, {
                            offset: 1,
                            color: '#69FAFC' // 100% 处的颜色
                          }
                        ]
                      }

                    }
                  }

                },

                {
                  value:83.54,
                  name:'脑血管',
                  itemStyle: {
                    normal: {
                      color: { // 完成的圆环的颜色
                        colorStops: [{
                          offset: 0,
                          color: '#f0ffff' // 0% 处的颜色
                        },
                          {
                            offset: 0.3,
                            color: '#f5f5dc' // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: '#ffe4c4' // 0% 处的颜色
                          },
                          {
                            offset: 0.8,
                            color: '#ffebcd' // 100% 处的颜色
                          }, {
                            offset: 1,
                            color: '#f0f8ff' // 100% 处的颜色
                          }
                        ]
                      }

                    }
                  }

                },
                {
                  value:84.12,
                  name:'其他',
                  itemStyle: {
                    normal: {
                      color: { // 完成的圆环的颜色
                        colorStops: [{
                          offset: 0,
                          color: '#311864' // 0% 处的颜色
                        },
                          {
                            offset: 0.3,
                            color: '#183664' // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: '#155264' // 0% 处的颜色
                          },
                          {
                            offset: 0.8,
                            color: '#105E64' // 100% 处的颜色
                          }, {
                            offset: 1,
                            color: '#6C6460' // 100% 处的颜色
                          }
                        ]
                      }

                    }
                  }

                },
                {
                  value:84.12,
                  name:'其他',
                  itemStyle: {
                    normal: {
                      color: { // 完成的圆环的颜色
                        colorStops: [{
                          offset: 0,
                          color: '#FDF914' // 0% 处的颜色
                        },
                          {
                            offset: 0.3,
                            color: '#DCFD13' // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: '#A9FD16' // 0% 处的颜色
                          },
                          {
                            offset: 0.8,
                            color: '#73FD21' // 100% 处的颜色
                          }, {
                            offset: 1,
                            color: '#23FD1E' // 100% 处的颜色
                          }
                        ]
                      }

                    }
                  }

                },
                {
                  value:84.12,
                  name:'其他',
                  itemStyle: {
                    normal: {
                      color: { // 完成的圆环的颜色
                        colorStops: [{
                          offset: 0,
                          color: '#B468D4' // 0% 处的颜色
                        },
                          {
                            offset: 0.3,
                            color: '#D46BCF' // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: '#D467A3' // 0% 处的颜色
                          },
                          {
                            offset: 0.8,
                            color: '#D45064' // 100% 处的颜色
                          }, {
                            offset: 1,
                            color: '#D45A43' // 100% 处的颜色
                          }
                        ]
                      }

                    }
                  }

                },
                {
                  value:84.12,
                  name:'其他',
                  itemStyle: {
                    normal: {
                      color: { // 完成的圆环的颜色
                        colorStops: [{
                          offset: 0,
                          color: '#B8D436' // 0% 处的颜色
                        },
                          {
                            offset: 0.3,
                            color: '#CED43B' // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: '#D4C23E' // 0% 处的颜色
                          },
                          {
                            offset: 0.8,
                            color: '#D4A53A' // 100% 处的颜色
                          }, {
                            offset: 1,
                            color: '#D4873E' // 100% 处的颜色
                          }
                        ]
                      }

                    }
                  }

                },


              ]
            }
          ]
        })
      }
    },
    mounted () {
      this.drawLine()
    }
  }
</script>

<style scoped>
  /*右侧字*/
  .item{
    margin-left: 23px;
  }
  .total{
    display: flex;
    text-align: center;
  }

  .circle{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    font-size: 50px;
    color: #fff;
    line-height: 10px;
    text-align: center;

    margin-top: 5px;
    /*margin-right: 10px;*/
  }
  /*.item1{*/
    /*!*margin-right: 30px;*!*/
    /*!*height: 50px;*!*/
  /*}*/
  .dname{
    margin-top: 100px;
    margin-right: 100px;
    text-align: center;

  }
  /*使6个div分占两行*/
  .dname .item1{
    text-align: center;
    display: inline-block;
    border: 1px ;
    width: 30%;
    margin-bottom: 20px;
  }
  #myChart{
    width: 600px;
    height:400px;
    margin-left: 300px;
  }
</style>