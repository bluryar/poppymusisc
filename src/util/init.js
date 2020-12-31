export function init() {
  initFontRem();
}

/**
 * 初始化rem单位
 */
function initFontRem() {
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.body.parentElement;
  htmlDom.style.fontSize = `${htmlWidth / 24}px`;
}

init();
