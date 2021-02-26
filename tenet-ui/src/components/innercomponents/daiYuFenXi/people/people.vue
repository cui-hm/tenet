<template>
    <div class="peopleBox">
        <div
                class="peopleBoxContent"
                v-for="(item, index) in data.labelList[0].describe"
                :key="index"
        >
            <div class="top">
        <span>{{ item.value }}</span
        ><span>{{ item.unit }}</span>
            </div>
            <div class="middle">
                <span>同比：</span>
                <upOrDown :data="item.percent">
        </upOrDown>
            </div>
            <div class="bottom">{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
    import upOrDown from '../../canBaoJiaoFei/l02-up-or-down'
    export default {
        components:{
            upOrDown
        },
        data() {
            return {}
        },
        props: {
            data: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .peopleBox {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 30px;
        margin-top: 20px;
        .peopleBoxContent {
            width: 215px;
            background: url('../../../../assets/picture/bg4.png') no-repeat;
            .top,
            .middle,
            .bottom {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .top {
                padding-top: 17px;
                align-items: baseline;
                span:nth-child(1) {
                    font-size: 21px;
                    // @linear();
                    color: #87e7ff;
                }
                span:nth-child(2) {
                    font-size: 14px;
                    color: #87e7ff;
                    vertical-align: bottom;
                    margin-left: 3px;
                }
            }
            .middle {
                font-size: 12px;
                display: flex;
                align-items: center;
                height: 20px;
                flex-basis: 214px;
                span:nth-child(1) {
                    color: #fff;
                }
            }
            .bottom {
                margin-top: 63px;
                font-size: 14px;
                color: #ffffff;
            }
        }
    }
</style>
