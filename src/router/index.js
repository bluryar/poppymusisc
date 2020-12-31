import Vue from "vue";
import VueRouter from "vue-router";

const Main = () => import("../views/main.vue");

const NotFound = () => import("../views/NotFount.vue");

// 加载一级主页
const Recommend = () => import("../views/recommend");
const Ranklist = () => import("../views/ranklist");
const SingerList = () => import("../views/singerlist");

// 加载二级页面
const SongList = () => import("../views/recommend/songlist");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/pages"
  },
  {
    component: Main,
    path: "/pages",
    name: "main",
    redirect: "/pages/recommend",
    children: [
      {
        component: Recommend,
        name: "recommend",
        path: "/pages/recommend",
        meta: {
          tabIndex: 0
        }
      },
      {
        component: Ranklist,
        name: "ranklist",
        path: "/pages/ranklist",
        meta: {
          tabIndex: 1
        }
      },
      {
        component: SingerList,
        name: "singerlist",
        path: "/pages/singerlist",
        meta: {
          tabIndex: 2
        }
      }
    ]
  },
  {
    component: SongList,
    name: "songlist",
    path: "/pages/songlist/:id"
  },
  {
    component: NotFound,
    name: "notfount",
    path: "*"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
