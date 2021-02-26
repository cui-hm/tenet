<template>
    <div class="canbaojiaofeiBox">
        <yeWuJingBanBoxTitleCoty :title="titleValue" :isdialog="true" :chart = "chart"></yeWuJingBanBoxTitleCoty>
        <subTitle :subTitle="subTitleValue1"></subTitle>
        <Content :data="person"></Content>
        <subTitle :subTitle="subTitleValue2"></subTitle>
        <Content :data="money"></Content>
    </div>
</template>
<script>
    import { query } from '../../query'
    import yeWuJingBanBoxTitleCoty from '../../canBaoJiaoFei/yeWuJingBanBoxTitleCoty'
    import subTitle from '../../canBaoJiaoFei/subTitle'
    import Content from './zongHeGuiYuan'
    export default {
        props: {
            data: {
                default() {
                    return {
                        person: {
                            labelList: []
                        },
                        money: {
                            labelList: []
                        }
                    }
                },
            },
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
                titleValue: '综合柜员',
                subTitleValue1: '今日',
                subTitleValue2: '本月',
                person:{
                        labelList:[{
                            value:0,
                            unit:'%',
                            percent:0,
                            name:'参加基本医保人数',
                            describe:[
                                {
                                    name:'参加城镇职工医保人数\n',
                                    value:'',
                                    unit:'万'
                                },
                                {
                                    name:'参加城乡居民医保人数',
                                    value:'',
                                    unit:'万'
                                }
                            ],
                        }]
                    },
                money:{
                        labelList:[{
                            value:0,
                            unit:'%',
                            percent:0,
                            name:'基本医保缴费金额',
                            describe:[
                                {
                                    name:'城镇职工医保缴费金额',
                                    value:'',
                                    unit:'万'
                                },
                                {
                                    name:'城乡居民医保缴费金额',
                                    value:'',
                                    unit:'万'
                                }
                            ],
                        }]
                    },
                chart: {
                    'componentName': 'dialog-common-componentCopy',
                    'query': {
                        'queryId': 832,
                        'interval': 60000
                    },
                    'query2': {
                        'queryId': 836,
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
                            'name': '本月经办量',
                            'column': 'VALUE4'
                        }
                    ],
                    'tableColumnList2': [
                        {
                            'name': '排名',
                            'column': 'index'
                        },
                        {
                            'name': '经办类型',
                            'column': 'VALUE1'
                        },
                        {
                            'name': '今日经办数量',
                            'column': 'VALUE2'
                        },
                        {
                            'name': '本月经办量',
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
                                'queryId': 840
                            },
                            'test': '区域',
                            'queryParameterKey': 'cityName840',
                            'isregionName': true,
                            'pushName': '青海省'
                        },
                        {
                            'queryParameterKey': 'CodeType835',
                            'query': {
                                'queryId': 835,
                                'interval': 600000
                            },
                            'test': '经办业务类型',
                            'pushName': '全部'
                        },
                        {
                            'queryParameterKey': 'ObjType839',
                            'query': {
                                'queryId': 839,
                                'interval': 600000
                            },
                            'test': '办理主体的类型',
                            'pushName': '全部'
                        }
                    ]
                },
            }
        },
        inject: ['eventBus'],
        components: { yeWuJingBanBoxTitleCoty, subTitle, Content },
        methods:{
            setData(data) {
                let newPaesin = {
                    labelList:[{
                        value:data[0].VALUE+data[1].VALUE,
                        unit:'个',
                        name:'今日经办数',
                        describe:[
                            {
                                name:data[0].NAME,
                                value:data[0].VALUE,
                                unit:data[0].UNIT,
                                percent:(data[0].VALUE/(data[2].VALUE+data[3].VALUE)*100).toFixed(2)
                            },
                            {
                                name:data[1].NAME,
                                value:data[1].VALUE,
                                unit:data[1].UNIT,
                                percent:(data[1].VALUE/(data[2].VALUE+data[3].VALUE)*100).toFixed(2)
                            }
                        ],
                    }]
                }
                let money = {
                    labelList:[{
                        value:data[2].VALUE+data[3].VALUE,
                        unit:'个',
                        name:'本月经办数',
                        describe:[
                            {
                                name:data[2].NAME,
                                value:data[2].VALUE,
                                unit:data[2].UNIT,
                                percent:(data[2].VALUE/(data[2].VALUE+data[3].VALUE)*100).toFixed(2)
                            },
                            {
                                name:data[3].NAME,
                                value:data[3].VALUE,
                                unit:data[3].UNIT,
                                percent:(data[3].VALUE/(data[2].VALUE+data[3].VALUE)*100).toFixed(2)

                            }
                        ],
                    }]
                }
                this.money = money
                this.person = newPaesin
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
        beforeDestroy() {
            clearInterval(this.queryInterval)
            this.eventBus.$off('query-data', this.restartQuery)
        }
    }
</script>
<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
