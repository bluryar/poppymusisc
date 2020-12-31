<template>
  <div id="ranklist">
    <van-pull-refresh @refresh="refresh" v-model="toplistLoading">
      <!-- 官方榜 -->
      <h3 class="u-font-alibaba u-m-5">官方榜</h3>
      <u-ranklist
        :toplist="toplist"
        :toplistLoading="toplistLoading"
        :toplistFinished="toplistFinished"
      />
      <!-- 全球榜单 -->
      <h3 class="u-font-alibaba u-m-5">全球榜</h3>
      <u-grid
        :col="3"
        :list="toplistWithoutTracks"
        :is-loading="toplistLoading"
        :is-top-tag="true"
        :is-bot-tag="false"
        :is-sub-title="false"
        :route-type="'ranklist'"
      >
      </u-grid>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getTopListSummary } from "../../api/ranklist";
import URanklist from "../../components/list/u-ranklist";
import UGrid from "../../components/grid/u-grid";

export default {
  name: "ranklist",
  components: { URanklist, UGrid },
  data: function() {
    return {
      toplist: [],
      toplistWithoutTracks: [],
      toplistLoading: false,
      toplistFinished: false
    };
  },
  methods: {
    // async __getAsyncList() {
    //   let taskArrArr = [];
    //   let subTaskLimit = 3;
    //   for (let i = 0, j = -1; i < this.toplist.length; i++) {
    //     const list = this.toplist[i];
    //     if (i % 3 === 0) {
    //       j++;
    //       taskArrArr[j] = [];
    //     }
    //     if (i % subTaskLimit < subTaskLimit) {
    //       taskArrArr[j].push(
    //         getShortTopListById(list.id).then((song) => {
    //           list.song = song;
    //           list.isLoading = false;
    //         })
    //       );
    //     }
    //   }
    //   // 执行任务
    //   for (let i = 0; i < taskArrArr.length; i++) {
    //     const taskGroup = taskArrArr[i];
    //     console.log(taskGroup);
    //     await Promise.race(taskGroup);
    //   }
    // },
    // async __getSyncList() {
    //   for (let i = 0; i < this.toplist.length; i++) {
    //     const list = this.toplist[i];
    //     list.song = await getShortTopListById(list.id);
    //     list.isLoading = false;
    //   }
    // },
    async __getTopListSummary() {
      this.toplistFinished = false;
      this.toplistLoading = true;
      let res = await getTopListSummary();
      this.toplist = res.filter(list => list.tracks.length !== 0);
      this.toplistWithoutTracks = res.filter(list => list.tracks.length === 0);
      this.toplistLoading = false;
      this.toplistFinished = true;
    },
    async refresh() {
      await this.__getTopListSummary();
      this.$toast.success("刷新成功");
    }
  },
  async created() {
    await this.__getTopListSummary();
  }
};
</script>

<style></style>
