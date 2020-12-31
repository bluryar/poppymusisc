import { axios } from "@/util/http";

/**
 * @description 获取歌单详情
 */
export async function getSonglistById(id) {
  let res = await axios.get("/playlist/detail", {
    params: {
      id
    }
  });

  return res.data.playlist;
}

/**
 * @description  调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)
 * @param {number[]} ids
 */
export async function getSonglistByIds(ids) {
  let res = await axios.get("/song/detail", {
    params: {
      ids: ids.join(",")
    }
  });
  return res.data.songs;
}
