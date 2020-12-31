import { axios } from "@/util/http";

/**
 * @description 获取音乐的URL
 * @param {number} id 歌曲id
 * @returns {Promise<false|{url:string,code:number,size:number,id:number,[key:string]:any}>}
 */
export async function getSongUrl(id) {
  let res = await axios.get("/song/url", {
    params: { id }
  });

  let resData = res.data.data;
  if (resData.url === null) return false;
  return resData;
}

/**
 * @description 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
 * @param {number} id 歌曲id
 * @returns { Promise<{ success: true, message: 'ok' } | { success: false, message: '亲爱的,暂无版权' }>}
 */
export async function checkSongValid(id) {
  let res = await axios.get("/check/music", {
    params: { id }
  });

  return res.data;
}

/**
 * @description 获取歌词
 * @param {number} id 歌曲id
 * @returns {}
 */
export async function getLyric(id) {
  let res = await axios.get("/lyric", {
    params: { id }
  });

  return res.data;
}
