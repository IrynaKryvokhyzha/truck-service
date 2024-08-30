<template>
  <div>
    <header class="header">
      <nav
        :class="{ 'menu__body--visible': sidebarVisible }"
        class="navigation__container"
      >
        <NuxtLink to="/">
          <NuxtImg width="56px" src="/assets/images/logo.png" />
        </NuxtLink>
        <ul class="navigation__list">
          <li class="navigation__link">
            <NuxtLink class="navigation__item" to="/"
              ><span>Home</span></NuxtLink
            >
          </li>
          <li class="navigation__link">
            <NuxtLink class="navigation__item" to="/about"
              ><span>About</span></NuxtLink
            >
          </li>
          <li class="navigation__link">
            <NuxtLink class="navigation__item" to="/products"
              >Products</NuxtLink
            >
          </li>
          <button class="close-menu-list" @click="showSideBar">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
        </ul>
        <button>
          <NuxtLink class="button" to="/login">Login</NuxtLink>
        </button>
      </nav>
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
.navigation {
  // .navigation__container

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  // .navigation__list

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  // .navigation__link

  &__link {
    position: relative;
  }
  //.navigation__item
  &__item {
    //position: relative;

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

// Burger menu

.open-menu-list,
.close-menu-list {
  position: absolute;
  color: white;
  font-size: 36px;
  display: none;
}
.open-menu-list {
  padding-top: 5px;
  top: 0px;
  left: 10px;

  @media (max-width: 767.98px) {
    display: block;
  }
  @media (max-width: 450px) {
    padding-top: 0;
  }
}
.close-menu-list {
  top: -70px;
  right: 20px;
  color: black;
  display: block;
}
.menu__body--visible {
  left: 0;
}

.menu__body--visible .close-menu-list {
  display: block;
}
</style>
