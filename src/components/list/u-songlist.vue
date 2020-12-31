<template>
  <div class="u-songlist">
    <van-list :finished="finished" v-model="loading">
      <van-cell v-for="(song, index) in songlist" :key="song.id">
        <van-row>
          <van-col span="2" class="u-color-text-sub u-font-8">
            {{ index + 1 }}
          </van-col>
          <van-col span="16" style="padding:0 3px">{{ song.name }}</van-col>
          <van-col span="6" class="u-color-text-sub u-font-6">{{
            song.ar | getSingerName
          }}</van-col>
        </van-row>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "u-songlist",
  props: {
    songlist: Array,
    ids: Array,
    listImgUrl: String,
    listName: String,
    loading: Boolean,
    finished: Boolean
  },
  data() {
    return {};
  }
};
</script>

<style>
.u-songlist {
  /*  */
}
</style>
