<template>
  <div id="Container">
    <div class="container" :style="containerStyle">
      <div class="container-title" :style="containerStyle">
        <div class="title-font" v-if="!containerShrinkStatus">
          <span class="abbreviation">GIS</span>
          <span class="description">可视化系统</span>
        </div>
        <div class="title-font-shrink" v-else>
          <span class="abbreviation">GIS</span>
        </div>
      </div>
      <div class="container-list">
        <el-menu
          :collapse="containerShrinkStatus"
          default-active="1"
          :router="true"
          background-color="#00142a"
          text-color="#fff"
          active-text-color="#6d40ff">
          <el-menu-item index="1" :route="{path: '/run-catalog-mange'}">
            <i class="el-icon-menu"></i>
            <span slot="title">文件上传demo</span>
          </el-menu-item>
          <el-menu-item index="2" :route="{path: '/run-script-mange'}">
            <i class="el-icon-menu"></i>
            <span slot="title">运行脚本管理</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {

    }
  },
  computed: {
    containerShrinkStatus () {
      return this.$store.state.containerShrinkStatus
    },
    containerStyle() {
      if (!this.containerShrinkStatus) {
        return {
          width: '230px'
        }
      } else {
        return {
          width: '64px'
        }
      }
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  #Container {
    height: 100%;
    .container {
      /*width: 230px;*/
      height: 100%;
      background-color: #00142a;
      transition: .5s width;
      .container-title {
        /*width: 230px;*/
        height: 64px;
        background-color: #002140;
        transition: .5s width;
        .title-font {
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .abbreviation {
            font-size: 40px;
            color: #6d40ff;
            margin-left: 30px;
          }
          .description {
            color: #fdfdfd;
            margin-right: 40px;
          }
        }
        .title-font-shrink {
          width: 64px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .abbreviation {
            font-size: 32px;
            color: #6d40ff;
          }
        }
      }
      .container-list {
        .el-menu {
           border-right: 0!important;
        }
      }
    }
  }
</style>
