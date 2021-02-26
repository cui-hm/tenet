<template>
    <div class="canbaojiaofeiBox">
        <div class="left">
            <div class="leftValueUnit">
                <span class="leftValue">{{ data.labelList[0].value }}</span>
                <span class="leftUnit">{{ data.labelList[0].unit }}</span>
            </div>
            <div class="leftPercent">
<!--                <span>同比：</span>-->
<!--                <upOrDown :data="percent"></upOrDown>-->
            </div>
            <div class="leftName">{{ data.labelList[0].name }}</div>
        </div>
        <div class="right">
            <div
                    class="rightItem"
                    v-for="(item, index) in data.labelList[0].describe"
                    :key="index"
            >
                <div class="rightName">{{ item.name }}</div>
                <div class="_rightProgress">
                    <div
                            class="rightProgress"
                            :style="
              `width:${progress(
                item,
                data.labelList[0].describe[0],
                data.labelList[0].describe[1]
              )}`
            "
                    ></div>
                </div>
                <div class="rightValueRate">
                    <div class="rightValueUnit">
                        <span class="rightValue">{{ item.value }}</span>
                        <span class="rightUnit">{{ item.unit }}</span>
                    </div>
                    <div class="rightRate">
                        <span> 占比： {{item.percent}} %</span>

<!--                        <upOrDown :data="item.percent"></upOrDown>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    //import upOrDown from '../../l02-up-or-down'
    export default {
        props: {
            data: {
                type: Object,
                default: () => ({})
            }
        },
        methods:{
            progress(num, num1, num2) {
                //let number = Number(num.value)
                let number1 = Number(num1.value)
                let number2 = Number(num2.value)
                let sum = 0
                let wanNum = 10000
                let yiNum = 100000000
                let num1W = this.trueOrFalse(num1, '万')
                let num2W = this.trueOrFalse(num2, '万')
                let num1Y = this.trueOrFalse(num1, '亿')
                let num2Y = this.trueOrFalse(num2, '亿')
                let res = ''
                if (
                    (!num1Y && !num2Y && (!num1W && !num2W)) ||
                    (num1W && num2W) ||
                    (num1Y && num2Y)
                ) {
                    sum = number1 + number2
                } else {
                    if (num1Y) {
                        number1 *= yiNum
                    } else if (num1W) {
                        number1 *= wanNum
                    }
                    if (num2Y) {
                        number2 *= yiNum
                    } else if (num2W) {
                        number2 *= wanNum
                    }
                    sum = number1 + number2
                }
                if (sum != 0) {
                    if (num.name == num1.name) {
                        res = (number1 / sum) * 100
                    } else {
                        res = (number2 / sum) * 100
                    }
                } else {
                    res = 0
                }
                return `${res}%`
            },
            trueOrFalse(item, unit) {
                return item.unit.indexOf(unit) != -1 ? true : false
            },
            setData(){
                let newpercent = 0
                newpercent=this.data.labelList[0].percent
                this.percent = newpercent
            }
        },
        components:{

        },
        mounted(): void {

        },
        data(){
            return{
                percent : this.data.labelList[0].percent
            }
        },
        watch: {
            data: {
                // eslint-disable-next-line no-unused-vars
                handler: function (val, oldVal) {
                    this.setData()
                },
                deep: true,
            },
        }
    }
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 1.5;
        ul{
            list-style: none;
        }
        div{
            box-sizing: border-box;
        }
    }
    .canbaojiaofeiBox {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 52px;
        .left {
            width: 224px;
            height: 162px;
            background: url("../../../../assets/picture/canBaoBg.png") 100% 100% no-repeat;
            .leftValueUnit,
            .leftPercent,
            .leftName {
                margin-left: 12px;
                justify-content: center;
                display: flex;
                align-items: center;
            }
            .leftValueUnit {
                padding-top: 28px;
                color: #bbf4ff;
                align-items: baseline;
                .leftValue,
                .leftUnit {
                    margin-left: 3px;
                    color: #87e7ff;
                    // @linear();
                }
                .leftValue {
                    font-size: 20px;
                    line-height: 28px;
                }
                .leftUnit {
                    font-size: 14px;
                    line-height: 20px;
                }
            }
            .leftPercent {
                height: 14px;
                font-size: 12px;
                span:nth-child(1) {
                    color: #fff;
                }
            }
            .leftName {
                font-size: 16px;
                color: #ffffff;
                margin-top: 39px;
            }
        }
        .right {
            .rightItem {
                width: 400px;
                position: relative;
                margin-bottom: 16px;
            }
            .rightValueUnit {
                display: inline-block;
            }
            .rightName {
                font-size: 14px;
                color: #f9f9f9;
            }
            ._rightProgress {
                margin: 4px 0;
                width: 100%;
                background: rgba(12, 33, 61, 0.5);
                border-radius: 6px;
                height: 10px;
            }
            .rightProgress {
                width: 284px;
                height: 10px;
                background: linear-gradient(270deg, #78dcff 0%, #3f8cec 100%);
                border-radius: 100px;
            }
            .rightValueUnit {
                color: #87e7ff;
                width: 293px;
                display: flex;
                align-items: baseline;
                .rightValue {
                    font-size: 20px;
                    line-height: 28px;
                    font-weight: 500;
                    // @linear();
                }
                .rightUnit {
                    font-size: 14px;
                    margin-left: 3px;
                    // @linear();
                }
            }
            .rightRate {
                font-size: 12px;
                width: 115px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                color: #fff;
            }
            .rightValueRate {
                display: flex;
                align-items: center;
            }
        }
    }
</style>
