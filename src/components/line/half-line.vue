<template>
  <div class="half-line" :style="{ backgroundColor: color }"></div>
</template>

<script>
export default {
  name: "half-line",
  props: {
    color: String
  }
};
</script>

<style lang="scss" scoped>
.half-line {
  height: 1px;
  transform: scaleY(0.5);
  transform-origin: 50% 0;
  color: #fff;
}
</style>
