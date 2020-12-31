<template>
  <div id="songlist" class="u-flex-col">
    <div class="header">
      <return-header></return-header>
    </div>
    <div class="content u-flex-col">
      <list-panel :songlist="songlist"></list-panel>
      <u-songlist
        :songlist="list"
        :loading="loading"
        :finished="finished"
      ></u-songlist>
    </div>
  </div>
</template>

<script>
import ReturnHeader from "@/components/header/return-header.vue";
import ListPanel from "@/components/panel/list-panel.vue";
import USonglist from "@/components/list/u-songlist.vue";
import { getSonglistById, getSonglistByIds } from "@/api/songlist";
import { getSingerlistById } from "@/api/singer";

export default {
  name: "songlist",
  components: { ReturnHeader, ListPanel, USonglist },
  data() {
    return {
      songlist: {},
      list: [],
      loading: false,
      finished: false
    };
  },
  async created() {
    let routeType = this.$route.query.type;
    let songlistId = this.$route.params.id;

    this.loading = true;

    if (routeType === "songlist") {
      this.songlist = await getSonglistById(songlistId);
      this.list = await getSonglistByIds(
        this.songlist.trackIds.map(ele => ele.id).slice(0, 50)
      );
    } else if (routeType === "ranklist") {
      this.songlist = await getSonglistById(songlistId);
      this.list = await getSonglistByIds(
        this.songlist.trackIds.map(ele => ele.id).slice(0, 50)
      );
    } else if (routeType === "singerlist") {
      let res = await getSingerlistById(songlistId);
      this.songlist = res.artist;
      this.list = res.hotSongs;
    }
    this.loading = false;
    this.finished = true;
  },
  mounted() {}
};
</script>

<style lang="scss">
#songlist {
  height: 100%;
  .content {
    overflow: auto;
    height: 100%;
  }
}
</style>
