import "./util/init";
import "./assets/font/Alibaba-PuHuiTi-Regular/Alibaba-PuHuiTi-Regular.css";
import "./style/index.scss";
import "./assets/icon/music/iconfont.css";

import HalfLine from "./components/line/half-line.vue";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueBus } from "./plugins/bus/bus";
import { redColor } from "./util/directive";
import {
  Toast,
  Button,
  Icon,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload,
  Image as VanImage,
  Tag,
  Sticky,
  Loading,
  PullRefresh,
  NavBar,
  Grid,
  GridItem,
  List,
  Cell,
  CellGroup,
  Col,
  Row,
  DropdownMenu,
  DropdownItem,
  IndexBar,
  IndexAnchor,
  Skeleton,
  Circle,
  Progress,
  Popup,
  Badge
} from "vant";

// vant插件、组件等
Vue.use(Sticky)
  .use(Popup)
  .use(Circle)
  .use(Progress)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Skeleton)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Row)
  .use(Col)
  .use(List)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Tag)
  .use(VanImage)
  .use(Lazyload)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Icon)
  .use(Toast)
  .use(Button)
  .use(PullRefresh)
  .use(Grid)
  .use(GridItem)
  .use(Badge)
  .use(Loading);

Vue.config.productionTip = false;

// 使用自定义插件
Vue.use(VueBus, { mode: "vue" });

// 自定义全局组件
Vue.component("half-line", HalfLine);

Vue.directive(redColor.name, redColor.option);

Vue.filter("getSingerName", singers => {
  return singers.map(singer => singer.name).join(" & ");
});
Vue.filter("getNumberCnUnit", val => {
  if (val >= 100000000) {
    return Math.floor(val / 100000000) + "亿";
  } else if (val >= 10000) {
    return Math.floor(val / 10000) + "万";
  } else return val;
});

new Vue({
  router,
  store,
  // eslint-disable-next-line
  render: (h) => h(App),
}).$mount("#app");
