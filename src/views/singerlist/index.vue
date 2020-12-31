<template>
  <div id="singerlist">
    <!-- 筛选器 -->
    <van-dropdown-menu class="menu">
      <van-dropdown-item
        v-model="languageValue"
        :options="languageOptions"
        @change="onLoad(true)"
      />
      <van-dropdown-item
        v-model="typeValue"
        :options="typeOptions"
        @change="onLoad(true)"
      />
      <van-dropdown-item
        v-model="initialValue"
        :options="initialOptions"
        @change="onLoad(true)"
      />
    </van-dropdown-menu>

    <!-- 歌手列表 -->
    <div class="list">
      <van-cell>
        <van-list
          v-model="activeOption.isLoading"
          :finished="!activeOption.more"
          @load="onLoad"
        >
          <van-row
            v-for="artist in activeOption.list"
            :key="`${activeOption.text}${artist.id}`"
            type="flex"
            align="center"
            @click="gotoSingerlist(artist)"
          >
            <van-col :span="6">
              <van-image
                :src="artist.picUrl"
                width="100%"
                lazy-load
                radius="5"
              ></van-image>
            </van-col>
            <van-col :span="18" class="u-p-10">{{ artist.name }}</van-col>
          </van-row>
        </van-list>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getAllSingerList } from "../../api/singer";

export default {
  name: "singerlist",
  data() {
    return {
      languageValue: -1,
      languageOptions: [
        { text: "全部地区", value: -1 },
        { text: "华语", value: 7 },
        { text: "欧美", value: 96 },
        { text: "日本", value: 8 },
        { text: "韩国", value: 16 },
        { text: "其他", value: 0 }
      ],
      typeValue: -1,
      typeOptions: [
        { text: "全部类型", value: -1 },
        { text: "男歌手", value: 1 },
        { text: "女歌手", value: 2 },
        { text: "乐队", value: 3 }
      ],
      initialValue: "-1",
      initialOptions: [
        { text: "热门", value: "-1" },
        ...Array(26)
          .fill("")
          .map((ele, index) => {
            let initial = String.fromCharCode(65 + index);
            return {
              text: `${initial}`,
              value: initial
            };
          }),
        { text: "#", value: "0" }
      ].map(ele => {
        ele.more = true;
        ele.offset = 0;
        ele.list = [];
        ele.isLoading = false;
        return ele;
      })
    };
  },
  computed: {
    activeOption() {
      return this.initialOptions.find(
        option => option.value === this.initialValue
      );
    }
  },
  methods: {
    gotoSingerlist(artist) {
      this.$router.push({
        name: "songlist",
        query: { type: "singerlist" },
        params: { id: artist.id }
      });
    },
    async onLoad(isRefresh) {
      let option = this.activeOption;
      await this.__getSingerlist(option, isRefresh);
    },
    initOption(option) {
      option.more = true;
      option.offset = 0;
      option.list = [];
      option.isLoading = false;
    },
    /**
     * @description 请求歌手列表
     * @param {{text:string;value:any;more:boolean;list:any[];offset:number}} option
     */
    async __getSingerlist(option, isRefresh) {
      let limit = 7;
      if (isRefresh) {
        this.initOption(option);
      }
      if (option.more) {
        option.isLoading = true;
        console.log(option);
        let res = await getAllSingerList(
          this.typeValue,
          this.languageValue,
          option.value,
          option.offset,
          limit
        );
        option.list = [...option.list, ...res.artists];
        option.more = res.more;
        option.offset = option.offset + limit;
        option.isLoading = false;
      }
    }
  },
  async created() {
    await this.onLoad();
  }
};
</script>

<style lang="scss">
#singerlist {
  display: flex;
  flex-direction: column;

  .list {
    height: 100%;
    overflow: auto;
  }
}
</style>
