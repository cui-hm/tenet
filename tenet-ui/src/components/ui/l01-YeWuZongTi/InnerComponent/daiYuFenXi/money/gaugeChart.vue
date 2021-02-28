<template>
    <div>
        <div class="chart-container" ref="chart-container"></div>
    </div>
</template>

<script>
    export default {
        props:{
            data: {
                type: Object,
                default: ()=>({})
            }
        },
        data(){
            return{
                series: [
                    {
                        type: 'gauge',
                        radius: '176%',
                        startAngle: 180,
                        endAngle: 0,
                        center: ['50%', '100%'],
                        pointer: {
                            show: true,
                            width: 0
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 10,
                                color: [
                                    [ 2/3,
                                        {
                                            type: 'linear',
                                            colorStops: [
                                                {
                                                    offset: 0,
                                                    color: '#4188F3' // 0% 处的颜色
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#4DD2F7' // 100% 处的颜色
                                                }
                                            ]
                                        }
                                    ]
                                ]
                            }
                        },
                        splitLine: { show: false },
                        axisTick: { show: false },
                        axisLabel: { show: false },
                        title: { show: false },
                        detail: { show: false },
                        data: [
                            {
                                value: 10
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            init(){
                this.option = {
                    series: []
                }
                let newColor = [
                    [ this.data.value/100,
                        {
                            type: 'linear',
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#4188F3' // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#4DD2F7' // 100% 处的颜色
                                }
                            ]
                        }
                    ]
                ]
                this.option.series = this.series
                this.option.series[0].axisLine.lineStyle.color = newColor
                this.chart = this.$echarts.init(this.$refs['chart-container'])
                this.chart.setOption(this.option)
            }
        },
        mounted(): void {
            this.init()
        },
        watch: {
            data: {
                // eslint-disable-next-line no-unused-vars
                handler: function (val, oldVal) {
                    this.init()
                },
                deep: true,
            },
        }

    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        height: 100%
    }
</style>