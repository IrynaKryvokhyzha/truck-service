<template>
  <div class="home-section">
    <hero-component />
    <skills-component />
    <our-products />
    <truck-covers />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home-section {
  position: relative;
  background: url(../../public/assets/images/stars.jpg) center/cover no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  scrollbar-gutter: stable;
  z-index: 9;
}
</style>
