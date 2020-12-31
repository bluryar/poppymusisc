/** 播放模式 */
export const PlayMode = {
  /** 随机播放 */
  RANDOM: "__RANDOM__",
  /** 列表循环 */
  LIST: "__LIST__",
  /** 单曲循环 */
  SINGLE: "__SINGLE__"
};

export const state = {
  /** 播放模式 */
  playMode: PlayMode.LIST,

  /** 播放列表 */
  songList: [],

  /** 播放状态 */
  isPlaying: false,
  /** 正在播放的歌曲 */
  playingSong: {},
  /** 当前播放的音乐在列表中的索引 */
  playingIndex: -1
};
