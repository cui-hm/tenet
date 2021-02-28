<template>
    <div class="daiyufenxiBox">
        <yeWuJingBanBoxTitle :title="titleValue"></yeWuJingBanBoxTitle>
        <subTitle :subTitle="peopleSubTitle"></subTitle>
        <p2 :data="person"></p2>
        <subTitle :subTitle="moneySubTitle"></subTitle>
        <money :data="money"></money>
    </div>
</template>
<script>
    import yeWuJingBanBoxTitle from '../yeWuJingBanBoxTitle.vue'
    //import { query } from '@/service/monitor/query'
    import subTitle from '../subTitle.vue'
    import p2 from './people/people.vue'
    import money from './money/money.vue'

    import defaultPersonData from '@/components/Data/l01-YeWuZongTi/daiYuFenXi/person'
    import defaultMoneyData from '@/components/Data/l01-YeWuZongTi/daiYuFenXi/money'
    export default {
        props: {
            data: {
                default() {
                    return {
                        money: '',
                        person: ''
                    }
                }
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
                peopleSubTitle: '享受待遇人次',
                moneySubTitle: '基金支付',
                titleValue: '待遇保障',
                detailValue: '',
                person:defaultPersonData,
                money:defaultMoneyData
            }
        },
        components: { subTitle, p2, money, yeWuJingBanBoxTitle },
        methods:{
            setData(data) {
                let newPaesin = {
                    labelList:[{
                        value:data[0].VALUE+data[1].VALUE,
                        unit:'人',
                        percent:33333,
                        name:'参加基本医保人数',
                        describe:[
                            {
                                name:data[0].NAME,
                                value:data[0].VALUE,
                                unit:data[0].UNIT,
                                percent : data[0].PERCENT
                            },
                            {
                                name:data[1].NAME,
                                value:data[1].VALUE,
                                unit:data[1].UNIT,
                                percent : data[1].PERCENT
                            }
                        ],
                    }]
                }
                let money = {
                    labelList:[{
                        value:'123123',
                        unit:'%',
                        percent:33333,
                        name:'aaaa',
                        describe:[{
                            name:data[4].NAME,
                            value:data[4].VALUE,
                            unit:data[4].UNIT,
                            percent : data[4].PERCENT
                        },
                            {
                                name:data[5].NAME,
                                value:data[5].VALUE,
                                unit:data[5].UNIT,
                                percent : data[5].PERCENT
                            }],
                        viewData:[{
                            data:[
                                {
                                    name:data[2].NAME,
                                    value:data[2].VALUE,
                                    unit:data[2].UNIT
                                },
                                {
                                    name:data[3].NAME,
                                    value:data[3].VALUE,
                                    unit:data[3].UNIT
                                }
                            ]
                        }]
                    }]
                }
                this.money = money
                this.person = newPaesin
            },
        },
        mounted() {
        },

    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .title {
        box-sizing: border-box;
        padding-left: 14px;
        position: relative;

        color: rgba(4, 193, 255, 1);
        font-size: 18px;
        line-height: 25px;
    }
    .title::before {
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -6px;
        border-left: 4px solid rgba(4, 193, 255, 1);
        height: 12px;
        width: 0;
        overflow: hidden;
    }
</style>
