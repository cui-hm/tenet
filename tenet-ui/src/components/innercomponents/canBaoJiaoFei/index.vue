<template>
    <div class="canbaojiaofeiBox">
        <yeWuJingBanBoxTitle :title="titleValue"></yeWuJingBanBoxTitle>
        <subTitle :subTitle="subTitleValue1"></subTitle>
        <Content :data="person"></Content>
        <subTitle :subTitle="subTitleValue2"></subTitle>
        <Content :data="money"></Content>
    </div>
</template>
<script>
    import { query } from '../query.js'
    import yeWuJingBanBoxTitle from './yeWuJingBanBoxTitle'
    import subTitle from './subTitle'
    import Content from './canBaoJiaoFei'
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
                titleValue: '参保缴费',
                subTitleValue1: '参保情况',
                subTitleValue2: '缴费情况',
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
                    }
            }
        },
        inject: ['eventBus'],
        components: { yeWuJingBanBoxTitle, subTitle, Content },
        methods:{
            setData(data) {
                let newPaesin = {
                    labelList:[{
                        value:data[0].VALUE+data[1].VALUE,
                        unit:'人',
                         percent:parseFloat((((data[0].VALUE+data[1].VALUE)-(data[0].VALUE2+data[1].VALUE2))/(data[0].VALUE2+data[1].VALUE2)*100).toFixed(2)),
                        name:'参加基本医保人数',
                        describe:[
                            {
                                name:'参加城镇职工医保人数\n',
                                value:data[0].VALUE,
                                unit:data[0].UNIT,
                                percent:data[0].PERCENT
                            },
                            {
                                name:'参加城乡居民医保人数',
                                value:data[1].VALUE,
                                unit:data[1].UNIT,
                                percent:data[1].PERCENT
                            }
                        ],
                    }]
                }
                let money = {
                    labelList:[{
                        value:parseFloat((data[2].VALUE+data[3].VALUE)).toFixed(2),
                        unit:'万元',
                        percent:parseFloat((((data[2].VALUE+data[3].VALUE)-(data[2].VALUE2+data[3].VALUE2))/(data[2].VALUE2+data[3].VALUE2)*100).toFixed(2)),
                        name:'基本医保缴费金额',
                        describe:[
                            {
                                name:'城镇职工医保缴费金额',
                                value:data[2].VALUE.toFixed(2),
                                unit:data[2].UNIT,
                                percent:data[2].PERCENT
                            },
                            {
                                name:'城乡居民医保缴费金额',
                                value:data[3].VALUE.toFixed(2),
                                unit:data[3].UNIT,
                                percent:data[3].PERCENT

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
