<template>
  <div id="main-page" class="u-flex-col">
    <top-header></top-header>
    <van-tabs v-model="tabActive">
      <van-tab title="推荐" :to="{ name: 'recommend' }"></van-tab>
      <van-tab title="排行" :to="{ name: 'ranklist' }"></van-tab>
      <van-tab title="歌手" :to="{ name: 'singerlist' }"></van-tab>
    </van-tabs>
    <transition name="van-fade">
      <keep-alive :include="['recommend', 'ranklist', 'singerlist']">
        <router-view class="main-view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import TopHeader from "../components/header/top-header";

export default {
  name: "main-page",
  components: { TopHeader },
  data() {
    return {
      tabActive: 0
    };
  },
  methods: {},
  created() {
    this.tabActive = this.$route.meta.tabIndex;
  },
  updated() {
    this.tabActive = this.$route.meta.tabIndex;
  }
};
</script>

<style lang="scss">
.van-fade-leave,
.van-fade-leave-active,
.van-fade-leave-to {
  display: none !important;
}
// 给主页loading的加载换上色
.van-loading__circular {
  color: $u-color-bg-main;
}

#main-page {
  height: 100%;
  .main-view {
    overflow: auto;
    height: 100%;
  }
}
</style>
