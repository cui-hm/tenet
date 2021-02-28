<template>
    <div class="jingbanyewuBox">
        <yeWuJingBanBoxTitle :title="titleValue" :isdialog="true"></yeWuJingBanBoxTitle>
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
                    <span> 增长率：</span>
                    <upOrDown :data="item.PERCENT">
                    </upOrDown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import upOrDown from '../l01-up-or-down'
    import yeWuJingBanBoxTitle from '../yeWuJingBanBoxTitle.vue'
    import defaultData from '@/components/Data/l01-YeWuZongTi/jingBanYeWu/index'
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
                labelList:defaultData
            }
        },
        methods: {
            setData(data) {
                this.labelList = data
            }
        },
      mounted(){
        this.setData(this.labelList)
      },
        components: { yeWuJingBanBoxTitle ,upOrDown}
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
                //margin-left: 98px;
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
            //padding-left: 16px;
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
