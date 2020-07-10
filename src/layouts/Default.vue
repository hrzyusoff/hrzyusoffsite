<template>
  <!-- main app -->
  <div id="app" :class="{ 'is-dark-mode': getDarkModeState }">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  computed: {
    getDarkModeState() {
      return this.$store.state.isDarkMode;
    },
  },
};
</script>
<style lang="scss">
#app {
  &.is-dark-mode {
    background-color: #f7f7f7;
  }
}
</style>
