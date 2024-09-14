<template>
  <section class="products">
    <div class="products__container">
      <div class="products__content content">
        <div class="products__title title">
          <h2>
            {{ productsStore.title }}
          </h2>
        </div>
        <div class="products-items">
          <div
            class="item"
            v-for="product in productsStore.products"
            :key="product.id"
          >
            <div class="item-number">{{ product.id }}</div>
            <div class="item-description">
              <h3 class="item__subtitle subtitle">
                {{ product.subtitle }}
              </h3>
              <p class="item__text">
                {{ product.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useOurProductsStore } from "~/store/ourProducts";
const productsStore = useOurProductsStore();
</script>

<style lang="scss" scoped>
.products {
  position: relative;
  background: url(../../public/assets/images/garage.jpg) center/cover no-repeat;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }
  // .products__container

  &__container {
  }

  // .products__content

  &__content {
    padding: 4rem 5rem;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: $tablet) {
      padding: 2rem 3rem;
      gap: 10px;
    }
    @media (max-width: $mobile) {
      padding: 2rem 0;
    }
  }

  // .products__title

  &__title {
    font-size: 4rem;
    @media (max-width: $tablet) {
      font-size: 3rem;
      line-height: 1;
    }
    @media (max-width: $mobile) {
      font-size: 2.5rem;
    }
    @media (max-width: $mobileSmall) {
      font-size: 2rem;
    }
  }

  // .products__items

  &__items {
  }
}

.products-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  row-gap: 40px;
  @media (max-width: $tablet) {
    column-gap: 40px;
    row-gap: 20px;
  }
  @media (max-width: $mobile) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.item {
  display: flex;
  flex-direction: row;
  gap: 20px;
  transition: transform 0.3s ease;
  @media (any-hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }
  // .item__subtitle

  &__subtitle {
  }

  // .item__text

  &__text {
    color: #f3fede;
  }
}
.item-number {
  background-color: rgb(3, 122, 3);
  height: fit-content;
  font-size: 32px;
  font-weight: 900;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  align-self: flex-start;
}
.item-description {
}
.subtitle {
  @media (max-width: $mobileSmall) {
    font-size: 1.7rem;
  }
}
</style>
