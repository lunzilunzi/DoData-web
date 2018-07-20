<template>
  <div class="common-search">
    <div class="search-condition-handle">
      <div>搜索条件</div>
      <!-- 查询条件返显 -->
      <div class="search-condition-reappearance"></div>
      <!-- 查询提交 -->
      <div class="search-submit"></div>
    </div>
    <div class="search-all-option">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonSearch",
    props: {
      model: {
        type: Object,
        default: () => {return {}}
      },
      optionSize: {
        type: String,
        default: ''
      },

    },
    provide() {
      return {
        commonSearch: this
      }
    },
    data() {
      return {}
    },
    watch: {
      optionSize: function (optionSize) {
        console.log(optionSize)
        this.$slots.default.forEach(slot => {
          console.log(slot)
          console.log(slot.componentInstance)
          if (slot.componentInstance === undefined) {
            return
          }
          slot.componentOptions.propsData.optionSize = optionSize
          console.log(slot.componentOptions.propsData.label)
        })
      }
    },
    computed: {
    },
    created() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .common-search {
    .search-all-option {
      display: flex;
      /*justify-content: space-around;*/
      justify-content: flex-start;
      align-content: space-between;
      flex-wrap: wrap;
    }
  }
</style>
