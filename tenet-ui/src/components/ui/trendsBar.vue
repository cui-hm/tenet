<template>
  <div ref='trendsBar' class='trendsBar'>
  </div>
</template>

<script>
  //引入option 写出去方便以后改图
  import defaultOption from '@/components/Option/trendsBar'
  //引入data 更清晰看出data格式
  import defaultData from  '@/components/Data/trendsBar'
  export default {
    data() {
      return {
        updateFrequency:2000,
        dimension:0,
        countryColors:{'Australia':'#00008b','Canada':'#f00','China':'#ffde00','Cuba':'#002a8f','Finland':'#003580','France':'#ed2939','Germany':'#000','Iceland':'#003897','India':'#f93','Japan':'#bc002d','North Korea':'#024fa2','South Korea':'#000','New Zealand':'#00247d','Norway':'#ef2b2d','Poland':'#dc143c','Russia':'#d52b1e','Turkey':'#e30a17','United Kingdom':'#00247d','United States':'#b22234'}
      }
    },
    methods:{
      //初始化
      init(){
        this.chart = this.$echarts.init(this.$refs['trendsBar'])
        this.option = defaultOption
        this.setOption()
      },
      //组装echarts图
      setOption(){
        this.option.series.data = defaultData
        this.chart.setOption(this.option)
      }

    },
    mounted(){
      this.init()
    }
  }
</script>

<style scoped lang='scss'>
.trendsBar{
  height: 100%;
  width: 100%;
  border: 1px solid blue;
}
</style>