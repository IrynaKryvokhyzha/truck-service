<template>
  <section class="hero">
    <div class="hero__container">
      <div class="content">
        <h1 class="content__title title">
          Tent Service: Reliable PVC Tarpaulin Solutions
        </h1>
        <h2 class="content__subtitle subtitle">
          Your trusted source for durable, custom-made PVC tarpaulins.
        </h2>
        <button class="button">Schedule an appointment</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
h1 {
  color: azure;
}
.hero {
  position: relative;
  background: url(../../public/assets/images/3.jpeg) top/cover no-repeat;
  height: 100svh;
  &::after {
    contain: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: blanchedalmond;
  }
  @media (max-width: $tablet) {
    //height: 100%;
  }
  // .hero__container

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.content {
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: flex-start;
  &__title {
    font-size: 86px;
    max-width: 70%;
    @media (max-width: 1000px) {
      max-width: 100%;
    }
    // @media (max-width: 700px) {
    //  font-size: 12px;
    //  line-height: 1;
    //  }
  }
  &__subtitle {
  }
}
.button {
  line-height: 2;
}
</style>
