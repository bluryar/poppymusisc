<template>
  <div class="u-grid list">
    <van-loading type="circular" vertical size="36" v-if="isLoading"
      >加载中...</van-loading
    >
    <van-grid :column-num="col" :center="false" :border="false">
      <van-grid-item
        v-for="item in list"
        :key="item.id"
        @click="gotoSonglist(item)"
      >
        <div slot="icon" class="image-wrapper">
          <van-image
            :src="item.picUrl || item.coverImgUrl"
            lazy-load
            radius="5"
            width="100%"
          ></van-image>
          <div
            class="tag tag-top u-font-4"
            style="
              background-color: rgba(0, 0, 0, 0.35);
              border-radius: 1rem;
              padding: 0 2px;
            "
            v-if="isTopTag"
          >
            <van-icon name="service-o" />
            <span style="padding: 2px">{{
              item.playCount | getNumberCnUnit
            }}</span>
          </div>

          <van-icon
            class="tag tag-bot"
            name="play-circle-o"
            size="24"
            v-if="isBotTag"
            color="danger"
          />
        </div>
        <div slot="text">
          <div v-text="item.name" class="u-line-2 u-font-size-sub"></div>
          <div
            class="sub-title u-font-5 u-color-text-sub van-multi-ellipsis--l2"
            v-if="isSubTitle"
          >
            {{ item.song.artists | getSingerName }}
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "u-grid",
  methods: {
    gotoSonglist(list) {
      this.$router.push({
        name: "songlist",
        params: {
          id: list.id
        },
        query: {
          type: this.routeType
        }
      });
    }
  },
  props: {
    col: Number,
    list: Array,
    isLoading: Boolean,
    isTopTag: Boolean,
    isBotTag: Boolean,
    isSubTitle: Boolean,
    routeType: String
  }
};
</script>

<style lang="scss">
.list {
  min-height: 10rem;
  .image-wrapper {
    position: relative;
    .tag {
      position: absolute;
    }
    .tag-top {
      top: 2%;
      right: 2%;
      //   opacity: 0.65;
      color: #eee;
    }
    .tag-bot {
      height: 1.5rem;
      bottom: 5%;
      right: 3%;
      color: $u-color-bg-main;
      opacity: 0.8;
    }
  }
}
.van-loading__circular {
  color: $u-color-bg-main;
}
</style>
