<template>
  <div class="player" @click="gotoFullScreen">
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '100%' }"
      closeable
      close-icon-position="top-left"
      @click-close-icon="show = false"
    />
    <van-row gutter="10" style="height: 100%">
      <!-- 封面 -->
      <van-col span="4" style="height: 100%">
        <div
          class="cover u-flex u-row-center u-col-center"
          style="height: 100%"
        >
          <div class="bg-img rotate360 u-flex u-col-center u-row-center">
            <van-image
              :src="
                `http://p1.music.126.net/Hr8sEJzhAKvKo8x56n-Yhw==/109951165525778915.jpg`
              "
              round
            ></van-image>
          </div>
        </div>
      </van-col>
      <!-- 歌曲名 -->
      <van-col span="14" style="height: 100%">
        <div
          style="height: 100%"
          class="name van-ellipsis u-flex u-row-left u-col-center"
        ></div>
      </van-col>
      <!-- 播放进度和播放按钮 -->
      <van-col span="3" style="height: 100%">
        <div
          class="btn-ctrl u-flex u-row-left u-col-center"
          style="height: 100%"
        >
          <van-circle
            v-model="current"
            :rate="100"
            layer-color="#DDD"
            color="#333"
            style="height: 80%; width: 80%"
            class="u-flex u-row-center u-col-center"
          >
            <i class="iconfont icon-bofang u-rela" style="margin-left: 3px"></i>
            <!-- <i class="iconfont icon-zantingtingzhi u-rela"></i> -->
          </van-circle>
        </div>
      </van-col>
      <!-- 歌单按钮 -->
      <van-col span="3" style="height: 100%">
        <div
          class="btn-playlist u-flex u-row-center u-col-center"
          style="height: 100%"
        >
          <van-icon
            name="gedan"
            class-prefix="icon"
            class="iconfont"
            size="1.6rem"
          ></van-icon>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "music-player",
  data() {
    return {
      current: 0,
      show: false
    };
  },
  methods: {
    gotoFullScreen() {
      console.log(this.show);
      this.show = true;
    }
  },
  mounted() {
    this.current = 0;
  }
};
</script>

<style lang="scss">
div.player {
  height: 100%;
  overflow: hidden;
}

.rotate360 {
  // 无限次滚动
  animation-name: rotate360;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.bg-img {
  $bg-height: 3rem;
  height: $bg-height;
  width: $bg-height;
  background-image: url(../../assets/songdisk.svg);
  background-position: center;
  background-size: $bg-height;
  background-repeat: round;

  .van-image {
    $inner-height: 1.6rem;
    height: $inner-height;
    width: $inner-height;
  }
}

// 动画帧，选择360deg
@keyframes rotate360 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
