import { axios } from "@/util/http";

/**
 * @description 获取所有热榜（排行榜）的信息
 */
export async function getTopList() {
  let res = await axios.get("/toplist");
  // 初始化数据结构
  return res.data.list.map(item => {
    item.songsPromise = null;
    return {
      id: item.id,
      name: item.name,
      coverImgUrl: item.coverImgUrl,
      playCount: item.playCount,
      task: item.songsPromise,
      song: null, // 需要填充
      isLoading: true //用于指示加载状态
    };
  });
}

/**
 * @description 获取某个热榜的内容
 */
export function getShortTopListById(id, limit = 3) {
  return axios
    .get("/top/list", {
      params: {
        id
      }
    })
    .then(res => {
      res.data.playlist.tracks = res.data.playlist.tracks.slice(0, limit);
      res.data.playlist.tracks = res.data.playlist.tracks.map(track => {
        track.isLoading = true;
        return {
          id: track.id,
          name: track.name,
          al: track.al,
          ar: track.ar,
          isLoading: true
        };
      });
      return {
        creator: res.data.playlist.creator,
        tracks: res.data.playlist.tracks
      };
    });
}

/**
 * @description 获取所有热榜（排行榜）的简介信息
 */
export async function getTopListSummary() {
  let res = await axios.get("/toplist/detail");
  // 初始化数据结构
  return res.data.list;
}
