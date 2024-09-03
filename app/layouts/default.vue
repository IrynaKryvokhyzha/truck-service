<template>
  <div class="wrapper">
    <Navigation />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup></script>

<style lang="scss">
.main {
  flex: 1;
  flex-grow: 1;
}
</style>
