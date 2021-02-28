<template>
    <div class="moneyBox">
        <div class="moneyTop">
            <div
                    class="moneyTopContent"
                    v-for="(item, index) in data.labelList[0].viewData[0].data"
                    :key="index"
            >
                <chart :data="defaultOption(index)" class="moneyChart"></chart>
                <div class="moneyTopValue">{{ `${item.value}${item.unit}` }}</div>
                <div class="moneyTopName">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="moneyBottom">
            <!-- data.labelList[0].viewData[0].data -->
            <div
                    class="moneyContent"
                    v-for="(item, index) in data.labelList[0].describe"
                    :key="index"
            >
                <dl class="content-value">
                    <dt>基金支付金额</dt>
                    <dd>
            <span>{{ item.value }}</span
            ><span>{{ item.unit }}</span>
                    </dd>
                </dl>
                <dl class="content-rate">
                    <dt>同比</dt>
                    <dd >
                        <upOrDown :data="item.percent"> </upOrDown>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>

    //import { mock } from "./mock.ts";
    import Chart from './gaugeChart'
    import upOrDown from '../../l01-up-or-down'

    export default {
        components:{Chart,upOrDown},
        data() {
            return {
            }
        },
        props: {
            data: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            defaultOption(index) {
                let value = this.data.labelList[0].viewData[0].data[index].value
                return {
                    value
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
    .moneyTop {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        margin-bottom: 12px;
        .moneyTopContent {
            width: 174px;
            padding-top: 10px;
            color: #ffffff;
            position: relative;
            .moneyChart {
                display: block;
                width: 174px;
                height: 88px;
                background: url(~@/assets/picture/degree.png) center center no-repeat;
            }
            .moneyTopValue {
                width: 100%;
                text-align: center;
                position: absolute;
                top: 54px;
                font-size: 24px;
            }
            .moneyTopName {
                width: 100%;
                font-size: 14px;
                text-align: center;
                line-height: 20px;
                padding: 0 0 12px;
                background: url('~@/assets/picture/pan-title.png') no-repeat bottom center;
            }
        }
    }
    .moneyBottom {
        display: flex;
        justify-content: space-around;
        .moneyContent {
            display: flex;
            width: 175px;
            align-items: center;
            .content-value {
                width: 131px;
                font-size: 14px;
                dt {
                    color: #fff;
                }
                dd {
                    line-height: 29px;
                    color: #87e7ff;
                    span:nth-child(1) {
                        font-size: 20px;
                    }
                }
            }
            .content-rate {
                font-size: 12px;
                line-height: 17px;
                dt {
                    color: #fff;
                    line-height: 20px;
                }
                dd {
                    white-space: nowrap;
                    line-height: 29px;
                }
            }
        }
    }
</style>
