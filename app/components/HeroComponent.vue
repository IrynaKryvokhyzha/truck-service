<template>
  <section class="hero">
    <div class="hero__container">
      <div class="content">
        <h1 class="content__title title">
          Tent Service: <span>Reliable PVC Tarpaulin Solutions</span>
        </h1>
        <h2 class="content__subtitle subtitle">
          Your trusted source for durable, custom-made PVC tarpaulins.
        </h2>
        <button class="button-green">Schedule an appointment</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background: url(../../public/assets/images/background.jpg) center/cover
    no-repeat;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.6;
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
  padding: 6rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  height: 100%;
  align-items: flex-start;
  z-index: 10;
  @media (max-width: $mobile) {
    padding: 4rem 2rem;
  }
  @media (max-width: $mobileSmall) {
    padding: 3rem 0;
    justify-content: space-around;
    gap: 40px;
  }
  &__title {
    max-width: 70%;
    color: $main-color;
    @media (max-width: 1070px) {
      font-size: 4.5rem; /* 72/16 */
    }
    @media (max-width: 850px) {
      max-width: 100%;
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
    color: #f3fede;
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
  //align-self: center;
}
span {
  display: block;
}
</style>
