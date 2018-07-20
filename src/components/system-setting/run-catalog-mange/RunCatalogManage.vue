<template>
  <div id="RunCatalogManage">
    <search optionSize="mini">
      <SearchItem label="名字">
        <el-input v-model="model1"></el-input>
      </SearchItem>
      <SearchItem label="年龄">
        <el-input v-model="model2"></el-input>
      </SearchItem>
      <SearchItem label="大小">
        <el-input v-model="model2"></el-input>
      </SearchItem>
      <SearchItem label="朋友">
        <el-input v-model="model2"></el-input>
      </SearchItem>
      <SearchItem label="朋友">
        <el-input v-model="model2"></el-input>
      </SearchItem>
      <SearchItem label="朋友">
        <el-input v-model="model2"></el-input>
      </SearchItem>
    </search>
  </div>
</template>

<script>
  import Search from 'src/components/common/Search.vue'
  import SearchItem from 'src/components/common/SearchItem.vue'

  export default {
    name: "RunCatalogManage",
    components: {
      Search,
      SearchItem
    },
    data() {
      return {
        model1: '',
        model2: '',
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  #RunCatalogManage {
    width: 100%;
  }
</style>
