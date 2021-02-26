<template>
    <!-- 副标题 -->
    <div class="generalManager_subTitle">
        <div class="subTitle_react"></div>
        <div class="generalManager_subTitle_content">
            {{ subTitle }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            subTitle: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    .generalManager_subTitle {
        height: 40px;
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #04c1ff;
        margin-left: 10px;
        .subTitle_react {
            width: 4px;
            height: 12px;
            margin-right: 10px;
            background: #04c1ff;
        }
        .generalManager_subTitle_content {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 18px;
            width: 100%;
            margin-right: 8px;
            height: 100%;
            line-height: 40px;
        }
    }
</style>
