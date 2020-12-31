<template>
  <div class="return-header">
    <van-nav-bar @click-left="$router.back()" :fixed="false" :border="false">
      <div class="left u-flex" slot="left">
        <van-icon name="arrow-left" color="#FFF" />
        <span class="u-m-l-4 u-font-8">歌单</span>
      </div>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "return-header"
};
</script>

<style lang="scss">
.return-header {
  .van-nav-bar {
    background-color: transparent;
    .left {
      color: #ffffff;
      font-size: 1rem;
      line-height: 1rem;
    }
  }
}
</style>
