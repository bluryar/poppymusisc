export const TabRouterAnimate = {
  data() {
    return {
      routerAnimateName: "van-slide-right"
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.meta.tabIndex) {
        vm.routerAnimateName =
          from.meta.tabIndex < to.meta.tabIndex
            ? "van-slide-right"
            : "van-slide-left";
      }
    });
  }
};
