<template>
  <section class="truck-cover">
    <div class="truck-cover__container">
      <div class="truck-cover__content content">
        <h2 class="content__title title">
          {{ coversStore.title }}
        </h2>
        <div class="options">
          <div
            class="content__description description"
            v-for="(item, index) in coversStore.options"
            :key="item.id"
            :class="{ 'gray-background': index % 2 === 0 }"
          >
            <h3 class="description__title">{{ item.subtitle }}</h3>

            <p class="description__text">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <div class="truck-cover__image">
        <NuxtImg
          densities="1x"
          format="webp"
          src="/assets/images/truck.jpg"
          alt="truck image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCoversStore } from "~/store/covers";
const coversStore = useCoversStore();
</script>

<style lang="scss" scoped>
.truck-cover {
  // .truck-cover__container

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 2rem 6rem;
    gap: 40px;
    @media (max-width: $tablet) {
      grid-template-columns: auto;
      gap: 20px;
    }
    @media (max-width: $mobile) {
      padding: 0;
      gap: 5px;
    }
  }

  // .truck-cover__content

  &__content {
  }

  // .truck-cover__image

  &__image {
  }
}
.content {
  // .content__header

  &__title {
    font-size: 4rem;
    @media (max-width: $mobile) {
      font-size: 3rem;
      padding: 1rem;
    }
    @media (max-width: $mobileSmall) {
      font-size: 2.5rem;
    }
  }

  // .content__description

  &__description {
  }
}
.description {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  padding: 10px 20px;
  font-size: 1.3rem;
  color: $light-color;
  line-height: 1.5;
  &.gray-background {
    background-color: rgb(30, 24, 24, 0.5);
  }
  @media (max-width: $mobileSmall) {
    grid-template-columns: auto;
  }
  // .description__title

  &__title {
    padding-bottom: 10px;
  }

  // .description__text

  &__text {
  }
}
.options {
  border: 1px solid rgb(60, 60, 60);
  @media (max-width: $mobile) {
    border: none;
  }
}
</style>
