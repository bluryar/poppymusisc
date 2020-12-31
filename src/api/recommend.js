import { axios } from "@/util/http";

/**
 * @description 获取轮播图
 * @param {number} type 资源类型,对应以下类型,默认为 0 即PC，1: android；2: iphone；3: ipad
 */
export async function getBanner(type = 1) {
  let res = await axios.get("/banner", {
    params: {
      type
    }
  });
  return res.data.banners;
}

/**
 * @description 调用此接口 , 可获取推荐歌单
 * @param {number} limit 取出数量 , 默认为 15
 */
export async function getRecommendSonglist(limit = 15) {
  let res = await axios.get("/personalized", {
    params: {
      limit
    }
  });
  return res.data.result;
}

/**
 * @description 调用此接口 , 可获取推荐新音乐
 * @param {number} limit 取出数量 , 默认为 10
 */
export async function getRecommendNewSong(limit = 10) {
  let res = await axios.get("/personalized/newsong", {
    params: {
      limit
    }
  });
  return res.data.result;
}
