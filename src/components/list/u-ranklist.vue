<template>
  <van-list v-model="toplistLoading" :finished="toplistFinished">
    <van-cell v-for="list in toplist" :key="list.id">
      <van-row @click="gotoSonglist(list)">
        <!-- 封面 -->
        <van-col :span="8" style="mix-height: 5rem">
          <van-image
            width="100%"
            :src="list.coverImgUrl"
            lazy-load
            radius="5"
          ></van-image>
          <!-- 展示歌曲 -->
        </van-col>
        <van-col :span="16" align="center">
          <van-list v-if="!toplistLoading">
            <van-cell
              class="u-p-0 u-p-l-8"
              v-for="(song, index) in list.tracks"
              :key="index"
            >
              <van-row>
                <van-col :span="2" class="u-color-font-main">{{
                  index + 1
                }}</van-col>
                <van-col :span="22">
                  <div class="van-ellipsis">
                    {{ song.first }}
                  </div>
                  <div class="van-ellipsis u-color-text-sub u-font-size-sub">
                    {{ song.second }}
                  </div>
                </van-col>
              </van-row>
            </van-cell>
          </van-list>
          <van-skeleton :loading="toplistLoading" row="3" />
        </van-col>
      </van-row>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  name: "u-ranklist",
  props: {
    toplist: Array,
    toplistLoading: Boolean,
    toplistFinished: Boolean
  },
  methods: {
    gotoSonglist(list) {
      this.$router.push({
        name: "songlist",
        query: { type: "ranklist" },
        params: { id: list.id }
      });
    }
  }
};
</script>

<style></style>
