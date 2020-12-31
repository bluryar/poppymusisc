import { axios } from "@/util/http";

/**
 * @description 获取歌手分类列表
 * @param {number} type 歌曲类型：-1:全部 。 1:男歌手 。 2:女歌手 。 3:乐队
 * @param {number} area  语种-1:全部 。 7华语 。 96欧美 。 8:日本 。 16韩国 。 0:其他
 * @param {string} initial  首字母
 * @param {number} offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {number} limit 返回数量 , 默认为 30
 */
export async function getAllSingerList(
  type = -1,
  area = -1,
  initial = "a",
  offset = 0,
  limit = 30
) {
  let res = await axios.get("/artist/list", {
    params: {
      type,
      area,
      initial,
      offset,
      limit
    }
  });
  return {
    artists: res.data.artists,
    more: true
  };
}

/**
 * @description 获取某个歌手的前50首音乐
 */
export async function getSingerlist50(id) {
  let res = await axios.get("/artist/top/song", { params: { id } });
  return res.data.songs;
}

/**
 * @description 获取某个歌手的简介信息和热门单曲
 */
export async function getSingerlistById(id) {
  let res = await axios.get("/artists", { params: { id } });
  return res.data;
}
