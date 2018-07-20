<template>
  <!--:style="style.commonSearchItem"-->
  <div class="common-search-item"  :style="style.commonSearchItem">

    <!--{{style.commonSearchItem}}-->
    <!--{{style.searchItemLabel}}-->
    <!--{{style.searchItemOption}}-->
    <div class="search-item-label" :style="style.searchItemLabel">{{ label }}</div>
    <div class="search-item-option" :style="style.searchItemOption">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonSearchItem",
    props: {
      label: String,
      labelWidth: {
        type: String,
        default: '80px'
      },
      optionWidth: {
        type: String,
        default: '180px'
      }
    },
    provide() {
      return {
        commonSearch: this,
        elFormItem: this
      }
    },
    inject: ['commonSearch'],
    data() {
      return {
        style: {
          commonSearchItem: {},
          searchItemLabel: {
            width: this.labelWidth
          },
          searchItemOption: {
            width: this.optionWidth
          }
        }
      }
    },
    watch: {
      containerShrinkStatus: function () {
        this.setItemWidth()
      }
    },
    computed: {
      elFormItemSize() {
        return this.commonSearch.optionSize
      },
      containerShrinkStatus () {
        return this.$store.state.containerShrinkStatus
      },
      containerStyle () {
        return this.$store.state.containerStyle
      }
    },
    created() {
      this.setItemWidth()
    },
    methods: {
      setItemWidth() {
        // let mergeWidth = this.style.searchItemLabel.width + this.style.searchItemOption.width
        let mergeWidth = 220
        let size = Math.floor(this.containerStyle.width / mergeWidth)
        this.style.commonSearchItem = {
          width: this.containerStyle.width / size + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .common-search-item {
    display: flex;
    justify-content: center;
    align-items: center;
    .search-item-label {
      text-align: right;
      margin-right: 15px;
    }
  }
</style>
