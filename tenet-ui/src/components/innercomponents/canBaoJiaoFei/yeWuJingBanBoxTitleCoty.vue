<template>
    <div class="yewujingbanBox">
        <h3 class="title">{{ title }}</h3>
        <div v-if="isdialog" class="detail">
            <l02Dialog
                    :chart="chart"
                    :title="diualogtitle">
                    :dialogShow=false
            </l02Dialog>
        </div>
        <a v-if="isjumpTo" class="detail">查看更多</a>
    </div>
</template>
<script>
    // import  l02Dialog from '../L02-dialog'
    export default {
        components:{
            // l02Dialog
        },
        props: {
            diualogtitle : {
                type:Object,
                default:()=>({
                    text: '业务总体经办详情'
                })
            },
            isdialog: {
                type: Boolean,
                default: false
            },
            isjumpTo:{
                type: Boolean,
                default: false
            },
            title: {
                type: String
            },
            url: {
                type: String
            },
            query: {
                type: Object,
                default: () => ({})
            },
            chart:{
                type:Object,
                default:()=>({
                    'componentName': 'dialog-common-componentCopy',
                    'query': {
                        'queryId': 803,
                        'interval': 60000
                    },
                    'tableColumnList': [
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
                            'name': '经办业务分析类型',
                            'column': 'VALUE3'
                        },
                        {
                            'name': '今日经办数量',
                            'column': 'VALUE4'
                        },
                        {
                            'name': '昨日经办数量',
                            'column': 'VALUE5'
                        },
                        {
                            'name': '增长率',
                            'column': 'VALUE6'
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
                }),
            }

        },
        data() {
            return {

            }
        },
        methods:{
            jumpTo(){
                this.$router.push({ path: '/dashboard-release/28' })
            }
        }
    }
</script>
<style lang="scss" scoped>
    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
    .yewujingbanBox {
        position: relative;
        .title {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 26px;
            color: #53e2ff;
        }
        .detail {
            height: 60px;
            line-height: 60px;
            font-size: 16px;
            color: #53e2ff;
            position: absolute;
            top: 0;
            right: 20px;
            &:hover{
                cursor: pointer;
                color: #04c6d3;
            }
        }
    }
</style>
