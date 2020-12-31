<template>
  <div id="recommend">
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
      <!-- 轮播图 -->
      <u-swiper :banner-list="bannerList" />

      <!-- 推荐歌单列表 -->
      <div class="songlist u-m-5">
        <h3 class="u-font-alibaba">推荐歌单</h3>
        <u-grid
          :col="3"
          :list="songlist"
          :is-loading="songlistLoading"
          :is-top-tag="true"
          :is-bot-tag="false"
          :is-sub-title="false"
          :route-type="'songlist'"
        ></u-grid>
      </div>

      <!-- 最新音乐列表 -->
      <div class="latest-song u-m-5">
        <h3 class="u-font-alibaba">最新音乐</h3>
        <u-grid
          :col="4"
          :list="newSongArray"
          :is-loading="newSongArrayLoading"
          :is-top-tag="false"
          :is-bot-tag="true"
          :is-sub-title="true"
        ></u-grid>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import {
  getBanner,
  getRecommendSonglist,
  getRecommendNewSong
} from "../../api/recommend";
import USwiper from "../../components/swiper/u-swiper";
import UGrid from "../../components/grid/u-grid";

export default {
  name: "recommend",
  components: { USwiper, UGrid },
  data() {
    return {
      bannerList: [],
      songlist: [],
      songlistLoading: true,
      newSongArray: [],
      newSongArrayLoading: true,
      isRefresh: false
    };
  },
  methods: {
    /** @description 下拉刷新 */
    async onRefresh() {
      this.isRefresh = true;
      this.songlist = [];
      this.songlistLoading = true;
      this.newSongArray = [];
      this.newSongArrayLoading = true;
      await Promise.all(this.__getDataTask());
      this.isRefresh = false;
    },
    /** @description 定义获取数据以及获取后应该执行的动作，返回一个任务队列，以供Promise.all/Promise.race调用*/
    __getDataTask() {
      return [
        getBanner().then(res => {
          this.bannerList = res;
        }),
        getRecommendSonglist().then(res => {
          this.songlist = res;
          this.songlistLoading = false;
        }),
        getRecommendNewSong(12).then(res => {
          this.newSongArray = res;
          this.newSongArrayLoading = false;
        })
      ];
    }
  },
  async created() {
    // 防止因为网络原因导致后面请求的任务延迟页面渲染
    await Promise.race(this.__getDataTask());
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("update");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  }
};
</script>

<style lang="scss">
#recommend {
  .list {
    min-height: 10rem;
  }
}
</style>
