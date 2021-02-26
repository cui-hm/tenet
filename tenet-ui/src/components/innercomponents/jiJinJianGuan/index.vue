<template>
    <div>
        <yeWuJingBanBoxTitle :title="'基金监管'" />
        <ul class="list">
            <li
                    v-for="(item, k) in realData"
                    :class="item.UNIT == '%' ? 'persent' : ''"
                    :key="k"
            >
                <h3>{{ item.NAME }}</h3>
                <p v-if="item.UNIT == '%'">{{ item.VALUE }}{{ item.UNIT }}</p>
                <!-- <p v-if="item.unit != '%'">{{ (item.value - 0).toLocaleString() }}</p> -->
                <p v-if="item.UNIT != '%'">{{ item.VALUE }}</p>
                <h3 v-if="item.UNIT != '%'">{{ item.UNIT }}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
    import { query } from '../query'
    import yeWuJingBanBoxTitle from '../canBaoJiaoFei/yeWuJingBanBoxTitle.vue'
    const defaultData = {
        labelList: [
                    { NAME: '违规机构数', VALUE: '0', UNIT: '家' },
                    { NAME: '违规人次', VALUE: '0', UNIT: '人次' },
                    { NAME: '违规金额占基金比例', VALUE: '0', UNIT: '%' },
                    { NAME: '扣款金额', VALUE: '0', UNIT: '元' },
                    { NAME: '违规金额', VALUE: '0', UNIT: '元' },
                    { NAME: '违规人数', VALUE: '0', UNIT: '人' }
        ]
    }

    export default {

        components: { yeWuJingBanBoxTitle },
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
            realData() {
                return this.labelList ? this.labelList : defaultData
            }
        },
        data() {
            return {
                labelList:[]
            }
        },
        inject: ['eventBus'],
        methods:{
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
        beforeDestroy() {
            clearInterval(this.queryInterval)
            this.eventBus.$off('query-data', this.restartQuery)
        }
    }
</script>
<style scoped lang="scss">
    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;

    }
    .list {
        position: relative;
        margin-top: 26px;
        height: 534px;
        background: url("../../../assets/picture/circle.png") no-repeat center 194px;
        li {
            position: absolute;
            box-sizing: border-box;
            width: 182px;
            height: 145px;
            background: url("../../../assets/picture/hexagon.png") no-repeat center center;
            color: #fff;
            text-align: center;
            padding: 36px 0 0;
            h3 {
                font-size: 14px;
                line-height: 20px;
            }
            p {
                margin: 2px 0;
                line-height: 28px;
                font-size: 20px;
            }
            &.persent {
                padding-top: 48px;
            }
            &:nth-child(1) {
                left: 294px;
                top: 0%;
            }
            &:nth-child(2) {
                left: 494px;
                top: 90px;
            }
            &:nth-child(3) {
                left: 494px;
                top: 270px;
            }
            &:nth-child(4) {
                left: 294px;
                top: 360px;
            }
            &:nth-child(5) {
                left: 95px;
                top: 270px;
            }
            &:nth-child(6) {
                left: 95px;
                top: 90px;
            }
        }
    }
</style>
