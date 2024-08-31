<template>
  <div>
    <header class="header">
      <div
        :class="{ 'menu__body--visible': sidebarVisible }"
        class="navigation__container"
      >
        <div class="header__menu menu">
          <div>
            <NuxtLink to="/">
              <NuxtImg
                class="logo"
                width="56px"
                densities="1x"
                format="webp"
                src="/assets/images/logo.png"
              />
            </NuxtLink>
            <div
              class="menu__icon"
              :class="{ _active: sidebarVisible }"
              @click="showSideBar"
            >
              <span></span>
            </div>
          </div>

          <nav :class="{ _active: sidebarVisible }" class="menu__body">
            <ul class="menu__list">
              <li class="menu__link">
                <NuxtLink class="menu__item" to="/"><span>Home</span></NuxtLink>
              </li>
              <li class="menu__link">
                <NuxtLink class="menu__item" to="/about"
                  ><span>About</span></NuxtLink
                >
              </li>
              <li class="menu__link">
                <NuxtLink class="menu__item" to="/products">Products</NuxtLink>
              </li>
              <button class="close-menu-list" @click="showSideBar">
                <iconify-icon icon="ri:menu-line"></iconify-icon>
                <font-awesome-icon :icon="['fas', 'xmark']" />
              </button>
            </ul>
          </nav>
          <button>
            <NuxtLink class="button" to="/login">Login</NuxtLink>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  //name: "Navigation",
  //   const navigation = [
  //   { name: 'Dashboard', href: '#', current: true },
  //   { name: 'Team', href: '#', current: false },
  //   { name: 'Projects', href: '#', current: false },
  //   { name: 'Calendar', href: '#', current: false },
  // ]
  data() {
    return {
      sidebarVisible: false,
    };
  },
  methods: {
    showSideBar() {
      this.sidebarVisible = !this.sidebarVisible;
      if (this.sidebarVisible) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  margin-top: 1rem;
  padding: 10px 0;
  color: $main-color;
  position: relative;
  @media (min-width: $mobileSmall) {
    &::before {
      content: "";
      top: 0;
      left: 0;
      height: 1px;
      width: 100%;
      position: absolute;
      border: 1px solid $main-color;
    }
    &::after {
      content: "";
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      position: absolute;
      border: 1px solid $main-color;
    }
  }

  // .header__menu

  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.navigation {
  // .navigation__container

  &__container {
  }
}
.menu {
  // .menu__list

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media (max-width: $mobile) {
      gap: 1rem;
    }
  }

  // .menu__link

  &__link {
    position: relative;
  }

  // .menu__item

  &__item {
    display: inline-block;
    letter-spacing: 3px;
    line-height: 200%;
    text-transform: uppercase;
    transition: all 0.4s ease 0s;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1.5px;
      background-color: $main-color;
      transition: width 0.3s ease 0s;
    }
    @media (any-hover: hover) {
      &:hover::after {
        width: 100%;
      }
    }
  }
}
.logo {
  @media (max-width: $mobileSmall) {
    display: none;
  }
}

// Burger menu

@media (max-width: $mobileSmall) {
  .menu__list {
    align-items: flex-start;
    flex-direction: column;
  }
  .menu__list > li {
    padding: 10px 0;
    font-size: 1.5rem; /* 24/16 */
  }
  .menu__icon {
    display: block;
    z-index: 5;
    position: relative;
    width: 1.87rem; /* 30/16 */
    height: 1.12rem; /* 18/16 */
    cursor: pointer;
  }
  .menu__icon span,
  .menu__icon::before,
  .menu__icon::after {
    left: 0;
    position: absolute;
    width: 100%;
    height: 10%;
    background-color: rgb(255, 238, 238);
    transition: all 0.3s ease 0s;
  }
  //три полосочки меню

  .menu__icon::before,
  .menu__icon::after {
    content: "";
  }
  .menu__icon::before {
    top: 0;
  }
  .menu__icon::after {
    bottom: 0;
  }
  .menu__icon span {
    top: 50%;
    transform: scale(1) translate(0px, -50%);
  }
  .menu__body {
    position: fixed;
    overflow: auto;
    right: 100%;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 100px 30px 30px 30px;
    background-color: $main-color;
    transition: right 0.5s ease 0s;
    color: black;
  }
  .menu__body._active {
    right: 0;
  }
  .menu__icon._active span {
    transform: scale(0) translate(0px, -50%);
  }
  .menu__icon._active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0px, -50%);
    background-color: black;
  }
  .menu__icon._active::after {
    bottom: 50%;
    transform: rotate(45deg) translate(0px, 50%);
    background-color: black;
  }
}
</style>
