<template>
    <div class="jingbanyewuBox">
        <yeWuJingBanBoxTitleCoty :title="titleValue" :isdialog="true" :chart="chart"></yeWuJingBanBoxTitleCoty>
        <div class="earth">
            <img src="../../../../../assets/picture/jbyw.png" alt="png" class="earthImg" />
            <div class="earthText">经办业务</div>
        </div>
        <div>
            <div

                    v-for="(item, index) in labelList"
                    :key="index"
                    class="jingbanyewuContent"
                    :style="
          `position:absolute;top:${position[index][0]}px;left:${
            position[index][1]
          }px`
        "
            >
                <div class="jingbanyewName">{{ item.NAME }}</div>
                <div class="jingbanyewValueUnit">
          <span class="jingbanyewValue">{{ item.VALUE }}</span
          ><span class="jingbanyewUnit">{{ item.UNIT }}</span>
                </div>
                <div class="jingbanyewPercent">
                    <span> 本月经办量：{{item.PERCEN}} 笔 </span>
<!--                    <upOrDown :data="item.PERCENT">-->
<!--                    </upOrDown>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   // import upOrDown from '../l02-up-or-down'
    import yeWuJingBanBoxTitleCoty from '../yeWuJingBanBoxTitleCoty.vue'
    import { query } from '@/service/monitor/query'
    export default {
        props: {
            query: {
                type: Object,
                default: () => ({
                    queryId: null,
                    interval: Infinity
                })
            }
        },
        computed: {

        },
        data() {
            return {
                position: [
                    [121, 499],
                    [274, 579],
                    [427, 499],
                    [427, 105],
                    [274, 25],
                    [121, 109]
                ],
                titleValue: '业务经办',
                labelList:[],
                chart: {
                    'componentName': 'dialog-common-componentCopy',
                    'query': {
                        'queryId': 803,
                        'interval': 60000
                    },
                    'query2': {
                        'queryId': 837,
                        'interval': 60000
                    },
                    'tableColumnList1': [
                        {
                            'name': '排名',
                            'column': 'index'
                        },
                        {
                            'name': '地市',
                            'column': 'VALUE1'
                        },
                        {
                            'name': '区域',
                            'column': 'VALUE2'
                        },
                        {
                            'name': '今日经办数量',
                            'column': 'VALUE3'
                        },
                        {
                            'name': '本月经办数量',
                            'column': 'VALUE4'
                        }
                    ],
                    'tableColumnList2': [
                        {
                            'name': '排名',
                            'column': 'index'
                        },
                        {
                            'name': '经办业务分析类型',
                            'column': 'VALUE1'
                        },
                        {
                            'name': '今日经办数量',
                            'column': 'VALUE2'
                        },
                        {
                            'name': '本月经办数量',
                            'column': 'VALUE3'
                        }
                    ],
                    'DatePicherConfig': {
                        'showDatePicher': false,
                        'queryParameterKey1': 'startTime617',
                        'queryParameterKey2': 'endTime617'
                    },
                    'SelectConfig': [
                        {
                            'query': {
                                'queryId': 804
                            },
                            'test': '区域',
                            'queryParameterKey': 'cityName804',
                            'isregionName': true,
                            'pushName': '青海省'
                        },
                        {
                            'queryParameterKey': 'CodeType805',
                            'query': {
                                'queryId': 805,
                                'interval': 600000
                            },
                            'test': '经办业务类型',
                            'pushName': '全部'
                        }
                    ]
                },
            }
        },
        inject: ['eventBus'],
        methods: {
            setData(data) {
                this.labelList = data
            },
            async queryData() {

                let data
                if(this.query.queryId != null) {
                    this.$emit('data-status-change', { type: 'loading' })
                    try {
                        data = await query(this.query.queryId)
                    } catch (message) {
                        this.$emit('data-status-change', { type: 'failed', message })
                    }
                    if(data!=null) {
                        this.$emit('data-status-change', {type: 'success'})
                        this.setData(data)
                    }
                } else {
                    this.setData(this.labelList)
                }
            },
            restartQuery() {
                if (this.queryInterval) {
                    clearInterval(this.queryInterval)
                }
                this.queryData()
                if (this.query.queryId != null) {
                    this.queryInterval = setInterval(this.queryData, this.query.interval)
                }
            },

        },
        mounted() {
            this.restartQuery()
            this.eventBus.$on('query-data', this.restartQuery)
        },
        components: { yeWuJingBanBoxTitleCoty },
        beforeDestroy() {
            clearInterval(this.queryInterval)
            this.eventBus.$off('query-data', this.restartQuery)
        }
    }
</script>
<style lang="scss" scoped>
    .jingbanyewuBox {
        height: 600px;
        width: 100%;
        background: url(~@/assets/picture/dipan.png) bottom center no-repeat;
        position: relative;
        .earth {
            width: 266px;
            height: 270px;
            position: absolute;
            left: 50%;
            top: 199px;
            margin-left: -133px;
            background: url(~@/assets/picture/earth.png) no-repeat;
            .earthImg {
                width: 70px;
                height: 66px;
                margin-top: 78px;
                margin-left: 98px;
            }
            .earthText {
                font-size: 24px;
                color: #bdf2ff;
                width: 100%;
                text-align: center;
            }
        }
        .jingbanyewuContent {
            width: 160px;
            height: 94px;
            padding-left: 16px;
            padding-top: 12px;
            background: url(~@/assets/picture/jbywBg.png) no-repeat;
            .jingbanyewName {
                font-size: 14px;
                color: #ffffff;
            }
            .jingbanyewValue {
                font-size: 20px;
                color: #87e7ff;
                line-height: 28px;
            }
            .jingbanyewUnit {
                font-size: 14px;
                color: #87e7ff;
            }
            .jingbanyewPercent {
                font-size: 12px;
                span:nth-child(1) {
                    color: #fff;
                }
            }
        }
    }
</style>
