<!--
 * @FileDescription: 用于对话框常见组件 一到两个输入框 带日期查询 和一个表
 * @Author: 开发三崔洪铭
 * @Date: 20200828
 * @LastEditors:
 * @LastEditTime:
 -->
<template>
  <div class="dialogCommonComponentBox">
    <div class="dialogCommonComponentBoxTop">
      <div class="left">
       <!--循环根据父组件传的值控制select数量-->
       <div class="DropDownBox">
        <div class="DropDownBoxSelect" v-for="(item,index) in SelectConfig" :key="index">
          <span>{{item.test}}</span>
          <hsa-selects
                  :query="item.query"
                  :queryParameterKey="item.queryParameterKey"
                  :isregionName = 'item.isregionName'
                  :pushName = 'item.pushName'
          ></hsa-selects>
        </div>
      </div>
       <div class="DateBox" v-if="DatePicherConfig.showDatePicher">
        <hsa-date-picher
        :DatePicherConfig="DatePicherConfig"></hsa-date-picher>
       </div>
      </div>
      <div class="right">
        <el-button size="small" @click="restartQuery()">查 询</el-button>
       </div>
   </div>
    <div class="dialogCommonComponentBoxMainBox">
        <div class="left">
      <el-table
              :data="showData.slice((currpage - 1) * pagesize, currpage * pagesize)"
              style="width: 100%"
              :default-sort = "{prop: 'date', order: 'descending'}"
              :header-cell-style="{background:'rgba(9, 155, 199, 0.3)'}"
      >
        <el-table-column v-for="(item,index) in tableColumnList1" :prop="item.column" :label="item.name" :key="index"  sortable show-overflow-tooltip align="center"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
                class = "el-pagination"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currpage"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pagesize"
                layout="total,  prev, pager, next, sizes,jumper"
                :total="showData.length">
        </el-pagination>
      </div>
        </div>
        <div class="right">
            <el-table
                    :data="showData2.slice((currpage2 - 1) * pagesize2, currpage2 * pagesize2)"
                    style="width: 100%"
                    :default-sort = "{prop: 'date', order: 'descending'}"
                    :header-cell-style="{background:'rgba(9, 155, 199, 0.3)'}"
            >
                <el-table-column v-for="(item,index) in tableColumnList2" :prop="item.column" :label="item.name" :key="index"  sortable show-overflow-tooltip align="center"></el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                        class = "el-pagination"
                        @size-change="handleSizeChange2"
                        @current-change="handleCurrentChange2"
                        :current-page="currpage2"
                        :page-sizes="[10, 20, 50, 100]"
                        :page-size="pagesize2"
                        layout="total,  prev, pager, next, sizes,jumper"
                        :total="showData2.length">
                </el-pagination>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { query } from '@/service/monitor/query'
  import hsaSelects from '../../../hsa-selects'
  import hsaDatePicher from '../../../hsa-date-picher'
  import { mapGetters } from 'vuex'
  export default {
    components:{
      hsaSelects,
      hsaDatePicher
    },
    props: {
      query: {
        type: Object,
        default: () => ({
          queryId: null,
          interval: Infinity
        })
      },
        query2: {
            type: Object,
            default: () => ({
                queryId: null,
                interval: Infinity
            })
        },
      queryParameterKey: {
        type: String,
        default: null
      },
      //用来接收父组件传来 select选择器的数量 和值
      SelectConfig: {
        type: Array,
        default: () => [
          {
            query: null,
            test:null,
            isregionName:false,
            pushName:null
          }
        ]
      },
      //是否显示日期选择器
      DatePicherConfig:{
        type: Object,
        default: () => ({
          showDatePicher: true,
          queryParameterKey1: null,
          queryParameterKey2: null
        })
      },
      //表格的参数
      tableColumnList1: {
        type: Array,
        default: () => [
          { name: '', column: '' }
        ]
      },
        tableColumnList2: {
            type: Array,
            default: () => [
                { name: '', column: '' }
            ]
        },
    },
    data(){
      return{
        showData:[],
        pagesize:10,
        currpage: 1,
          currpage2:1,
          pagesize2:10,
          showData2:[]
      }
    },
    methods:{
      handleSizeChange(val) {
        this.pagesize = val
      },
      handleCurrentChange(val) {
        this.currpage = val
      },
        handleSizeChange2(val) {
            this.pagesize2 = val
        },
        handleCurrentChange2(val) {
            this.currpage2 = val
        },
      setData(data) {
        this.showData = data
        for(let i =0 ;i< data.length;i++){
          this.showData[i].index = i+1
        }
      },
        setData2(data) {
            this.showData2 = data
            for(let i =0 ;i< data.length;i++){
                this.showData2[i].index = i+1
            }
        },
      async queryData() {
        let data
        if(this.query.queryId != null) {
          this.$emit('data-status-change', { type: 'loading' })
          try {
            data = await query(this.query.queryId, this.queryParameters)
          } catch (message) {
            this.$emit('data-status-change', { type: 'failed', message })
          }
          if(data!=null) {
            this.$emit('data-status-change', {type: 'success'})
            this.setData(data)

          }
        } else {
          this.$message.error('数据获取错误')
        }
      },
        async queryData2() {
            let data
            if(this.query2.queryId != null) {
                this.$emit('data-status-change', { type: 'loading' })
                try {
                    data = await query(this.query2.queryId, this.queryParameters)
                } catch (message) {
                    this.$emit('data-status-change', { type: 'failed', message })
                }
                if(data!=null) {
                    this.$emit('data-status-change', {type: 'success'})
                    this.setData2(data)
                }
            } else {
                this.$message.error('数据获取错误')
            }
        },
      restartQuery() {
        if (this.queryInterval) {
          clearInterval(this.queryInterval)
        }
        this.queryData()
          this.queryData2()
        if (this.query.queryId != null) {
          this.queryInterval = setInterval(this.queryData, this.query.interval)
        }
      }
    },
    computed: {
      ...mapGetters('dashboard', ['queryParameters'])
    },
    mounted() {
      this.restartQuery()
    },

  }
</script>

<style scoped lang="scss">
  .dialogCommonComponentBoxTop{
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      .DropDownBox{
        display: flex;
        .DropDownBoxSelect{
            display: flex;
            align-items:center;
            span{
              padding: 0px 10px 0px 20px;
            }
          }
      }
      .DateBox{
        padding-left: 10px;
      }
    }
  }
  .dialogCommonComponentBoxMainBox{
      display: flex;
      justify-content: space-between;
      margin-top: 49px;
      .left{
          width: 48%;
      }.right{
      margin-left: 30px;
      width: 50%;
             }
  }
</style>