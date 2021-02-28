<template>
    <span :class="[viewData.class ]">
        {{viewData.value}}{{viewData.unit}}
    </span>
</template>

<script>
    export default {
        props:{
            data:{
                type:Number,
                default:0
            }
        },
        data(){
            return{
                viewData:{

                }
            }
        },
        methods:{
            ifNumber(){
                let styleData = {
                    value: this.data,
                    unit: '%',
                    class: ''
                }

                if(this.data>0){
                    styleData.value = '+'+styleData.value
                    styleData.class = 'up'
                }
                if(this.data<0){
                    styleData.class = 'down'
                }
                if(this.data==0){
                    styleData.class = 'zero'
                }
                this.viewData = styleData
            }
        },
        mounted(): void {
            this.ifNumber()
        },
        watch: {
            data: {
                // eslint-disable-next-line no-unused-vars
                handler: function (val, oldVal) {
                    this.ifNumber()
                },
                deep: true,
            },
        }
    }
</script>

<style scoped lang="scss">
.upOrDown{
    width: 100%;
    height: 100%;
}
    .up{
        color: #ff5154;
        font-size: 14px;
        font-weight: 700;
    }
    .down{
        color: #03ff26;
        font-size: 14px;
        font-weight: 700;
    }
    .zero{
        color: #f0faff;
        font-size: 14px;
        font-weight: 700;
    }
</style>