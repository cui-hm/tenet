<template>
  <div>
    <div :class="!visible ? 'hide scroller' : 'scroller'">
      <ul :class="boxClass">
        <li
                v-for="(item, k) in contentView"
                :key="k"
                :class="getClass(k)"
                @click="viewClick(k)"
        >
          <div class="inner">
            <component
                    :is="item.component"
                    :query="item.query"
            />
          </div>
        </li>
      </ul>
    </div>
    <ul :class="!visible ? 'hide ctrlbar' : 'ctrlbar'">
      <li
              v-for="(item, id) in content"
              :class="currentCtrl(item)"
              :key="id"
              @click="viewClick(id + content.length)"
      >
        <div :class="'icon ' + item.icon">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
   import Canbaojiaofei from  './InnerComponent/canBaoJiaoFei/index'
   import Daiyufenxi from  './InnerComponent/daiYuFenXi/index'
   import Yidijiuyi from  './InnerComponent/yiDiJiuYi/index'
   import Jinbanyewu from  './InnerComponent/jingBanYeWu/index'
   import Jijinjianguan from  './InnerComponent/jiJinJianGuan/index'
  // import zongHwGuiYuan from  './InnerComponent/jingBanYeWu/zongHeGuiYuan/index'
  // import liangDing from  './InnerComponent/jingBanYeWu/liangDing/index'
  export default {
    name: 'YeWuZongTi',
    props:{
      content: {
        type:Array,
        default:()=>([
          {
            name: '异地就医',
            icon: 'icon-ydjy',
            component: 'Yidijiuyi',
            query:{
              queryId: null,
              interval: Infinity
            }
           },
          {
            name: '待遇保障',
            icon: 'icon-dyfx',
            component: 'Daiyufenxi',
            query:{
              queryId: null,
              interval: Infinity
            }
          },
          {
            name: '业务经办',
            icon: 'icon-jbyw',
            component: 'Jinbanyewu',
            query:{
              queryId: null,
              interval: Infinity
            }
          },
          {
            name: '参保缴费',
            icon: 'icon-cbjf',
            component: 'Canbaojiaofei',
            query:{
              queryId: null,
              interval: Infinity
            }
          },
          {
            name: '基金监管',
            icon: 'icon-jgjg',
            component: 'Jijinjianguan',
            query:{
              queryId: null,
              interval: Infinity
            }
          }
        ])
      },

    },
    components: {
       Canbaojiaofei,
       Daiyufenxi,
       Yidijiuyi,
       Jinbanyewu,
       Jijinjianguan,
      // zongHwGuiYuan,
      // liangDing
    },
    data(){
      return{
        index: 5,
        isReset: false,
        scrolling: false,
        auto: null,
        visible: true
      }
    },
    computed:{
      boxClass() {
        const c = ['scrollBox']
        if (this.isReset) {
          c.push('reset')
        }
        return c.join(' ')
      },
      contentView() {
        function buildViewItem(type) {
          return function ({name, component, query}, id) {
            return {
              id,
              type,
              name,
              component,
              query
            }
          }
        }
        const before = this.content.map(buildViewItem('before'))
        const after = this.content.map(buildViewItem('after'))
        const center = this.content.map(buildViewItem('center'))
        let res = [].concat(before, center, after)
        return res
      }
    },
    methods:{
      currentCtrl(item) {
        const cur = this.contentView[this.index]
        return item.component == cur.component ? 'current' : ''
      },
      getClass(id) {
        if (id == this.index) {
          return 'current'
        }
        if (id == this.index - 1) {
          return 'prev'
        }
        if (id < this.index - 1) {
          return 'prev-all'
        }
        if (id == this.index + 1) {
          return 'next'
        }
        if (id > this.index + 1) {
          return 'next-all'
        }
      },
      viewClick(id) {
        this.scrollTo(id)
        this.startAuto()
      },
      startAuto() {
        clearInterval(this.auto)
        this.auto = setInterval(() => {
          this.scrollTo(this.index + 1)
        }, 5 * 1000)
      },
      scrollTo(targetId) {
        if (this.scrolling) return
        let n = targetId
        let max = this.contentView.lengthserve

        if (n >= max) n = max - 1
        if (n < 0) n = 0
        const data = this.contentView[n]
        this.scrolling = true
        this.index = n
        this.currrentIndex = n
        setTimeout(() => {
          if (data.type != 'center') {
            const id = this.contentView.findIndex((item) => {
              return item.type == 'center' && item.id == data.id
            })
            this.isReset = true
            this.$forceUpdate()
            this.index = id
            this.currrentIndex = id
            setTimeout(() => {
              this.isReset = false
              this.$forceUpdate()
              this.scrolling = false
            }, 100)
          } else {
            this.scrolling = false
          }
        }, 500)
      },
    },
    mounted() {
      this.startAuto()
    }
  }
</script>

<style scoped lang="scss">
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    ul{
      list-style: none;
    }
  }
  //控制台
  .ctrlbar {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 1000px;
    padding: 0 0 10px;
    margin: 0 auto 28px;
    background: url('~@/assets/picture/pan.png') center bottom no-repeat;
    li {
      width: 130px;
      height: 100px;
      text-align: center;
      margin: 0 30px;
      cursor: pointer;
      &.current {
        background: url("~@/assets/picture/current.png") center bottom no-repeat;

        div {
          opacity: 1;
          padding-top: 57px;
          &.icon {
            background-position: center 9px;
          }
        }
      }
      div {
        box-sizing: border-box;
        width: 130px;
        height: 96px;
        padding-top: 63px;
        opacity: 0.7;

        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        &.icon-cbjf {
          background: url("~@/assets/picture/icon-cbjf.png") no-repeat center 15px;
        }
        &.icon-ydjy {
          background: url("~@/assets/picture/icon-ydjy.png") no-repeat center 15px;
        }
        &.icon-dyfx {
          background: url("~@/assets/picture/icon-dyfx.png") no-repeat center 15px;
        }
        &.icon-jbyw {
          background: url("~@/assets/picture/icon-jbyw.png") no-repeat center 15px;
        }
        &.icon-jgjg {
          background: url("~@/assets/picture/icon-jgjg.png") no-repeat center 15px;
        }
      }
    }
  }

  .scroller {
    margin-top: 20px;
    margin-bottom: 55px;
    position: relative;
    box-sizing: content-box;
    padding: 3px 0;
    perspective: 1500px;
  }
  .scrollBox {
    height: 620px;
    transform-style: 3d;
  }
  .scroller::before,
  .scroller::after,
  .scrollBox::before,
  .scrollBox::after {
    content: " ";
    display: block;
    width: 566px;
    height: 77px;
    position: absolute;
    background: url(~@/assets/picture/top-left.png) no-repeat;
  }
  .scroller::before {
    left: 0;
    top: -70px;
  }
  .scroller::after {
    right: 0;
    top: -70px;
    transform: scaleX(-1);
  }
  .scrollBox::before {
    left: 0;
    bottom: -70px;
    transform: scaleY(-1);
  }
  .scrollBox::after {
    right: 0;
    bottom: -70px;
    transform: scaleY(-1) scaleX(-1);
  }
  .scrollBox li {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 768px;
    height: 620px;
    margin: -310px 0 0 -384px;
    border: 1px solid #308bcf;
    box-shadow: inset 0 2px 11px 0 #8bfffd;
    -ms-transform-origin: 50% 50% 900px;
    transform-origin: 50% 50% 900px;

    // background: #fff;
    -ms-transition: transform 0.5s, opacity 0.5s;
    transition: transform 0.5s, opacity 0.5s;
  }
  .scrollBox.reset li {
    -ms-transition: none;
    transition: none;
  }
  .scrollBox li.current {
    -ms-transform: translateZ(0px) translateX(0px) rotateY(0deg) scale(1, 1);
    transform: translateZ(0px) translateX(0px) rotateY(0deg) scale(1, 1);
  }
  .scrollBox li.prev {
    -ms-transform: translateZ(-220px) translateX(-70px) rotateY(40deg) scale(0.66, 1);
    transform: translateZ(-220px) translateX(-70px) rotateY(40deg) scale(0.66, 1);
    opacity: 0.7;
  }
  .scrollBox li.prev-all {
    -ms-transform: translateZ(-220px) translateX(-70px) rotateY(100deg) scale(0.66, 1);
    transform: translateZ(-220px) translateX(-70px) rotateY(100deg) scale(0.66, 1);
    opacity: 0.7;
  }
  .scrollBox li.next {
    -ms-transform: translateZ(-220px) translateX(70px) rotateY(-40deg) scale(0.66, 1);
    transform: translateZ(-220px) translateX(70px) rotateY(-40deg) scale(0.66, 1);
    opacity: 0.7;
  }
  .scrollBox li.next-all {
    -ms-transform: translateZ(-220px) translateX(70px) rotateY(-100deg) scale(0.66, 1);
    transform: translateZ(-220px) translateX(70px) rotateY(-100deg) scale(0.66, 1);
    opacity: 0.7;
  }

  .scrollBox li::before,
  .scrollBox li::after,
  .scrollBox li .inner::before,
  .scrollBox li .inner::after {
    content: " ";
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    overflow: hidden;
    border: 3px solid rgba(0, 198, 255, 1);
  }
  .scrollBox li::before {
    left: 0;
    top: 0;
    border-right: none;
    border-bottom: none;
  }
  .scrollBox li::after {
    right: 0;
    top: 0;
    border-left: none;
    border-bottom: none;
  }
  .scrollBox li .inner::before {
    left: 0;
    bottom: 0;
    border-top: none;
    border-right: none;
  }
  .scrollBox li .inner::after {
    right: 0;
    bottom: 0;
    border-top: none;
    border-left: none;
  }


</style>