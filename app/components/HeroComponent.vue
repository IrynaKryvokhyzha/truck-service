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

<style lang="scss" scoped>
h1 {
  color: azure;
}
.hero {
  position: relative;
  background: url(../../public/assets/images/3.jpeg) top/cover no-repeat;
  height: 100svh;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    opacity: 0.6;
  }
  @media (max-width: $tablet) {
    //height: 100%;
  }
  // .hero__container

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}
.content {
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  height: 100%;
  align-items: flex-start;
  z-index: 10;

  @media (max-width: $mobile) {
    padding: 1rem 2rem;
  }
  @media (max-width: $mobileSmall) {
    padding: 1rem 0;
    justify-content: flex-start;
    gap: 40px;
  }
  &__title {
    font-size: 6rem; /* 96/16 */
    max-width: 70%;

    @media (max-width: 1070px) {
      font-size: 4.5rem; /* 72/16 */
    }
    @media (max-width: 850px) {
      max-width: 100%;
    }
    @media (max-width: $mobile) {
      font-size: 4rem; /* 64/16 */
    }
    @media (max-width: 510px) {
      font-size: 3.62rem; /* 58/16 */
    }
    @media (max-width: $mobileSmall) {
      font-size: 2.6rem; /* 42/16 */
    }
  }
  &__subtitle {
    line-height: 1.5;
    @media (max-width: $mobile) {
      font-size: 24px;
    }
    @media (max-width: $mobileSmall) {
      flex: 1 1 auto;
    }
  }
}
.button {
  line-height: 2;
  align-self: center;
  margin-bottom: 75px;
}
</style>
