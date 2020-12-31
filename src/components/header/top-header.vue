<template>
  <div class="top-header">
    <van-nav-bar class="u-font-alibaba">
      <div slot="left">
        <van-icon
          name="orders-o"
          size="1.5rem"
          class="u-m-l-5"
          color="#ee2e23"
        />
      </div>
      <h3
        slot="title"
        @click="
          $route.name &&
            $route.name !== `recommend` &&
            $router.push({ name: `recommend` })
        "
      >
        Poppy's Music
      </h3>
      <div slot="right">
        <van-icon name="search" size="1.5rem" class="u-m-r-5" color="#ee2e23" />
      </div>
    </van-nav-bar>
  </div>
</template>

<script>
export default { name: "top-header" };
</script>

<style></style>
