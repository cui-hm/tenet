<template>
    <div class="yidijiuyiBox">
        <div>
            <yeWuJingBanBoxTitle
                    :title="titleValue"
                    :isjumpTo = 'true'
            ></yeWuJingBanBoxTitle>
            <div
                    v-for="(item, index) in labelList"
                    :key="index"
                    class="yidijiuyiContent"
            >
                <div class="jingbanyewName">{{ `${item.NAME}` }}</div>
                <div class="jingbanyewValue">
                    {{ item.VALUE }}
                    <span>{{ item.UNIT }}</span>
                </div>
                <div class="jingbanyewPercent" v-show="item.percent">
                    <span> 同比：</span>
                    <span>123</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import { query } from '@/service/monitor/query'
    import yeWuJingBanBoxTitle from '../yeWuJingBanBoxTitle.vue'
    import defaultData from '@/components/Data/l01-YeWuZongTi/yiDiJiuYi/index'
    export default {
        props: {
            data: {
                type: Object,
                default: () => ({})
            },
            query: {
                type: Object,
                default: () => ({
                    queryId: null,
                    interval: Infinity
                })
            },
            regionCode: {
                type: String,
                default: ''
            }
        },
        computed: {
            isCity() {
                const str = this.checkPrivinceOrCity(this.regionCode)
                return str === 'city' ? false : true
            },
        },
        data() {
            return {
                titleValue: '异地就医',
                //页面跳转用
                // detailValue: '查看更多',
                labelList:defaultData,
            }

        },
        methods: {
            setData(data) {
                this.labelList = data
            },
            async queryData() {

                let data
                if(this.query.queryId != null) {
                    this.$emit('data-status-change', { type: 'loading' })
                    try {
                        //data = await query(this.query.queryId)
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
            }
        },
        components: { yeWuJingBanBoxTitle }
    }
</script>
<style lang="scss" scoped>
    .yidijiuyiBox {
        height: 580px;
        width: 100%;
        background: url('~@/assets/picture/building.png') bottom center no-repeat;
        position: relative;
        .yidijiuyiContent {
            position: absolute;
            height: 94px;
            .jingbanyewName {
                font-size: 14px;
                color: #ffffff;
            }
            .jingbanyewValue {
                font-size: 30px;
                color: #87e7ff;
                line-height: 42px;
                // @linear();
                span {
                    font-size: 18px;
                }
            }
            .jingbanyewPercent {
                font-size: 12px;
                color: #fff;
            }
        }
        .yidijiuyiContent:nth-child(2) {
            left: 50%;
            margin-left: -90px;
            top: 100px;
            text-align: center;
        }
        .yidijiuyiContent:nth-child(3) {
            left: 50px;
            top: 244px;
        }
        .yidijiuyiContent:nth-child(4) {
            left: 596px;
            top: 244px;
        }
    }
</style>
