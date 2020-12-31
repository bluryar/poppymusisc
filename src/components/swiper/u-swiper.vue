<template>
  <div class="swiper u-m-t-5">
    <van-swipe autoplay="5000" indicator-color="#ee2e2e">
      <van-swipe-item v-for="bannerObj in bannerList" :key="bannerObj.bannerId">
        <div class="u-relative">
          <van-image
            :src="bannerObj.pic"
            fit="fill"
            :radius="10"
            lazy-load
            @click="onClickBanner(bannerObj)"
          />
          <van-tag
            round
            :type="bannerObj.titleColor | tagColor"
            class="my-tag"
            >{{ bannerObj.typeTitle }}</van-tag
          >
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "u-swiper",
  props: {
    bannerList: Array
  },
  filters: {
    /** 获取颜色对应的tag类型字符串 */
    tagColor(val) {
      if (val === "red") return "danger";
      else if (val === "yellow") return "warning";
      else if (val === "green") return "success";
      else return "primary";
    }
  },
  methods: {
    /** @description 处理轮播图的点击效果 */
    onClickBanner(bannerObj) {
      if (bannerObj.url) {
        window.open(bannerObj.url);
      } else {
        this.$toast.fail("暂未实现直接播放功能");
      }
    }
  }
};
</script>

<style lang="scss">
.swiper {
  // 因为其他元素padding的影响，重新定位轮播图指示器
  .van-swipe__indicators {
    position: absolute;
  }
  // 定位tag
  .my-tag {
    position: absolute;
    bottom: 0.25rem;
    right: 0rem;
  }
}
</style>
