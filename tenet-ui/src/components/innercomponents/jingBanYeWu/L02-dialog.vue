<template>
    <div class="count-up-div">
        <div class="iconStyle" @click="dialogVisible = true">
<!--            <span class="icon-details" v-bind:class="fontClass" @click="dialogVisible = true"></span>-->
            <span @click="dialogVisible = true" class="detail"> 更多详情 </span>
        </div>
        <div v-if="dialogVisible">
            <el-dialog :title="title.text"
                       :visible.sync="dialogVisible"
                       :modal = 'modal'
                       :append-to-body = true
                       width="80%"
                       :before-close="handleClose"
                       :fullscreen="fullscreen.falg">
                <component :is="chart.componentName"
                           v-bind="chart"
                >
                    <!--      <dashboard-display></dashboard-display>-->
                </component>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import DeletePanel from '@/component/panel-content/widget/delete-panel'
    import '@/style/element-variables-dialog.scss'
    //import '../../style/element-variables-dialog.scss'
    import '@/style/element-ui/detail-dialog.scss'
    import { mapGetters } from 'vuex'
    import {
        chartComponentLoader,
        dataStatusMaskComponentLoader
    } from '@/util/webpack-loader/component-loader'
    //import dashboardDisplay from '../../module/dashboard-display/dashboard-display'
    export default {
        props:{
            fullscreen:{
                type: Object,
                default: () => ({
                    falg:false
                })
            },
            panelId: {
                type: Number,
                default: null
            },
            modal:{
                type: Boolean,
                default:true

            },
            title: {
                type: Object,
                default: () => ({})
            },
            chart: {
                type: Object,
                default: () => ({
                    componentName: ''
                })
            },
            dialogShow:{
                type: Object,
                default: () => ({
                    test: ''
                })
            }
            // editable:{
            //   type: Boolean,
            //   default:true
            // }
        },
        components:{
            ...chartComponentLoader.getComponentMap(),
            ...dataStatusMaskComponentLoader.getComponentMap(),
            // dashboardDisplay,
            DeletePanel
        },
        computed:{
            ...mapGetters('dashboard', [
                'editable'

            ]),
        },
        data() {
            return {
                fontClass:'',
                dialogVisible:false
                // componentsName:'echartsPie'
            }
        },
        methods: {
            handleClose(done) {
                done()
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '~@/style/variables/z-index.scss';
    .count-up-div{
        padding-right: 10px;

        .iconStyle{
            float: right;
            padding-top: 5px;
            &:hover{
                cursor:pointer;
            }
            .detail {
                font-size: 16px;
                color: #53e2ff;
                &:hover{
                    cursor: pointer;
                    color: #04c6d3;
                }
            }
        }
    }

    ::v-deep .el-dialog {
        text-align:center;
    }
    ::v-deep .el-dialog__title {
        line-height: 24px;
        font-size: 30px;
        /*color: #f0f5ff;*/
        text-align:center;
    }
    ::v-deep .el-range-input{
        //background-color: rgba(22,72,154,.24);
        background-color: transparent;
    }
    ::v-deep .el-dialog{
        background-image: url("~@/assets/panel-border/dialogbg.png");
        background-size:100% 100%;
        opacity:0.98;
    }
    ::v-deep .el-button--primary{
        color: #56f3ff;
    }
    ::v-deep .el-select-dropdown{
        background-color: #2c4f86;
    }
    .delete-panel {
        position: absolute;
        left: 4px;
        top: 4px;
        width: 24px;
        height: 24px;
        z-index: $--bs-z-index-panel-widget;
    }
    .id-container {
        position: absolute;
        left: 30px;
        top: 4px;
        background-color: #fff;
        color: #000;
        font-size: 12px;
        padding: 4px;
        z-index: $--bs-z-index-panel-widget;
    }


</style>