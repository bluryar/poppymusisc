<template>
  <div id="main-header" class="u-flex u-font-sm u-col-center u-row-between">
    <!-- 本地信息 -->
    <van-icon name="orders-o" size="1.5rem" class="u-m-l-5" />
    <h1 class="title">Poppy's Music</h1>
    <!-- 搜索按钮 -->
    <van-icon name="search" size="1.5rem" class="u-m-r-5" />
  </div>
</template>

<script>
export default {
  name: "main-header"
};
</script>

<style lang="scss">
#main-header {
  height: 3rem;
  background-color: $u-color-bg-main;
  color: #eee;
  .title {
    font-family: "Alibaba-PuHuiTi-Regular";
  }
}
</style>
