<template>
  <div class="list-panel">
    <!-- 背景板 -->
    <div
      class="image-background"
      :style="{
        backgroundImage: `url(${songlist.coverImgUrl || songlist.picUrl})`
      }"
    />
    <!-- 歌单信息 -->
    <div
      class="list-summary u-flex-col u-row-around u-col-center"
      style="padding: 0 1rem"
    >
      <!-- 图片 -->
      <van-image
        class="image-cover"
        :src="songlist.coverImgUrl || songlist.picUrl"
        width="30%"
        radius="10"
      ></van-image>
      <!-- 歌单名 -->
      <div
        class="title u-font-10 u-line-2"
        style="color: #eee; font-weight: bold"
      >
        {{ songlist.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-panel",
  props: {
    songlist: Object
  }
};
</script>

<style lang="scss">
.list-panel {
  $height: 16rem;
  $diff-height: 3rem;

  .image-background {
    z-index: -1;

    position: absolute;
    top: 0;
    width: 100%;
    height: $height;

    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 30000%;
    background-position: bottom right;
    background-color: #000;
    filter: grayscale(80%);
  }
  .list-summary {
    height: $height - $diff-height;
    padding: 1rem;
  }
}
</style>
