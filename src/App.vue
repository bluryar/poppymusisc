<template>
  <div id="app">
    <router-view />
    <div id="player" class="van-hairline--top">
      <player></player>
    </div>
  </div>
</template>

<script>
import Player from "./components/player/player.vue";
export default {
  name: "app",
  components: { Player }
};
</script>

<style lang="scss">
html {
  height: 100%;
  body {
    height: 100%;
    #app {
      height: 100%;
      height: 93%;
    }
    #player {
      height: 7%;
    }
  }
}
</style>
