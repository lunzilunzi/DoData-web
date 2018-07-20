<template>
  <div id="Home">
    <div class="container" :style="containerStyle">
      <container></container>
    </div>
    <div class="control-panel" :style="controlPanelStyle">
      <div class="navigate">
        <navigate></navigate>
      </div>
      <div class="operating-floor" ref="operatingFloorScroll">
        <!--<div class="operating-floor-scrollbar">-->
          <router-view></router-view>
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Container from 'src/components/Container.vue'
  import Navigate from 'src/components/Navigate.vue'

  import BScroll from 'better-scroll'

  export default {
    name: 'Home',
    components: {
      Container,
      Navigate,
    },
    data() {
      return {
        operatingFloorScroll: null
      }
    },
    computed: {
      containerShrinkStatus() {
        return this.$store.state.containerShrinkStatus
      },
      containerStyle() {
        if (!this.containerShrinkStatus) {
          return {
            width: '230px'
            // width: '0'
          }
        } else {
          return {
            width: '64px'
            // width: '0'
          }
        }
      },
      controlPanelStyle() {
        if (!this.containerShrinkStatus) {
          return {
            // width: 'calc(100% - 230px)'
            width: '100%'
          }
        } else {
          return {
            // width: 'calc(100% - 64px)'
            width: '100%'
          }
        }
      }
    },
    created() {
      // 初始化 操作面板的滚动条
      this.$nextTick(() => {
        this.operatingFloorScroll = new BScroll(
          this.$refs.operatingFloorScroll, {
            // 开启鼠标滚轮滚动
            mouseWheel: {
              speed: 20,
              invert: false,
              easeTime: 300
            },
            scrollbar: {
              fade: true,
              // interactive: true,
              // deep: true
            }
          })
      })
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  #Home {
    height: 100%;
    display: flex;
    flex-direction: row;
    .container {
      width: 230px;
      height: 100%;
      transition: .5s width;
    }
    .control-panel {
      width: calc(100% - 230px);
      height: 100%;
      .navigate {
        height: 60px;
      }
      .operating-floor {
        /*display: flex;*/
        /*justify-content: center;*/
        overflow: hidden;
        width: 100%;
        height: calc(100% - 30px - 30px);
        .operating-floor-scrollbar {
          width: 100%;
        }
      }
    }
  }
</style>
